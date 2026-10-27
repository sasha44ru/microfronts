import '@angular/compiler';
import 'zone.js';
import { createComponent } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

createApplication().then((appRef) => {
    const componentRef = createComponent(AppComponent, {
        hostElement: document.getElementById('app')!,
        environmentInjector: appRef.injector,
    });
    appRef.attachView(componentRef.hostView);
    appRef.tick();
});