import '@angular/compiler';
import 'zone.js';
import { createComponent } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { RegistryComponent } from './registry.component';

export default async function mount(el: HTMLElement): Promise<() => void> {
    const appRef = await createApplication();
    const componentRef = createComponent(RegistryComponent, {
        hostElement: el,
        environmentInjector: appRef.injector,
    });
    appRef.attachView(componentRef.hostView);
    appRef.tick();

    return () => {
        componentRef.destroy();
        appRef.destroy();
    };
}