import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    showNav: true,
    path: '/',
    name: 'Todo List',
    component: () =>
      import(/* webpackChunkName: "list" */ '../views/TodoList.vue')
  },
  {
    showNav: true,
    path: '/add',
    name: 'Add Todo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "add" */ '../views/TodoAdd.vue')
  },
  {
    showNav: false,
    path: '/item/:id',
    name: 'Todo Item Details',
    component: () =>
      import(/* webpackChunkName: "item" */ '../views/TodoItemDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
export { routes }
