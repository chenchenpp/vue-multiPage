<template>
  <div id="app">
    <div id="nav">
      <a href="/home">home</a> /
      <router-link to="/activity/detail">detail</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
