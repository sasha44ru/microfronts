import { useEffect, useRef, useState } from 'react';

type UnmountFn = () => void;
type MountResult = UnmountFn | Promise<UnmountFn>;
type RemoteModule = { default: (el: HTMLElement) => MountResult };

type Props = {
    label: string;
    load: () => Promise<RemoteModule>;
};

export default function RemoteMount({ label, load }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

    useEffect(() => {
        let disposed = false;
        let unmount: UnmountFn | undefined;

        load()
            .then(async (mod) => {
                if (disposed || !containerRef.current) return;
                const unmountFn = await mod.default(containerRef.current);
                if (disposed) {
                    unmountFn();
                    return;
                }
                unmount = unmountFn;
                setStatus('ready');
            })
            .catch(() => {
                if (!disposed) setStatus('error');
            });

        return () => {
            disposed = true;
            unmount?.();
        };
    }, [load]);

    return (
        <div>
            {status === 'loading' && <p>Загрузка {label}…</p>}
            {status === 'error' && (
                <p style={{ color: 'crimson' }}>Не удалось загрузить {label} (запущен ли он?)</p>
            )}
            <div ref={containerRef} />
        </div>
    );
}