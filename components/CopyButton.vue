<script setup lang="ts">
const props = defineProps<{
  value: string
}>()

function copy() {
  navigator.clipboard.writeText(props.value)
}
</script>

<template>
  <button class="copyButton" @click="copy">
    <svg class="copySvg" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
    </svg>
    <span> Copy </span>
  </button>
</template>

<style scoped lang="scss">
.copyButton {
  @apply
    inline-flex
    items-center

    py-2
    px-4

    border-white
    border-2
    rounded

    bg-gray-300
    bg-opacity-0

    transition

    hover:bg-opacity-20

    active:bg-opacity-10

    disabled:opacity-50
    disabled:hover:bg-opacity-0

    text-white
    font-bold
}

.copySvg {
  @apply
    w-4
    h-4
    mr-2

    fill-current
}
</style>
