<script setup lang="ts">
import { Settings } from '~/definitions'

defineProps<{
  modelValue: Settings
}>()
defineEmits<{
  (e: "update:modelValue"): Settings
}>()
</script>

<template>
  <Dash class="settings">
    <Checkbox v-model="modelValue.shouldGenerateDownwards"> Corrupt upwards </Checkbox>
    <Checkbox v-model="modelValue.shouldGenerateUpwards"> Corrupt middle </Checkbox>
    <Checkbox v-model="modelValue.shouldGenerateMiddle"> Corrupt downwards </Checkbox>
  </Dash>
</template>

<style scoped lang="scss">
.settings {
  @apply
    flex
    gap-4
    justify-center
}
</style>
