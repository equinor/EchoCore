import { useHistory } from 'react-router-dom';
import { createOfflineMessage } from '../message/message';
import { AppLinkOptions } from '../types/registry';
import { SendMessageToReactNative } from '../utils/sendMessageToReactNative';
import { useEchoEventHub } from './useEchoEventHub';

type LinkFunction = (linkTo: string, options: Partial<AppLinkOptions>) => void;
/**
 *
 * A hook providing a function for linking to internal applications.
 * @export
 * @return {Link} a Link function for linking to internal applications,
 */

export function useInternalLink(): LinkFunction {
    const history = useHistory();
    const { eventHub } = useEchoEventHub();

    /**
     *
     * @param {string} linkTo The path to the applications
     * @param {string} [params=''] The query parameters present in a link
     * @param {AppLinkOptions} [options={ appMenu: true }] default link on app menu set to true;
     */
    function Link(linkTo: string, options: Partial<AppLinkOptions> = { appMenu: true, params: '' }): void {
        const { online, nativeMessage, eventTracker, params } = options;

        if (online && !navigator.onLine) {
            eventHub.emit('warning', createOfflineMessage());
            return;
        }

        if (nativeMessage) {
            SendMessageToReactNative(nativeMessage);
        }

        eventTracker && eventTracker('InternalLink', 'Opened', { linkTo: linkTo });
        history.push(linkTo + params);
    }

    return Link;
}
