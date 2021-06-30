import { env, isDevelopment, isProduction, setEnv } from './configuration/environment';

export const EchoEnv = {
    isDevelopment: isDevelopment,
    isProduction: isProduction,
    env: env,
    setEnv: setEnv
};
