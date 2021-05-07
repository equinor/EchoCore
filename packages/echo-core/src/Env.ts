import { env, isDevelopment, isProduction, setEnv } from './configuration/environment';

export const Env = {
    isDevelopment: isDevelopment,
    isProduction: isProduction,
    env: env,
    setEnv: setEnv
};
