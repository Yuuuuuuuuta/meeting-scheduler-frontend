<template>
    <v-toolbar>
        <v-app-bar-nav-icon
        @click="navbarToggle"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
</template>
<script>
import store from '@/store/store.js'

export default {
    name: "Toolbar",
    data() {
        return {
            navbarToggle: this.$store.state.navbarToggle
        }
    },
    created: {
      initializeToggle() {
        this.$store.dispatch('initializeToggle')
      }
    },
    methods: {
      navbarToggle() {
        this.$store.dispatch('navbarToggle')
      } 
    }
}
</script>

<style>

</style>
