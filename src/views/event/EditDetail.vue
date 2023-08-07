<script setup lang="ts">
import type { Ref } from 'vue'
import type { Passenger } from '@/type'
import type { PropType } from 'vue'

defineProps({
  passenger: {
    type: Object as PropType<Passenger>,
    require: true
  }
})
</script>
<template>
  <p>Edit the event here</p>
</template>