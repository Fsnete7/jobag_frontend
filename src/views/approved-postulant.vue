<template>
  <v-app>
    <main-nav-employer></main-nav-employer>
    <v-content>
      <v-container fluid id="title-cont" >
        <h2 style="color: #1955AE" class="text-center">Desarrollador Front End</h2>
      </v-container>
      <v-container fluid id="name-cont">
        <h2 style="color: #1955AE" class="text-center">{{postulante.name}}</h2>
      </v-container>

      <v-container fluid class="text-center">
        <v-avatar color="primary" size="220" ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
      </v-container>

      <v-container fluid class="text-center">
        <div class="my-2 white--text">
          <v-btn x-large color="success" dark style="border-radius: 10px; width: 100%; max-width: 350px" >POSTULANTE APROBADO</v-btn>
        </div>
      </v-container>
      <v-container fluid class="text-center">
        <div class="my-2 white--text">
          <v-btn x-large color="#1955AE" dark style="border-radius: 10px; width: 100%; max-width: 350px"  >CONTINUAR A LA CONTRATACION</v-btn>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainNavEmployer from "../components/main-nav-employer";
export default {
  name: "approved-postulant",
  components: {MainNavEmployer},
  props: {
    postulant: {'name':String, 'photo':String}
  },
  data () {
    return {
      postulante:{id: 1, name:"Bryan Vela", photo:'https://cdn.vuetifyjs.com/images/john.jpg'},
    }
  },
}
</script>

<style scoped>
#title-cont{
  margin-bottom: 20px;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
  border-radius: 20px;
  width: 400px;
}
#name-cont{
  margin-bottom: 20px;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
  border-radius: 20px;
  width: 350px;
}
</style>