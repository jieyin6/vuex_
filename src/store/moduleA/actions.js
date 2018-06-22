export default {
  rootTrue ({state, commit, rootState}) {
    setTimeout(() => {
      commit('updateAge', {num: 529}, {root: true})
    }, 2000)
  },
  rootFalse ({state, commit, rootState}) {
    setTimeout(() => {
      commit('A_updateAge', {num: rootState.age})
    }, 2000)
  }
}
