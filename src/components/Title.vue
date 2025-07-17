<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue' // Importación necesaria en Astro

export default defineComponent({
  name: "Title",
  props: {
    text: {
      type: String as PropType<string>,
      required: true
    },
    align: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'center',
      validator: (value: string) => ['left', 'center', 'right'].includes(value)
    },
    color: {
      type: String,
      default: 'var(--color-primary)'
    }
  }
})
</script>

<template>
  <h1 class="title" :style="{ textAlign: align, color: color }">
    {{ text }}
  </h1>
</template>

<style scoped>
.title {
  font-size: 1.375rem;
  font-weight: 600;
  margin: 0.5rem 0;
  line-height: 1.3;
}
</style>
