<template>
 <v-container>
   <h2 style="color: #1955AE" class="text-center">Postulantes</h2>
   <v-list>
     <v-list-item v-for="postulante in postulantes" :key="postulante.id">
       <v-list-item-content >
         <v-container fluid class="text-center" id="postulant_container">
           <v-row class="justify-space-around align-center">
             <h4>{{postulante.name}}</h4>
             <v-icon small color="blue darken-2">mdi-comment-multiple</v-icon>
             <v-icon small color="blue darken-2">mdi-menu</v-icon>
             <v-avatar color="primary" size="40" >
               <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
             <v-icon small color="blue darken-2">mdi-check</v-icon>
             <v-icon small color="blue darken-2">mdi-close</v-icon>
           </v-row>
         </v-container>
       </v-list-item-content>
     </v-list-item>
   </v-list>
 </v-container>
</template>

<script>
export default {
  name: "list-postulants",
  data: () => ({
    postulantes:[
      {id: 1, name:'Bryan Vela', photo:''},
      {id: 2, name:'Jose Peralta', photo:''},
      {id: 4, name:'Juan Reynoso', photo:''},
      {id: 5, name:'Maria Tobar', photo:''},
    ]
  }),
}
</script>

<style scoped>
#postulant_container{
  background: whitesmoke;
  border-radius: 20px;
  width: 10%;
  padding: 20px;
}
</style>