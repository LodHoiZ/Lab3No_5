import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { Passenger } from '@/type'
const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvent(perPage: number, page: number): Promise<AxiosResponse<Passenger[]>> {
        return apiClient.get<Passenger[]>('/passengers?_limit=' + perPage + '&_page='+ page)
    },
    getEventById(id: number): Promise<AxiosResponse<Passenger>>{
        return apiClient.get<Passenger>('passengers/' + id.toString())
    },
    getAirlineById(id: number): Promise<AxiosResponse<Passenger>>{
        return apiClient.get<Passenger>('airlines/' + id.toString())
    }
}