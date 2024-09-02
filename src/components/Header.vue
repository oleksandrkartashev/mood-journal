<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <Logo />
        <UserAvatar />
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import Logo from "@/components/Logo.vue";
import UserAvatar from "@/components/UserAvatar.vue";
</script>
<style scoped>
.header-wrap {
  @apply max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4;
}
</style>
