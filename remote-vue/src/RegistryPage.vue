<template>
  <section>
    <h2>Реестр (remote-vue)</h2>
    <p>Записей: {{ count }}</p>
    <button @click="count++">Добавить</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>