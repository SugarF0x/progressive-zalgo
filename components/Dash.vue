<template>
  <div class="dash">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.dash {
  background-color: rgba(0,0,0,.1);
  color: white;

  @apply w-screen py-10 px-20 text-center font-bold
}
</style>
