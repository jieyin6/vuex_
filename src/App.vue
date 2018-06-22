<template>
  <div id="app">
    <p>age: {{age}}</p>
    <p>firstname: {{firstName}}</p>
    <p>fullName: {{fullName}}</p>
    <button @click='updateAge({num: 1})'>age加1</button>
    <button @click='updateAgeAsync({num: 2})'>age异步加2</button>
    <hr>
    <p>yjage: {{yjage}}</p>
    <button @click='DoubleAge({num: 2})'>age*2</button>
    <p>allname: {{allName}}</p>
    <button @click='RT()'>root:true</button>
    <button @click='RF()'>root: false</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapMutations({
      updateAge: 'updateAge',
      DoubleAge: 'a/A_updateAge'
    }),
    ...mapActions({
      updateAgeAsync: 'updateAgeAsync',
      RT: 'a/rootTrue',
      RF: 'a/rootFalse'
    })
  },
  computed: {
    yjage () {
      return this.$store.state.a.age
    },
    ...mapState({
      age: (state) => state.age,
      firstName: (state) => state.firstName
    }),
    ...mapGetters({
      fullName: 'fullName',
      allName: 'a/allName'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
