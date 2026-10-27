import { Component } from '@angular/core';
import { RegistryComponent } from './registry.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RegistryComponent],
    template: `
    <h1>remote-angular (standalone)</h1>
    <app-registry />
  `,
})
export class AppComponent {}