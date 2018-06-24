import Vuex from 'vuex'
import defaultState from './state/state'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import moduleAState from './moduleA/state'
import moduleAMutations from './moduleA/mutations'
import moduleAGetters from './moduleA/getters'
import moduleAActions from './moduleA/actions'
import moduleBState from './moduleB/state'
import moduleBMutations from './moduleB/mutations'
import moduleBGetters from './moduleB/getters'
import moduleBActions from './moduleB/actions'
export default () => {
  return new Vuex.Store({
    state: defaultState,
    getters,
    mutations,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: moduleAState,
        mutations: moduleAMutations,
        getters: moduleAGetters,
        actions: moduleAActions
      },
      b: {
        namespaced: true,
        state: moduleBState,
        mutations: moduleBMutations,
        getters: moduleBGetters,
        actions: moduleBActions
      }
    }
  })
}
