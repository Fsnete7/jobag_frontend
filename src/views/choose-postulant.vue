<template>
  <v-app>
    <main-nav-employer></main-nav-employer>
    <v-content>
      <v-container fluid id="princ-cont">
        <h2 style="color: #1955AE" class="text-center">Desarrollador Front End</h2>
      </v-container>

      <v-container fluid class="pa-0" cols="12" sm="6">
        <v-row align="center">
          <v-container style="width: 45%; min-width: 400px; max-width: 650px">
            <list-postulants></list-postulants>
          </v-container>
          <v-col cols="12" sm="6">
            <div class="text-center">
              <div class="my-2">
                <v-btn color="#1955AE" dark style="width: 50%; max-width: 260px; min-width: 260px">MODIFICAR DATOS</v-btn>
              </div>
              <div class="my-2">
                <v-btn color="#1955AE" dark style="width: 50%; max-width: 260px; min-width: 260px">ENVIAR MENSAJE A TODOS</v-btn>
              </div>
              <div class="my-2">
                <v-btn color="#1955AE" dark style="width: 50%; max-width: 260px; min-width: 260px">CREAR ENTREVISTA</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

      </v-container>

      <v-container fluid class="text-center">
        <v-btn class="white--text" depressed color="red" style="border-radius: 10px" x-large>Cerrar Postulaciones</v-btn>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainNavEmployer from "../components/main-nav-employer";
import ListPostulants from "../components/list-postulants";
export default {
  name: "choose-postulant",
  components: {ListPostulants, MainNavEmployer}
}
</script>

<style scoped>
#princ-cont{
  margin-top: 5%;
  margin-bottom: 5%;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
  border-radius: 20px;
  width: 300px;
}
</style>