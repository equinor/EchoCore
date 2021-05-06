import { useLayoutEffect } from 'react';

/**
 * Hook for running the callback once on umount.
 * @param callback The callback to be invoked on unrounding.
 */
export function useCleanup(callback: () => void): void {
    useLayoutEffect(() => {
        return (): void => {
            callback();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
