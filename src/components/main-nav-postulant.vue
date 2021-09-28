<template>
  <div>
    <v-app-bar app color=#FFFFFF>
      <!--Drawer Icon-->
      <v-app-bar-nav-icon align="right" @click.stop="drawer = !drawer" color="#1955AE"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-btn plain icon depressed to="/patientProfile">
        <v-avatar size="100">
          <v-img
              max-height="70"
              max-width="70"
              src="../assets/logo.png"></v-img>
        </v-avatar>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon depressed to="/patientProfile" >
        <v-avatar right color=#1955AE size="50">
          <v-img
              max-height="50"
              max-width="50"
              src="https://img.freepik.com/foto-gratis/retrato-hombre-joven-expresivo-vistiendo-traje-formal_273609-6942.jpg?size=626&ext=jpg"></v-img>
        </v-avatar>
      </v-btn>

      <v-btn class="text_bienvenido" plain> Bienvenido </v-btn>
      <v-btn dark class="boton_logout" color="#EA4E4E">Log Out</v-btn>
    </v-app-bar>



    <!--Drawer despegable-->
    <v-navigation-drawer color=#1955AE v-model="drawer" absolute temporary>
      <v-container class="text-center" style="width: 90%; margin-top: 20px">
        <v-row class="text_sidebar">
          <p>Menu</p>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon align="right" @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>
        </v-row>
      </v-container>
      <v-divider style="background: white;margin-top: 8px"></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="items in menuitems" :key="items">
            <v-list-item-content>
              <v-list-item-title class="text_sidebar">{{ items }}</v-list-item-title>
              <v-divider style="background: white;margin-top: 8px"></v-divider>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  name: "main-nav-postulant",

  data: () => ({
    drawer: false,
    group: null,
    menuitems:[
      'Inicio',
      'Postular',
      'Mis postulaciones',
      'Entrevistas',
      'Mi cuenta',
      'Configuración',
      'Cerrar Sesión',
    ]
  }),
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<style>
.boton_logout{
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
.text_bienvenido{
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  padding: 10px 10px 10px 10px;
}

.text_sidebar{
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: white;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: 30%;
  width: 50%;
  position: center;
}
</style>