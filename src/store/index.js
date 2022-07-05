import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation'
import action from './action'
import getter from './getter'

Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
  state,
  mutation,
  action,
  getter
})
