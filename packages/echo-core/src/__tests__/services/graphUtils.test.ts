import { AuthenticationResult } from '@azure/msal-browser';
import { User } from '@microsoft/microsoft-graph-types';
import { EchoAuthProvider } from '../../services/authentication/echoProvider';
import { graphGetProfile, graphGetProfilePicture } from '../../services/graph/graphUtils';

jest.mock('@azure/msal-browser');
jest.mock('../../configuration/environment', () => {
    return {
        env: jest.fn().mockImplementation(() => {
            return {
                REACT_APP_AZURE_AD_CLIENT_ID: 'REACT_APP_AZURE_AD_CLIENT_ID'
            };
        }),
        isDevelopment: jest.fn().mockReturnValue(() => {
            return false;
        })
    };
});

jest.mock('../../services/authentication/echoProvider', () => ({
    EchoAuthProvider: {
        aquireTokenSilentOrRedirectToAuthenticate: jest.fn(),
        userProperties: {
            account: {
                username: 'test@test.no'
            }
        }
    }
}));

beforeEach(() => {
    jest.clearAllMocks();
    const accountMock = {
        account: { username: 'test@test.no' }
    } as any;

    EchoAuthProvider.userProperties.account = accountMock;
});

describe('graphGetProfile', () => {
    const fetchMock = window.fetch as jest.Mock;
    it('should successfully fetch graph profile', async () => {
        const user = {
            displayName: 'test',
            jobTitle: 'developer',
            mail: 'test@test.no'
        } as User;

        const mockSuccessResponse = { ok: true, json: () => Promise.resolve(user) } as Response;
        fetchMock.mockResolvedValue(mockSuccessResponse);
        const accessToken = 'accessToken';

        (EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock).mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfile = await graphGetProfile();
        expect(fetchMock).toBeCalled();
        expect(graphProfile).toStrictEqual(user);
    });

    it('should try to fetch graph profile, but response is not successful so profile is undefined', async () => {
        const mockFailedResponse = { ok: false } as Response;
        fetchMock.mockImplementation(() => Promise.resolve(mockFailedResponse));
        const accessToken = 'accessToken';

        (EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock).mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfile = await graphGetProfile();
        expect(fetchMock).toBeCalled();
        expect(graphProfile).toBe(undefined);
    });

    it('should return undefined because token fetch failed', async () => {
        (EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock).mockResolvedValue(null);

        const graphProfile = await graphGetProfile();
        expect(fetchMock).not.toBeCalled();
        expect(graphProfile).toBe(undefined);
    });

    it('should return undefined because no account is present on auth provider', async () => {
        EchoAuthProvider.userProperties.account = null;

        const aquireTokenSilentOrRedirectToAuthenticateSpy =
            EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock;

        const graphProfile = await graphGetProfile();
        expect(aquireTokenSilentOrRedirectToAuthenticateSpy).not.toBeCalled();
        expect(fetchMock).not.toBeCalled();
        expect(graphProfile).toBe(undefined);
    });
});

describe('graphGetProfilePicture', () => {
    const fetchMock = window.fetch as jest.Mock;

    beforeEach(() => {
        const accessToken = 'accessToken';
        (EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock).mockResolvedValue({
            accessToken
        } as AuthenticationResult);
    });

    it('should successfully fetch graph picture url', async () => {
        const mockSuccessResponse = { ok: true, blob: () => Promise.resolve(new Blob()) } as Response;
        (fetchMock as jest.Mock).mockResolvedValue(mockSuccessResponse);

        const pictureUrl = 'blob:thisAwesomeImage';
        const mockCreateObjectURL = jest.fn().mockImplementation(() => pictureUrl);
        window.URL.createObjectURL = mockCreateObjectURL;

        const graphProfileUrl = await graphGetProfilePicture();

        expect(fetchMock).toBeCalled();
        expect(graphProfileUrl).toBe(pictureUrl);
    });

    it('should try to fetch graph profile picture, but response is not successful so picture url is undefined', async () => {
        const mockSuccessResponse = { ok: false } as Response;
        (window.fetch as jest.Mock).mockResolvedValue(mockSuccessResponse);

        const graphProfileUrl = await graphGetProfilePicture();

        expect(fetchMock).toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should try to fetch graph profile picture, but response does not contain picture url, so return value is undefined', async () => {
        const mockSuccessResponse = { ok: false } as Response;
        (window.fetch as jest.Mock).mockResolvedValue(mockSuccessResponse);

        const graphProfileUrl = await graphGetProfilePicture();

        expect(fetchMock).toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should return undefined because token fetch failed', async () => {
        (EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock).mockResolvedValue(null);

        const graphProfileUrl = await graphGetProfilePicture();

        expect(fetchMock).not.toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should return undefined because no account is present on auth provider', async () => {
        EchoAuthProvider.userProperties.account = null;

        const aquireTokenSilentOrRedirectToAuthenticateSpy =
            EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock;

        const graphProfileUrl = await graphGetProfilePicture();
        expect(aquireTokenSilentOrRedirectToAuthenticateSpy).not.toBeCalled();
        expect(fetchMock).not.toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });
});
