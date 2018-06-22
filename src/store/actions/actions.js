export default {
  updateAgeAsync (store, data) {
    setTimeout(() => {
      store.commit('updateAge', {
        num: data.num
      })
    }, 2000)
  }
}
