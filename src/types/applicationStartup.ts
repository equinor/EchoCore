/**
 *
 *
 * @export
 * @interface ApplicationStartup
 */
export interface ApplicationStartup {
    /**
     *
     *
     * @export
     * @param {boolean} hasAcceptedTerms
     */
    setHasAcceptedTerms: (hasAcceptedTerms: boolean) => void;
    /**
     *
     *
     * @export
     * @param {boolean} hasDoneOnboarding
     */
    setHasDoneOnboarding: (hasDoneOnboarding: boolean) => void;
}
