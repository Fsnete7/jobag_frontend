<template>
  <v-app>
    <main-nav-employer></main-nav-employer>
    <v-content>
      <v-container fluid id="title-cont" >
        <h2 style="color: #1955AE" class="text-center">CONTRATACIÓN</h2>
      </v-container>

      <v-container class="text-center" style="width: 60%; max-width: 600px">
        <v-card  class="justify-center">
          <v-card-text class="black--text text-justify overflow-auto" style="max-height: 350px; ">
            {{contrato}}
          </v-card-text>
        </v-card>
      </v-container>

      <v-container class="text-center">
        <btn-create-dialog v-bind:lblbtn="'ENVIAR CONTRATO'" text="Contrato Enviado" txtalign="text-right"></btn-create-dialog>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainNavEmployer from "../components/main-nav-employer";
import BtnCreateDialog from "../components/btn-create-dialog";
export default {
  name: "contract",
  components: {BtnCreateDialog, MainNavEmployer},
  data(){
    return {
      contrato:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n" +
          "\n" +
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
          +"\n" +
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    }
  }
}
</script>

<style scoped>
#title-cont{
  margin-bottom: 20px;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
  border-radius: 10px;
  width: 400px;
}
</style>