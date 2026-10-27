import { createApp } from 'vue';
import RegistryPage from './RegistryPage.vue';

export default function mount(el: HTMLElement): () => void {
    const app = createApp(RegistryPage);
    app.mount(el);
    return () => app.unmount();
}