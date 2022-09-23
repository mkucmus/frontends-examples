<script setup>
import { defineAsyncComponent, computed, resolveComponent } from "vue";
import { useRoute } from "vue-router";
import MissingExample from "../MissingExample.vue";
const route = useRoute();
const title = computed(() => `${route.path.slice(1)} example`);
const componentName = computed(() =>
  defineAsyncComponent({
    loader: () => import(`../examples/${route.path.slice(1)}.vue`),
    errorComponent: MissingExample,
  })
);
</script>
<template>
  <div class="mx-auto container mt-2">
    <h5
      class="text-center mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mb-2"
    >
      {{ title }}
    </h5>
    <div
      class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p class="font-normal text-gray-700 dark:text-gray-400 pt-">
        <component :is="componentName" />
      </p>
    </div>
  </div>
</template>
