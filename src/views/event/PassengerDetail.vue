<script setup lang="ts">
import { ref } from 'vue'
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
  <div v-if="passenger">
    
    <p>{{ passenger.travelDate }} to {{ passenger.Destination }}  {{ passenger.airlineId }}</p>
  </div>
</template>
