<template>
    <RouterLink class="event-link" :to="{name: 'passenger-detail', params:{id: passenger?.id}}">
      <div class="event-class">
      <div class="event-card">
        <span>{{ passenger?.first_name }}  {{ passenger?.last_name }}</span>
        <h4>{{ passenger?.Destination }}</h4> <h4>{{ passenger?.travelDate }}</h4>
      </div>
    </div>
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import type {Passenger} from '@/type'
  import type {PropType} from 'vue'
  const props = defineProps ({
      passenger: {
          type: Object as PropType<Passenger>,
              required: true
      }
  })
  </script>
  
  <style scoped>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .event-link {
    color: #2c3e50;
    text-decoration: none;
  }
  </style>
  