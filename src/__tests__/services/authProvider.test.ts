import { AccountInfo, InteractionRequiredAuthError, SilentRequest } from '@azure/msal-browser';
import { AuthenticationProvider } from '../../echo-base/services/authentication/authProvider';
import { echoConfig } from '../../echo-base/services/authentication/echoProvider';
import { echoRequest } from '../../echo-base/services/echoClient/echoClientConfig';

jest.mock('../../configuration/environment');
jest.mock('../../configuration/environment', () => {
    return {
        env: jest.fn().mockImplementation(() => {
            return {
                REACT_APP_AZURE_AD_CLIENT_ID: 'REACT_APP_AZURE_AD_CLIENT_ID'
            };
        })
    };
});

jest.mock('@azure/msal-browser');
const AuthProvider = new AuthenticationProvider(echoConfig);

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
});

const globalConsoleMethod = global.console;
beforeAll(() => {
    // removes console log in test run
    global.console = ({ log: jest.fn(), error: jest.fn() } as unknown) as Console;
});

afterAll(() => {
    global.console = globalConsoleMethod;
});

describe('handleLogin', () => {
    it('should successfully be authenticated', async () => {
        const account = {
            username: 'test@test.no'
        };
        (AuthProvider.publicClient.handleRedirectPromise as jest.Mock).mockReturnValue(
            Promise.resolve({
                account
            })
        );

        await AuthProvider.handleLogin();
        expect(AuthProvider.publicClient.handleRedirectPromise).toBeCalled();
        expect(AuthProvider.publicClient.getAllAccounts).not.toBeCalled();

        expect(AuthProvider.isAuthenticated).toBe(true);
        expect(AuthProvider.userProperties.account).toBe(account);
    });

    it('should successfully be authenticated and logged', async () => {
        const account = {
            username: 'test@test.no'
        };
        (AuthProvider.publicClient.handleRedirectPromise as jest.Mock).mockReturnValue(
            Promise.resolve({
                account
            })
        );
        const logFunc = jest.fn();

        await AuthProvider.handleLogin(logFunc);
        expect(logFunc).toHaveBeenCalledWith('Got response');
        expect(AuthProvider.isAuthenticated).toBe(true);
        expect(AuthProvider.userProperties.account).toBe(account);
    });

    it('should be prompted to enter username and password', async () => {
        (AuthProvider.publicClient.handleRedirectPromise as jest.Mock).mockReturnValue(Promise.resolve(null));
        (AuthProvider.publicClient.getAllAccounts as jest.Mock).mockReturnValue([]);
        const loginSpy = jest.spyOn(AuthProvider, 'login');

        await AuthProvider.handleLogin();
        expect(AuthProvider.publicClient.handleRedirectPromise).toBeCalled();
        expect(AuthProvider.publicClient.getAllAccounts).toBeCalled();
        expect(loginSpy).toBeCalled();

        expect(AuthProvider.isAuthenticated).toBe(false);
    });

    it('should be prompted to enter username and password, and request is logged', async () => {
        (AuthProvider.publicClient.handleRedirectPromise as jest.Mock).mockReturnValue(Promise.resolve(null));
        (AuthProvider.publicClient.getAllAccounts as jest.Mock).mockReturnValue([]);
        const loginSpy = jest.spyOn(AuthProvider, 'login');
        const logFunc = jest.fn();

        await AuthProvider.handleLogin(logFunc);
        expect(loginSpy).toBeCalled();
        expect(logFunc).toBeCalledWith('No response and no users');
    });

    it('should attempt sso-silent or acquire token with redirect', async () => {
        const account = {
            username: 'test@test.no'
        };
        (AuthProvider.publicClient.handleRedirectPromise as jest.Mock).mockReturnValue(Promise.resolve(null));
        (AuthProvider.publicClient.getAllAccounts as jest.Mock).mockReturnValue([
            {
                account
            }
        ]);
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(Promise.resolve({ account }));
        const ssoSilentOrRedirectToAuthenticateSpy = jest.spyOn(AuthProvider, 'ssoSilentOrRedirectToAuthenticate');

        await AuthProvider.handleLogin();
        expect(AuthProvider.publicClient.handleRedirectPromise).toBeCalled();
        expect(AuthProvider.publicClient.getAllAccounts).toBeCalled();
        expect(ssoSilentOrRedirectToAuthenticateSpy).toBeCalled();
        expect(AuthProvider.isAuthenticated).toBe(true);
        expect(AuthProvider.userProperties.account).toBe(account);
    });

    it('should attempt sso-silent or acquire token with redirect, and request is logged', async () => {
        const account = {
            username: 'test@test.no'
        };
        (AuthProvider.publicClient.handleRedirectPromise as jest.Mock).mockReturnValue(Promise.resolve(null));
        (AuthProvider.publicClient.getAllAccounts as jest.Mock).mockReturnValue([
            {
                account
            }
        ]);
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(Promise.resolve({ account }));
        const ssoSilentOrRedirectToAuthenticateSpy = jest.spyOn(AuthProvider, 'ssoSilentOrRedirectToAuthenticate');
        const logFunc = jest.fn();
        await AuthProvider.handleLogin(logFunc);
        expect(ssoSilentOrRedirectToAuthenticateSpy).toBeCalled();
        expect(logFunc).toBeCalledWith(
            'No response but I have users, attempting sso-silent or acquire token with redirect'
        );
    });
});

describe('ssoSilentOrRedirectToAuthenticate', () => {
    it('should be successful', async () => {
        const account = {
            username: 'test@test.no'
        };
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(Promise.resolve({ account }));
        (AuthProvider.publicClient.getAllAccounts as jest.Mock).mockReturnValue([
            {
                account
            }
        ]);

        await AuthProvider.ssoSilentOrRedirectToAuthenticate();
        expect(AuthProvider.publicClient.acquireTokenSilent).toBeCalled();
        expect(AuthProvider.publicClient.getAllAccounts).toBeCalled();
        expect(AuthProvider.isAuthenticated).toBe(true);
        expect(AuthProvider.userProperties.account).toBe(account);
    });

    it('should catch InteractionRequiredAuthError, redirect to prompt user for username and password', async () => {
        const account = {
            username: 'test@test.no'
        };
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(
            Promise.reject(new InteractionRequiredAuthError('InteractionRequiredAuthError'))
        );
        (AuthProvider.publicClient.acquireTokenRedirect as jest.Mock).mockReturnValue(Promise.resolve());
        (AuthProvider.publicClient.getAllAccounts as jest.Mock).mockReturnValue([
            {
                account
            }
        ]);

        await AuthProvider.ssoSilentOrRedirectToAuthenticate();
        expect(AuthProvider.publicClient.acquireTokenSilent).toBeCalled();
        expect(AuthProvider.publicClient.getAllAccounts).toBeCalled();
        expect(AuthProvider.publicClient.acquireTokenRedirect).toBeCalled();
    });

    it('should catch unknown error', async () => {
        const account = {
            username: 'test@test.no'
        };
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(
            Promise.reject(new Error('Unknown error occurred'))
        );
        (AuthProvider.publicClient.acquireTokenRedirect as jest.Mock).mockReturnValue(Promise.resolve());
        (AuthProvider.publicClient.getAllAccounts as jest.Mock).mockReturnValue([
            {
                account
            }
        ]);

        await AuthProvider.ssoSilentOrRedirectToAuthenticate();
        expect(AuthProvider.publicClient.acquireTokenSilent).toBeCalled();
        expect(AuthProvider.publicClient.getAllAccounts).toBeCalled();
        expect(AuthProvider.publicClient.acquireTokenRedirect).not.toBeCalled();
        expect(console.error).toBeCalled();
    });
});

describe('aquireTokenSilentOrRedirectToAuthenticate', () => {
    it('should be successful', async () => {
        const account = {
            username: 'test@test.no'
        } as AccountInfo;
        const request = echoRequest(account);
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(Promise.resolve({ account }));

        const authenticationResult = await AuthProvider.aquireTokenSilentOrRedirectToAuthenticate(
            request,
            AuthProvider.loginRequest
        );
        expect(AuthProvider.publicClient.acquireTokenSilent).toBeCalled();
        expect(authenticationResult).toMatchObject({ account });
    });

    it('should catch InteractionRequiredAuthError, redirect to prompt user for username and password', async () => {
        const account = {
            username: 'test@test.no'
        } as AccountInfo;
        const request = echoRequest(account);
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(
            Promise.reject(new InteractionRequiredAuthError('InteractionRequiredAuthError'))
        );
        (AuthProvider.publicClient.acquireTokenRedirect as jest.Mock).mockReturnValue(Promise.resolve());

        const authenticationResult = await AuthProvider.aquireTokenSilentOrRedirectToAuthenticate(
            request,
            AuthProvider.loginRequest
        );

        expect(AuthProvider.publicClient.acquireTokenSilent).toBeCalled();
        expect(AuthProvider.publicClient.acquireTokenRedirect).toBeCalled();
        expect(authenticationResult).toBe(null);
    });

    it('should catch unknown error', async () => {
        const account = {
            username: 'test@test.no'
        } as AccountInfo;
        const request = echoRequest(account);
        (AuthProvider.publicClient.acquireTokenSilent as jest.Mock).mockReturnValue(
            Promise.reject(new Error('Unknown error occurred'))
        );
        (AuthProvider.publicClient.acquireTokenRedirect as jest.Mock).mockReturnValue(Promise.resolve());

        const authenticationResult = await AuthProvider.aquireTokenSilentOrRedirectToAuthenticate(
            request,
            AuthProvider.loginRequest
        );

        expect(AuthProvider.publicClient.acquireTokenSilent).toBeCalled();
        expect(AuthProvider.publicClient.acquireTokenRedirect).not.toBeCalled();
        expect(AuthProvider.userProperties.loginError).toMatchObject(new Error('Unknown error occurred'));
        expect(console.error).toBeCalled();
        expect(authenticationResult).toBe(null);
    });
});

describe('logout', () => {
    it('should call public client logout', () => {
        const logoutSpy = jest.spyOn(AuthProvider.publicClient, 'logout');

        AuthProvider.logout();
        expect(logoutSpy).toBeCalled();
    });

    it('should not call public client logout because account is empty', () => {
        const logoutSpy = jest.spyOn(AuthProvider.publicClient, 'logout');
        AuthProvider.userProperties.account = null;
        AuthProvider.logout();
        expect(logoutSpy).not.toBeCalled();
    });
});

describe('login', () => {
    it('should call public client loginRedirect', async () => {
        const somethingSpy = jest.spyOn(AuthProvider.publicClient, 'loginRedirect');
        await AuthProvider.login();
        expect(somethingSpy).toBeCalled();
        expect(AuthProvider.publicClient.loginRedirect).toBeCalled();
    });
});

describe('getAccessToken', () => {
    it('should successfully fetch access token', async () => {
        const aquireTokenSilentOrRedirectToAuthenticate = AuthProvider.aquireTokenSilentOrRedirectToAuthenticate;
        const accessToken = 'token';
        AuthProvider.aquireTokenSilentOrRedirectToAuthenticate = jest.fn();
        (AuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock).mockReturnValue(
            Promise.resolve({ accessToken })
        );
        const silentRequest = {} as SilentRequest;

        const tokenReturned = await AuthProvider.getAccessToken(silentRequest);
        expect(AuthProvider.aquireTokenSilentOrRedirectToAuthenticate).toBeCalled();
        expect(tokenReturned).toBe(accessToken);

        // Test cleanup
        AuthProvider.aquireTokenSilentOrRedirectToAuthenticate = aquireTokenSilentOrRedirectToAuthenticate;
    });

    it('should successfully fetch access token', async () => {
        const aquireTokenSilentOrRedirectToAuthenticate = AuthProvider.aquireTokenSilentOrRedirectToAuthenticate;
        AuthProvider.aquireTokenSilentOrRedirectToAuthenticate = jest.fn();
        (AuthProvider.aquireTokenSilentOrRedirectToAuthenticate as jest.Mock).mockReturnValue(Promise.resolve(null));

        const silentRequest = {} as SilentRequest;
        const tokenReturned = await AuthProvider.getAccessToken(silentRequest);
        expect(AuthProvider.aquireTokenSilentOrRedirectToAuthenticate).toBeCalled();
        expect(tokenReturned).toBe(undefined);

        // Test cleanup
        AuthProvider.aquireTokenSilentOrRedirectToAuthenticate = aquireTokenSilentOrRedirectToAuthenticate;
    });
});
