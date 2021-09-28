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
    <v-stepper>
    <v-stepper-header>
      <v-stepper-step step="1">
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

        <v-img
            max-height="180"
            max-width="180"

            src="../assets/curriculum.png">
        </v-img>

      <div class="txt_parrafo" >Adjunta tu hoja de vida detallando información
      relevante para el puesto de trabajo al que postulas</div>
      &nbsp;
      <div class="text-center">
        <v-file-input
            show-size
            label="File input"
        ></v-file-input>
      </div>
      &nbsp;
      <div class="text-center">
        <v-btn
            color="#1955AE"
            dark
            to="/watch_job/postulation2"
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
  name: "postulation",


}

</script>

<style scoped>
.txt_anuncio{
  font-family:"Roboto";
  color:#1955AE;
}
.txt_parrafo{
  font-family:"Roboto";
  font-size: 17px;
}

.center {
  font-family:"Roboto";
  font-size: 17px;
  color:#FFFFFF;
  display: flex;
}
</style>

