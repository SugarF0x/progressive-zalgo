<script setup lang="ts">
import { Settings } from '~/definitions'
import { ZALGO_UP, ZALGO_MIDDLE, ZALGO_DOWN } from '~/consts'

const props = defineProps<{
  value: string
  settings: Settings
}>()

const charPool = computed(() => {
  let chars = []
  if (props.settings.shouldGenerateUpwards) chars = [...chars, ...ZALGO_UP]
  if (props.settings.shouldGenerateMiddle) chars = [...chars, ...ZALGO_MIDDLE]
  if (props.settings.shouldGenerateDownwards) chars = [...chars, ...ZALGO_DOWN]
  return chars
})

const transformed = computed(() => {
  return props.value.split('').reduce((acc, val, i) => {
    const zalgoChars = Array.from({
      length: props.value.length > 24
          ? Math.floor(i/(props.value.length - 2) * 6)
          : Math.floor((Math.min(i, 24)/24) * 6)
    }, () => charPool.value[Math.floor(Math.random() * charPool.value.length)])
    return acc + val + zalgoChars.join('')
  }, '')
})
</script>

<template>
  <div class="output">
    {{ transformed }}
  </div>
  <CopyButton :value="transformed" :disabled="!transformed.length" />
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
