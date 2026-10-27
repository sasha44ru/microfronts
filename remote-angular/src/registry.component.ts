import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-registry',
    standalone: true,
    template: `
    <section>
      <h2>Реестр (remote-angular)</h2>
      <p>Записей: {{ count() }}</p>
      <p>Удвоено: {{ doubled() }}</p>
      <button (click)="inc()">Добавить</button>
    </section>
  `,
})
export class RegistryComponent {
    readonly count = signal(0);
    readonly doubled = computed(() => this.count() * 2);

    inc() {
        this.count.update((c) => c + 1);
    }
}