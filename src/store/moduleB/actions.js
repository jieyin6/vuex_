export default {
    BrootTrue ({state, commit, rootState}) {
      setTimeout(() => {
        commit('updateAge', {num: 529}, {root: true})
      }, 2000)
    },
    BrootFalse ({state, commit, rootState}) {
      setTimeout(() => {
        commit('B_updateAge', {num: rootState.age})
      }, 2000)
    }
  }