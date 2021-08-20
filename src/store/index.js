import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Global values of an application in vue
  state: {
    'msg': 'Hello world',
    'data': 'This is a new data',
    'name': 'Joseph',
    'lastname': 'Ninaquispe',
    'friends': [],
    'friend': null,
    'courses': [],
    'course': null
  },
  // una mutacion se va realizar siempre y cuando sea llamado de una accion
  // se va a utilizar para cambiar los datos del estado, pero para hacer llamar esta mutacion
  // tengo que llamar a la action
  mutations: {
   addFriend(state) {
     state.friends = [state.friend,...state.friends]
   },
   addCourse(state) {
     state.courses = [state.course,...state.courses]
   }
  },
  actions: {
    addFriendAction(context) {
      context.commit('addFriend');
    },
    addCourseAction(context) {
      context.commit('addCourse')
    }
  },
  // Get state values
  // Te permite los accesos a los estados
  getters: {
    getData(state) {
      return state.data
    },
    getFullName(state) {
      // comillas invertidas: alt gr + }
      return `${state.name} ${state.lastname}`
    }
  }
})
