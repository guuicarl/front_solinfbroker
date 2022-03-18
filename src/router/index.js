import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import LoginComponent from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Ordens from '@/components/Ordens'
import Carteira from '@/components/Carteira'
import Grafico from '@/views/Grafico'
import Stocks from '@/components/Stocks'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/ordens',
      component: Ordens,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/carteira',
      component: Carteira,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/grafico',
      component: Grafico,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/stocks',
      component: Stocks,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach(navigationGuard)

export default router