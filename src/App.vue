<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hey Emmanuele, welcome back!" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld
  },
  created() {
    // this.$root.setNotificationToken();
    console.log('messaging from app.vue', this.$messaging)
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
