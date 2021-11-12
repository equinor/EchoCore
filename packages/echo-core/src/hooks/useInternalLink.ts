import { useHistory } from 'react-router-dom';
import { createOfflineMessage } from '../message/message';
import { AppLinkOptions } from '../types/registry';
import { useEchoEventHub } from './useEchoEventHub';

export type Link = (linkTo: string, options?: AppLinkOptions) => void;

/**
 *
 * A hook providing a function for linking to internal applications.
 * @export
 * @return {Link} a Link function for linking to internal applications,
 */
export function useInternalLink(): Link {
    const history = useHistory();
    const { eventHub } = useEchoEventHub();

    /**
     *
     * @param {string} linkTo The path to the applications
     * @param {string} [params=''] The query parameters present in a link
     * @param {AppLinkOptions} [options={ appMenu: true }] default link on app menu set to true;
     */
    function Link(linkTo: string, options: Partial<AppLinkOptions> = { mainMenu: true, params: '' }): void {
        const { requiresOnline, onClick, eventTracker, params } = options;
        if (requiresOnline && !navigator.onLine) {
            eventHub.emit('warning', createOfflineMessage());
            return;
        }

        onClick && onClick();
        eventTracker && eventTracker('InternalLink', 'Opened', { linkTo: linkTo });
        const linkParams = params ? params : '';
        history.push(linkTo + linkParams);
    }

    return Link;
}
