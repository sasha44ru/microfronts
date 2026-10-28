declare module 'remoteReact/UsersPage' {
    import type { ComponentType } from 'react';
    const UsersPage: ComponentType;
    export default UsersPage;
}

declare module 'remoteVue/RegistryMount' {
    export type MountResult = (() => void) | Promise<() => void>;
    const mount: (el: HTMLElement) => MountResult;
    export default mount;
}

declare module 'remoteAngular/AngularMount' {
    const mount: (el: HTMLElement) => Promise<() => void>;
    export default mount;
}

declare module '@mf-demo/ui-kit';