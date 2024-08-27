<template>
  <div class="logo">
    <span class="logo-figure"></span>
    <span class="logo-text"><span class="logo-letter">M</span>ood Journal</span>
  </div>
</template>

<style>
.logo {
  @apply relative pointer-events-none flex items-center whitespace-nowrap overflow-hidden z-[1] max-w-[150px] h-[40px] pl-[26px] font-sans;
}
.logo-figure {
  @apply absolute left-0 w-[40px] h-[40px] rounded-full bg-[darkblue] z-[-1];
}
.logo-text {
  @apply text-black w-full;
}
.logo-letter {
  @apply text-white;
}
</style>
