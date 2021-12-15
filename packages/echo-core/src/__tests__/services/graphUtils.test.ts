import { AccountInfo, AuthenticationResult } from '@azure/msal-browser';
import { User } from '@microsoft/microsoft-graph-types';
import { EchoAuthProvider } from '../../services/authentication/echoProvider';
import { graphGetProfile, graphGetProfilePicture } from '../../services/graph/graphUtils';

jest.mock('@azure/msal-browser');
jest.mock('../../configuration/environment');
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

jest.mock('../../services/authentication/echoProvider');
const mockedEchoAuthProvider = EchoAuthProvider as jest.Mocked<typeof EchoAuthProvider>;

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();

    const accountMock = {
        account: { username: 'test@test.no' }
    } as unknown;

    mockedEchoAuthProvider.userProperties.account = accountMock as AccountInfo;
});

const globalConsoleMethod = global.console;
beforeAll(() => {
    // overrides console log with a mock in test run
    const mockConsole = { log: jest.fn(), error: jest.fn() } as unknown;
    global.console = mockConsole as Console;
});

afterAll(() => {
    global.console = globalConsoleMethod;
});

describe('graphGetProfile', () => {
    const fetchMock = jest.spyOn(window, 'fetch');

    it('should successfully fetch graph profile', async () => {
        const user = {
            displayName: 'test',
            jobTitle: 'developer',
            mail: 'test@test.no'
        } as User;

        const mockSuccessResponse = { ok: true, json: () => Promise.resolve(user) } as Response;
        fetchMock.mockImplementation(() => Promise.resolve(mockSuccessResponse));
        const accessToken = 'accessToken';

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
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

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfile = await graphGetProfile();
        expect(fetchMock).toBeCalled();
        expect(graphProfile).toBe(undefined);
    });

    it('should return undefined because token fetch failed', async () => {
        const mockFetch = jest.fn();
        fetchMock.mockImplementation = mockFetch;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue(null);

        const graphProfile = await graphGetProfile();
        expect(mockFetch).not.toBeCalled();
        expect(graphProfile).toBe(undefined);
    });

    it('should return undefined because no account is present on auth provider', async () => {
        const mockFetch = jest.fn();
        fetchMock.mockImplementation = mockFetch;
        mockedEchoAuthProvider.userProperties.account = null;

        const aquireTokenSilentOrRedirectToAuthenticateSpy = jest.spyOn(
            mockedEchoAuthProvider,
            'aquireTokenSilentOrRedirectToAuthenticate'
        );

        const graphProfile = await graphGetProfile();
        expect(aquireTokenSilentOrRedirectToAuthenticateSpy).not.toBeCalled();
        expect(mockFetch).not.toBeCalled();
        expect(graphProfile).toBe(undefined);
    });
});

describe('graphGetProfilePicture', () => {
    const fetchMock = jest.spyOn(window, 'fetch');

    it('should successfully fetch graph picture url', async () => {
        const mockSuccessResponse = { ok: true, blob: () => Promise.resolve(new Blob()) } as Response;
        fetchMock.mockImplementation(() => Promise.resolve(mockSuccessResponse));

        const pictureUrl = 'blob:thisAwesomeImage';
        const mockCreateObjectURL = jest.fn().mockImplementation(() => pictureUrl);
        window.URL.createObjectURL = mockCreateObjectURL;

        const accessToken = 'accessToken';

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(fetchMock).toBeCalled();
        expect(graphProfileUrl).toStrictEqual(pictureUrl);
    });

    it('should try to fetch graph profile picture, but response is not successful so picture url is undefined', async () => {
        const mockSuccessResponse = { ok: false } as Response;
        fetchMock.mockImplementation(() => Promise.resolve(mockSuccessResponse));

        const accessToken = 'accessToken';

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(fetchMock).toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should try to fetch graph profile picture, but response does not contain picture url, so return value is undefined', async () => {
        const mockSuccessResponse = { ok: false, blob: () => Promise.reject() } as Response;
        fetchMock.mockImplementation(() => Promise.resolve(mockSuccessResponse));

        const accessToken = 'accessToken';

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(fetchMock).toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should return undefined because token fetch failed', async () => {
        const mockFetch = jest.fn();
        fetchMock.mockImplementation = mockFetch;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue(null);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(mockFetch).not.toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should return undefined because no account is present on auth provider', async () => {
        const mockFetch = jest.fn();
        fetchMock.mockImplementation = mockFetch;
        mockedEchoAuthProvider.userProperties.account = null;

        const aquireTokenSilentOrRedirectToAuthenticateSpy = jest.spyOn(
            mockedEchoAuthProvider,
            'aquireTokenSilentOrRedirectToAuthenticate'
        );

        const graphProfileUrl = await graphGetProfilePicture();
        expect(aquireTokenSilentOrRedirectToAuthenticateSpy).not.toBeCalled();
        expect(mockFetch).not.toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });
});
