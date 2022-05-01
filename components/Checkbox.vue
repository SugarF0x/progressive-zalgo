<script setup lang="ts">
defineProps<{
  modelValue?: boolean
}>()
defineEmits<{
  (e: "update:modelValue"): boolean
}>()
</script>

<template>
  <label class="inputLabel" :class="{ disabledLabel: $attrs.disabled }">
    <input
        type="checkbox"
        class="labelCheckbox"
        :checked="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="labelText">
      <slot />
    </span>
  </label>
</template>

<style lang="scss" scoped>
.inputLabel {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}
.labelText {
  margin-left: 0.35rem;
}
.labelCheckbox {
  cursor: pointer;
}
.disabledLabel {
  cursor: unset;
  pointer-events: none;
}
.fade,
.disabledLabel {
  opacity: 0.4;
}
</style>
