<template>
  <v-app>
    <!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar> -->
    <Toolbar></Toolbar>
    <Navbar style="height:100%"></Navbar>

    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";

export default {
  name: "App",
  components: {
    Navbar,
    Toolbar
  },
  data() {
    return {};
  }
};
</script>
