<template>
  <v-app>
    <main-nav-postulant></main-nav-postulant>
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>

import MainNavPostulant from "@/components/main-nav-postulant";


export default {
  components: {
    MainNavPostulant
  },
  data: () => ({
    //
  })
}
</script>

<!--  <v-btn plain to="/home" color="white">Home</v-btn> |
      <v-btn plain to="/homepage" color="white">Casita</v-btn> |
      <v-btn plain to="/about" color="white">About</v-btn>-->