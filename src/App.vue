<template>
  <div id="app" style="height: 100%; width: 100%" >
    <router-view></router-view>
  </div>
</template>

<script>
// import qrPage from './components/qrPage.vue'

export default {
  name: 'App',
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
