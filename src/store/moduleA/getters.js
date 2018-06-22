export default {
  allName (state, getters, rootState) {
    return `${state.firstName} ${rootState.a.lastName}`
  }
}
