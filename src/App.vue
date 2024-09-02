<template>
  <Loader v-if="isLoading" />
  <Header v-if="$route.meta.showHeader" />

  <div class="page">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Loader from "@/components/Loader.vue";
import Header from "@/components/Header.vue";

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
