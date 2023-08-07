import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'
import PassengerLayoutVue from '@/views/event/PassengerLayout.vue'
import PassengerDetailVue from '@/views/event/PassengerDetail.vue'
import AirlineDetailVue from '@/views/event/AirlineDetail.vue'
import EditDetailVue from '@/views/event/EditDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout',
      component: PassengerLayoutVue,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail',
          component: PassengerDetailVue,
          
        },
        {
          path: 'edit',
          name: 'event-edit',
          props: true,
        component: EditDetailVue
        },
        {
          path: 'airline/:id',
          name: 'airline-detail',
          component: AirlineDetailVue
        }
      ]
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    }
    
  ]
})

export default router
