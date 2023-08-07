<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Passenger } from '@/type'
import type { PropType } from 'vue'

defineProps({
  airline: {
    type: Object as PropType<Passenger>,
    require: true
  }
})
</script>
<template>
  <div>
    <h1>{{ airline?.id }}</h1>
    <p>{{ airline?.AirlineName }} on {{ airline?.address }} Email: {{ airline?.email }}</p>
   
  </div>
</template>