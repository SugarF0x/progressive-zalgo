<script setup lang="ts">
import { Settings } from '~/definitions'

const settings = reactive<Settings>({
  shouldGenerateDownwards: true,
  shouldGenerateUpwards: true,
  shouldGenerateMiddle: true
})

const input = ref('')
</script>

<template>
  <ControlsSettings v-model="settings" />
  <ControlsInput v-model="input" />
  <ControlsOutput :value="input" :settings="settings" />
</template>
