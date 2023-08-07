<script setup lang="ts">
import PassengerCard from '../components/PassengerCard.vue'
import type { Passenger } from '@/type'
import { computed, ref, type Ref } from 'vue'
import PassengerService from '@/services/PassengerService'
import type { AxiosResponse } from 'axios'
import { watchEffect } from 'vue'
import router from '@/router'
const passengers: Ref<Array<Passenger>> = ref([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const perPage = ref<number>(2)


watchEffect(() => {
  PassengerService.getEvent(perPage.value, props.page).then((response: AxiosResponse<Passenger[]>) => {
    passengers.value = response.data
    totalEvent.value = response.headers['x-total-count']
   }) .catch((error) => {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: 'passenger'} })
    } else {
      router.push({ name: 'network-error'})
    }
  })
})
const hasNextPage = computed(() => {
  //first calculate the total page
  const totalPages = Math.ceil(totalEvent.value / perPage.value)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <h1 Events For Good></h1>
  <main class="events">
    <div>
      <label for="perPage">Event/Pages</label>
      <select id="perPage" v-model="perPage">
        <option>2</option>
        <option>4</option>
        <option>6</option>
      </select>
    </div>
    <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger"></PassengerCard>
    <div class="pagination">
      <RouterLink :to="{ name: 'home', query: { page: page - 1 } }" rel="prev" v-if="page != 1"
        >Prev Page</RouterLink
      >
      <RouterLink
        :to="{ name: 'home', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</RouterLink
      >
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>

