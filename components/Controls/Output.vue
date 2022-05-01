<script setup lang="ts">
import { Settings } from '~/definitions'

const props = defineProps<{
  value: string
  settings: Settings
}>()

const transformed = computed(() => props.value)
</script>

<template>
  <div class="output">
    {{ transformed }}
  </div>
</template>

<style scoped lang="scss">
.output {
  min-height: 5rem;

  @apply
    box-content
    mt-16
    py-4
    px-8

    text-white
    text-center
}
</style>
