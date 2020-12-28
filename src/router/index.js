import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:userId',
    name: 'UserProfile',
    component: User
  },
  { path: '/404', component: NotFound },  
  { path: '*', redirect: '/404' },  
]


const router = new VueRouter({
  routes
})

router.push('/')

export default router
