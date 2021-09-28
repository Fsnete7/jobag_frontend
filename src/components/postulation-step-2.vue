<template>

  <div>
    <v-card   max-width="1200"
              class="mx-auto"
              outlined>
      <v-card align="center"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1 txt_anuncio">
              Desarollador Backend
            </v-list-item-title>
            <v-list-item-subtitle>Claro</v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>
      </v-card>
      <v-stepper
          value="2"
      >
        <v-stepper-header>
          <v-stepper-step
              step="1"
              complete
          >
            Envío de CV
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2">
            Presentación
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Confirmación
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
      &nbsp;
      <v-card max-width="700"
              class="mx-auto"
              align="center"
              outlined>
        &nbsp;
        <v-img
            max-height="180"
            max-width="180"

            src="../assets/tomarsefoto.png">
        </v-img>
        &nbsp;
        <div class="txt_parrafo" >
          Agrega un video selfie de presentación personal para
          conocer más sobre tus aptitudes y experiencia.   </div>
        &nbsp;
        <div class="text-center">
          <v-file-input
              label="File input"

              prepend-icon="mdi-camera"
          ></v-file-input>
        </div>
        &nbsp;
        <div class="text-center">
          <v-btn
              color="#1955AE"
              dark
              to="/watch_job/postulation3"
          >
            CONTINUAR
          </v-btn>
        </div>
        &nbsp;
      </v-card>
      &nbsp;
    </v-card>
  </div>

</template>

<script>
export default {
  name: "postulation2",
}
</script>

<style scoped>

</style>