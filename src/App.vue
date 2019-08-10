<template>
  <v-app>
    <header>
      <Toolbar></Toolbar>
    </header>
    <Navbar></Navbar>
    <v-layout>
      <router-view></router-view>
    </v-layout>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";
import router from "./router/router"

export default {
  name: "App",
  router,
  components: {
    Navbar,
    Toolbar
  },
  data() {
    return {};
  }
};
</script>
