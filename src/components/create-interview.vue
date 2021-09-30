<template>
  <div >
    <v-card
      height="75"
      max-width="1200"
      class="mx-auto"
      outlined
    >
      <v-card-title class="center">Crear Entrevista</v-card-title>
    </v-card>
    &nbsp;
    <v-card max-width="1200" class="mx-auto">
      <v-row>
        <v-col cols="1"></v-col>
        <v-col >
          <v-row >
            <v-col >
              <v-sheet height="300" width="100%">
                <v-calendar
                    ref="calendar"
                    :now="today"
                    :value="today"
                    :events="events"
                    color="primary"
                    type="week"
                ></v-calendar>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row >
            <v-col>
                <v-text-field
                    label="Hora Inicio"
                    solo
                ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                  label="Hora Fin"
                  placeholder="Placeholder"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col align="center">
        <v-container fluid>
            <v-card
                max-width="400"
            >
              <v-card-text>
                <v-select
                    v-model="selection"
                    :items="items"
                    multiple
                    label="Agregar postulantes"
                ></v-select>
              </v-card-text>
            </v-card>
            <v-list>
              <v-card
                  max-width="400"
                  class="mx-auto"
              >
                <v-list>
                  <v-list-item
                      v-for="item in items1"
                      :key="item.title"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-list>

            <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <div class="text-center">
                  <v-btn
                      color="#1955AE"
                      dark
                      v-bind="attrs"
                      v-on="on"
                  >
                    CREAR
                  </v-btn>
                </div>
              </template>

              <v-card>
                <v-card-title class="dialog1">
                  Entrevista creada
                  <pre></pre>
                  satisfactoriamente
                </v-card-title>
                <v-card-actions>
                  <div class="text-center" >
                    <v-btn
                        color="#1955AE"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                    ACEPTAR
                    </v-btn>
                  </div>
                </v-card-actions>
              </v-card>

            </v-dialog>
          </v-container>
        </v-col>
      </v-row>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "create-interview",
  data: () => ({
    selection: [],
    items: ['Karla Gomez', 'Frank Miller', 'Diego Perez', 'Julisa Ponte'],
    items1: [
        { icon: true, title: 'Karla Gomez', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { title: 'Frank Miller', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Diego Perez', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
    ]
  }),
}

</script>

<style scoped>
.text-center{
  margin-left: auto;
  margin-right: auto;
  position: center;
}
.center {
  font-family:"Roboto";
  font-weight: bold;
  font-size: 24px;
  color:#1955AE;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  position: center;
}
.dialog1 {
  font-family:"Roboto";
  font-weight: bold;
  font-size: 24px;
  color:#000000;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  position: center;
}
.filtros{
  font-size: 18px;
  font-family:"Roboto";
  color:#FAFCFF;
}
</style>