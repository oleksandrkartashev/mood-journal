<template>
  <div class="view view-home">
    <div class="container">
      <div class="welcome">
        <Logo class="welcome-logo" />
        <h1 class="welcome-title">Welcome to Mood Journal</h1>
        <p class="welcome-description">
          A mood journal that will help you capture your moods and help you
          improve your moods over time
        </p>
      </div>
      <div class="auth-buttons">
        <router-link :to="{ name: 'login' }" class="button auth-btn"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from "@/components/Logo.vue";
</script>

<style scoped>
.view-home {
  @apply h-[100vh] flex flex-col justify-center;
}
.welcome {
  @apply flex flex-col justify-center flex-1 lg:flex-none;
}
.welcome-logo {
  @apply mb-[15px] md:mb-[20px];
}
.welcome-title {
  @apply mb-[15px] md:mb-[20px] text-2xl md:text-3xl lg:text-5xl;
}
.welcome-description {
  @apply mb-[15px] md:mb-[20px];
}
.auth-buttons {
  @apply min-h-[40px] mb-[20px] lg:mb-0;
}
.auth-btn {
  @apply text-white inline-block w-[100%] text-center lg:w-auto bg-[darkblue] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
}
</style>
