<template>
  <div id="app">
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        Electron Vue App
      </v-toolbar-title>
    </v-app-bar>

<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link to="/theme">Theme</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

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
