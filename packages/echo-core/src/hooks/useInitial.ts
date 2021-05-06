import { useLayoutEffect, useState } from 'react';

/**
 * Hook for running the callback once on mount.
 * @param callback The callback to be invoked on mounting.
 */
export function useInitial(callback: (() => void) | (() => Promise<void>)): void {
    const [mounted, setMounted] = useState(false);

    useLayoutEffect(() => {
        if (!mounted) {
            callback();
            setMounted(true);
        }
    }, [callback, mounted]);
}
