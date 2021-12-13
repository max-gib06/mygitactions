<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ComponentPost msg="Building systems app"/>
</template>

<script>
import ComponentPost from './components/ComponentPost.vue'

export default {
  name: 'App',
  components: {
    ComponentPost
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
