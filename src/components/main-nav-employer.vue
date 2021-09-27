<template>
  <div>
    <v-app-bar app color=#FFFFFF>
      <!--Drawer Icon-->
      <v-app-bar-nav-icon align="right" @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>

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
              src="https://www.elfutbolero.com.pe/u/fotografias/m/2021/9/26/f608x342-22236_51959_0.jpg"></v-img>
        </v-avatar>
      </v-btn>

      <v-btn class="text_bienvenido" plain> Bienvenido </v-btn>
      <v-btn dark class="boton_logout" color="#EA4E4E">Log Out</v-btn>
    </v-app-bar>



    <!--Drawer despegable-->
    <v-navigation-drawer color=#1955AE v-model="drawer" absolute temporary>
      <v-list nav dense>

        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text_sidebar">Inicio</v-list-item-title>

            </v-list-item-content>
          </v-list-item>
          <v-divider
              inset
          ></v-divider>
          <v-list-item>
            <v-list-item-title class="text_sidebar">Postular</v-list-item-title>
            <v-divider
                inset
            ></v-divider>
          </v-list-item>
          <v-divider
              inset
          ></v-divider>
          <v-list-item>
            <v-list-item-title class="text_sidebar">Mis Postulaciones</v-list-item-title>
            <v-divider
                inset
            ></v-divider>
          </v-list-item>
          <v-divider
              inset
          ></v-divider>
          <v-list-item>
            <v-list-item-title class="text_sidebar">Entrevistas</v-list-item-title>
            <v-divider
                inset
            ></v-divider>
          </v-list-item>
          <v-divider
              inset
          ></v-divider>
          <v-list-item>
            <v-list-item-title class="text_sidebar">Mi Cuenta</v-list-item-title>
            <v-divider
                inset
            ></v-divider>
          </v-list-item>
          <v-divider
              inset
          ></v-divider>
          <v-list-item>
            <v-list-item-title class="text_sidebar">Configuración</v-list-item-title>
            <v-divider
                inset
            ></v-divider>
          </v-list-item>
          <v-divider
              inset
          ></v-divider>
          <v-list-item color="#EA4E4E">
            <v-list-item-title class="text_sidebar">Cerrar Sesión</v-list-item-title>
            <v-divider
                inset
            ></v-divider>
          </v-list-item>
          <v-divider
              inset
          ></v-divider>

          <v-list-item v-for="item in items" :key="item" link :to=item.route>

            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ item.text }}
              <v-divider></v-divider>
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
}

.text_sidebar{
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: white;
}
</style>