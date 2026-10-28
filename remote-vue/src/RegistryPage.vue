<template>
  <ui-card heading="Реестр (remote-vue)">
    <p>Записей: {{ count }}</p>
    <ui-button @click="count++">Добавить</ui-button>
  </ui-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>