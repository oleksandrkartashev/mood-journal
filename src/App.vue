<template>
  <Loader v-if="isLoading" />
  <div class="page">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Loader from "./components/Loader.vue";

const isLoading = ref(true);

setTimeout(() => {
  // emulate page loaging with small delay
  isLoading.value = false;
}, 2000);
</script>

<style lang="scss">
.page {
  @apply h-[100%] overflow-x-hidden;
}
</style>
