import { AccountInfo, AuthenticationResult } from '@azure/msal-browser';
import { User } from '@microsoft/microsoft-graph-types';
import EchoAuthProvider from '../../services/authentication/echoProvider';
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
});

const globalConsoleMethod = global.console;
const globalFetchMethod = window.fetch;
beforeAll(() => {
    // removes console log in test run
    global.console = ({ log: jest.fn(), error: jest.fn() } as unknown) as Console;
});

afterAll(() => {
    global.console = globalConsoleMethod;
    window.fetch = globalFetchMethod;
});

describe('graphGetProfile', () => {
    it('should successfully fetch graph profile', async () => {
        const user = {
            displayName: 'test',
            jobTitle: 'developer',
            mail: 'test@test.no'
        } as User;

        const mockSuccessResponse = { ok: true, json: () => Promise.resolve(user) } as Response;
        const mockFetch = jest.fn().mockImplementation(() => mockSuccessResponse);
        window.fetch = mockFetch;
        const accessToken = 'accessToken';
        mockedEchoAuthProvider.userProperties.account = ({
            account: { username: 'test@test.no' }
        } as unknown) as AccountInfo;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfile = await graphGetProfile();
        expect(mockFetch).toBeCalled();
        expect(graphProfile).toStrictEqual(user);
    });

    it('should try to fetch graph profile, but response is not successful so profile is undefined', async () => {
        const mockFailedResponse = { ok: false } as Response;
        const mockFetch = jest.fn().mockImplementation(() => mockFailedResponse);
        window.fetch = mockFetch;
        const accessToken = 'accessToken';
        mockedEchoAuthProvider.userProperties.account = ({
            account: { username: 'test@test.no' }
        } as unknown) as AccountInfo;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfile = await graphGetProfile();
        expect(mockFetch).toBeCalled();
        expect(graphProfile).toBe(undefined);
    });

    it('should return undefined because token fetch failed', async () => {
        const mockFetch = jest.fn();
        window.fetch = mockFetch;
        mockedEchoAuthProvider.userProperties.account = ({
            account: { username: 'test@test.no' }
        } as unknown) as AccountInfo;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue(null);

        const graphProfile = await graphGetProfile();
        expect(mockFetch).not.toBeCalled();
        expect(graphProfile).toBe(undefined);
    });

    it('should return undefined because no account is present on auth provider', async () => {
        const mockFetch = jest.fn();
        window.fetch = mockFetch;
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
    it('should successfully fetch graph picture url', async () => {
        const mockSuccessResponse = { ok: true, blob: () => Promise.resolve(new Blob()) } as Response;
        const mockFetch = jest.fn().mockImplementation(() => mockSuccessResponse);
        window.fetch = mockFetch;

        const pictureUrl = 'blob:thisAwesomeImage';
        const mockCreateObjectURL = jest.fn().mockImplementation(() => pictureUrl);
        window.URL.createObjectURL = mockCreateObjectURL;

        const accessToken = 'accessToken';
        mockedEchoAuthProvider.userProperties.account = ({
            account: { username: 'test@test.no' }
        } as unknown) as AccountInfo;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(mockFetch).toBeCalled();
        expect(graphProfileUrl).toStrictEqual(pictureUrl);
    });

    it('should try to fetch graph profile picture, but response is not successful so picture url is undefined', async () => {
        const mockSuccessResponse = { ok: false } as Response;
        const mockFetch = jest.fn().mockImplementation(() => mockSuccessResponse);
        window.fetch = mockFetch;

        const accessToken = 'accessToken';
        mockedEchoAuthProvider.userProperties.account = ({
            account: { username: 'test@test.no' }
        } as unknown) as AccountInfo;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(mockFetch).toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should try to fetch graph profile picture, but response does not contain picture url, so return value is undefined', async () => {
        const mockSuccessResponse = { ok: false, blob: () => Promise.reject() } as Response;
        const mockFetch = jest.fn().mockImplementation(() => mockSuccessResponse);
        window.fetch = mockFetch;

        const accessToken = 'accessToken';
        mockedEchoAuthProvider.userProperties.account = ({
            account: { username: 'test@test.no' }
        } as unknown) as AccountInfo;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue({
            accessToken
        } as AuthenticationResult);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(mockFetch).toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should return undefined because token fetch failed', async () => {
        const mockFetch = jest.fn();
        window.fetch = mockFetch;

        mockedEchoAuthProvider.userProperties.account = ({
            account: { username: 'test@test.no' }
        } as unknown) as AccountInfo;

        mockedEchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate.mockResolvedValue(null);

        const graphProfileUrl = await graphGetProfilePicture();
        expect(mockFetch).not.toBeCalled();
        expect(graphProfileUrl).toBe(undefined);
    });

    it('should return undefined because no account is present on auth provider', async () => {
        const mockFetch = jest.fn();
        window.fetch = mockFetch;
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
