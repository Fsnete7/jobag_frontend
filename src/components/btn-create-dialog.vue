<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2 white--text" :loading="loading" :disabled="loading" color="#1955AE"
            @click="loader = 'loading'" rounded  style="width: 20%" v-bind="attrs" v-on="on">{{ lblbtn }}</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-card-text>
          <div class="text-h5 text-center font-weight-bold black--text pa-12" >{{text}}</div>
          <v-container class="text-center">
            <v-btn class="white--text" depressed color="#1955AE" @click="dialog.value = false">Aceptar</v-btn>
          </v-container>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "btn-create-dialog",
  props: {
    text: String,
    lblbtn: String,
  },

  data () {
    return {
      loader: null,
      loading: false,
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    },
  }
}
</script>

<style scoped>

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>