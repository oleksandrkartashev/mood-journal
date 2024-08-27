<template>
  <div class="loader">
    <div class="loader-circle"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.loader {
  @apply fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50;
}
.loader-circle {
  @apply border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin;
}
</style>
