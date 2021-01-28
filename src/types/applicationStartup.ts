/**
 * Provides functions for the onboarding proses of the first time startup.
 *
 * @export Function from Echo Core
 * @interface ApplicationStartup
 */
export interface ApplicationStartup {
    /**
     * Set the flag has accepted Terms and agreement
     *
     * @export Function from Echo Core
     * @param {boolean} hasAcceptedTerms
     */
    setHasAcceptedTerms: (hasAcceptedTerms: boolean) => void;

    /**
     * Set the flag has done the onboarding proses
     *
     * @export Function from Echo Core
     * @param {boolean} hasDoneOnboarding
     */
    setHasDoneOnboarding: (hasDoneOnboarding: boolean) => void;
    /**
     * get hasDoneOnboarding and hasAcceptedTerms
     *
     * @memberof ApplicationStartup
     */
    get: () => GetStartup;
}
export interface GetStartup {
    hasDoneOnboarding: boolean;
    hasAcceptedTerms: boolean;
}
