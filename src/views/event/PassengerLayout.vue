<script setup lang="ts">
import PassengerService from '@/services/PassengerService'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Passenger } from '@/type'
import { useRouter } from 'vue-router'
const passenger = ref<Passenger | null>(null)
const airline = ref<Passenger | null>(null)
const props = defineProps({
  id: String
})
const router = useRouter()
PassengerService.getEventById(Number(props.id))
  .then((response) => {
    passenger.value = response.data
  PassengerService.getAirlineById(Number(response.data.airlineId)).then((response)=> {
    airline.value = response.data
  }).catch((error) => {
    console.log(error)
  })   
  })
  .catch((error) => {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: 'passenger'} })
    } else {
      router.push({ name: 'network-error'})
    }
  })
</script>
<template>
  <div v-if="passenger">
    <h1>{{ passenger.first_name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'passenger-detail', params: { id } }">Passenger Details</router-link>
      |
      <router-link :to="{ name: 'airline-detail', params: { id } }">Airline Details</router-link>
      |
      <router-link :to="{ name: 'event-edit', params: { id } }">Edit</router-link>
    </div>

    <RouterView :passenger="passenger" :airline ="airline"></RouterView>
  </div>
</template>
