<script setup lang="ts">
defineProps<{
  modelValue: string
}>()
defineEmits<{
  (e: "update:modelValue"): string
}>()
</script>

<template>
  <label class="textarea-label">
    <span class="textarea-title"> Input </span>
    <textarea class="textarea-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </label>
</template>

<style scoped lang="scss">
.textarea-label {
  @apply
    w-11/12
    md:w-10/12
    lg:w-8/12
}

.textarea-title {
  @apply
    inline-block
    mb-2
    text-white
}

.textarea-control {
  @apply
    resize-none

    block
    w-full

    px-3
    py-1.5
    m-0

    text-base
    font-normal
    text-white

    backdrop-blur
    bg-black
    bg-opacity-10
    bg-clip-padding

    border
    border-solid
    border-gray-300
    border-opacity-30
    rounded

    transition
    ease-in-out

    focus:bg-opacity-20
    focus:border-blue-600
    focus:outline-none
}
</style>
