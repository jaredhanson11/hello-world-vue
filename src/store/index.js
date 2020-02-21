import Vue from 'vue'
import Vuex from 'vuex'
import TodoItem from '@/store/TodoItem.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: {
      0: new TodoItem(0, 'Testing Title', 'Testing Description')
    },
    latestTodoId: 0
  },
  mutations: {
    addTodo(state, payload) {
      state.latestTodoId += 1
      var newTodoItem = new TodoItem(
        state.latestTodoId,
        payload.title,
        payload.description
      )
      Vue.set(state.todoList, state.latestTodoId, newTodoItem)
    }
  },
  actions: {
    addTodo(context, payload) {
      context.commit('addTodo', payload)
    }
  },
  getters: {
    getTodos: function(state) {
      return state.todoList
    }
  },
  modules: {}
})
