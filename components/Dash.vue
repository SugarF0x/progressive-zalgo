<template>
  <div class="dash">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.dash {
  @apply
    w-screen

    py-10
    px-20

    bg-black
    bg-opacity-10
    backdrop-blur

    text-white
    text-center
    font-bold
}
</style>
