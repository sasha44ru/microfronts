import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, signal } from '@angular/core';

@Component({
    selector: 'app-registry',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
        <ui-card heading="Реестр (remote-angular)">
            <p>Записей: {{ count() }}</p>
            <p>Удвоено: {{ doubled() }}</p>
            <ui-button (click)="inc()">Добавить</ui-button>
        </ui-card>
    `,
})
export class RegistryComponent {
    readonly count = signal(0);
    readonly doubled = computed(() => this.count() * 2);

    inc() {
        this.count.update((c) => c + 1);
    }
}