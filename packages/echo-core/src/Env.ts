import { env, isDevelopment, isProduction, setEnv } from './configuration/environment';

export default class Env {
    isDevelopment = isDevelopment;
    isProduction = isProduction;
    env = env;
    setEnv = setEnv;
}
