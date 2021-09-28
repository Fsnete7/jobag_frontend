<template>
    <v-app>
        <main-nav-employer></main-nav-employer>
        <v-content>
          <v-container fluid id="princ-cont">
            <h1 class="text-center" style="color: #1955AE"> Crear Nuevo Anuncio de Trabajo</h1>
            <v-divider style="background: #1955AE; margin-bottom: 8%"></v-divider>

            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea label="Puesto buscado"  auto-grow outlined rows="1" row-height="15"></v-textarea>
                    <v-select :items="items" label="Tipo de puesto" outlined ></v-select>
                    <v-textarea label="Lugar"  auto-grow outlined rows="1" row-height="15"></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-select :items="items" label="Tipo de puesto" outlined ></v-select>
                    <v-textarea label="Título del anuncio"  auto-grow outlined rows="1" row-height="15"></v-textarea>
                    <v-textarea label="Suldo"  auto-grow outlined rows="1" row-height="15"></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="12" md="4">
                    <v-textarea outlined name="input-7-4" auto-grow height="230px" label="Descripción" ></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="12" md="6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13121.361118496025!2d-76.9539256197403!3d-12.111878379069989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c70ab77498c1%3A0xcce9f50642e7c684!2sUniversidad%20Peruana%20de%20Ciencias%20Aplicadas!5e0!3m2!1ses-419!2spe!4v1632790275637!5m2!1ses-419!2spe"
                            width="100%" height="270" style="border:0; border-radius: 20px" allowfullscreen="" loading="lazy"></iframe>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <div class="text-right">
              <btn-create-dialog v-bind:lblbtn="'Aceptar'" text="Anuncio Creado Satisfactoriamente" ></btn-create-dialog>
            </div>
          </v-container>
        </v-content>
    </v-app>
</template>

<script>

import MainNavEmployer from "../components/main-nav-employer";
import BtnCreateDialog from "../components/btn-create-dialog";
export default {
  name: "create-job-ad",
  components: {
    BtnCreateDialog,
    MainNavEmployer
  },
}
</script>

<style scoped>
#princ-cont{
  margin-top: 5%;
  margin-bottom: 5%;
  background: whitesmoke;
  border-radius: 20px;
  width: 90%;
}
</style>