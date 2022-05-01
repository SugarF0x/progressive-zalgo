<template>
  <div class="background">
    <h1 class="header">HE PROGRESSIVELY COMES</h1>
    <Controls />
  </div>
</template>

<style lang="scss" scoped>
.background {
  background: rgb(251, 191, 36) linear-gradient(transparent, red);

  @apply
    h-screen
    w-screen

    flex
    flex-col
    justify-center
    items-center
    gap-4
}

.header {
  @apply
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl

    text-white
    font-bold
    italic
    text-center
}
</style>
