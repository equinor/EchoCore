/**
 *
 *
 * @export Function from Echo Core
 * @interface ApplicationStartup
 */
export interface ApplicationStartup {
    /**
     *
     *
     * @export Function from Echo Core
     * @param {boolean} hasAcceptedTerms
     */
    setHasAcceptedTerms: (hasAcceptedTerms: boolean) => void;

    /**
     *
     *
     * @export Function from Echo Core
     * @param {boolean} hasDoneOnboarding
     */
    setHasDoneOnboarding: (hasDoneOnboarding: boolean) => void;
}
