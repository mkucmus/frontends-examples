<script setup lang="ts">
import { useSessionContext } from "@shopware-pwa/composables-next";
import { onMounted } from "vue";

const { refreshSessionContext } = useSessionContext();

onMounted(() => {
  refreshSessionContext();
});
</script>

<template>
  <img
    style="max-width: 100%"
    src="./assets/shopware-frontends-logo.png"
    alt="Shopware Frontends"
  />
  <hr />
  <div class="mx-auto container">
    <router-view></router-view>
  </div>
</template>
