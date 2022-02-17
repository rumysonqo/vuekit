<template>
<v-container fluid>
  <v-layout style="height:60px" mb-1>
    <v-flex xs1 class="mt-3">
    <h1 class="title">Programa</h1> 
    </v-flex>
    <v-flex xs6>
      <v-select
            v-model="cod_prg"
            :items=ds_prog
            item-text="programa"
            item-value="cod_programa"
            label="Seleccione un programa"
            outlined
            @change="get_meta()"
      >
      </v-select>
      </v-flex>
    </v-layout>

    <v-layout style="height:60px">
    <v-flex xs1 class="ma-0 mt-3">
    <h1 class="title">Meta</h1> 
    </v-flex>
    <v-flex xs6>
      <v-select
            v-model="cod_met"
            :items=ds_meta
            item-text="meta"
            item-value="cod_meta"
            label="Seleccione una meta"
            outlined
            @change="get_tarea()"
      >
      </v-select>
    </v-flex>
    </v-layout>

    <v-layout style="height:60px">
    <v-flex xs1 class="ma-0 mt-3">
    <h1 class="title">Tarea</h1> 
    </v-flex>
    <v-flex xs6>
      <v-select
            v-model="cod_tar"
            :items=ds_tarea
            item-text="tarea"
            item-value="cod_tarea"
            label="Seleccione una tarea"
            outlined
            @change="kit_tarea()"
      >
      </v-select>
    </v-flex>
    </v-layout>
<v-layout>
  <v-flex  xs12>
  <v-card elevation="5">
  <v-card-title>
    BUSQUEDA POR ITEM/FAMILIA
    <v-spacer></v-spacer>
    <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="Busqueda"
    single-line
    hide-details
    >
    </v-text-field>
  </v-card-title>
  <v-card-text>
    <v-data-table
    :headers="headers"
    :items="ds_kit"
    :search="search"
    class="elevation-5"
    :footer-props="{
    'items-per-page-options': [10, 20, 30, 40, 50]}"
    :items-per-page="30"
    >
    </v-data-table>
  </v-card-text>
  </v-card>
  
  </v-flex>
</v-layout>
</v-container>

</template>

<script>
  import axios from "axios";
  export default {
    name: 'Home',
    mounted(){
      this.get_prog();
    },
    data(){
      return{
        search:null,
        cod_prg:null,
        cod_met:null,
        cod_tar:null,
        headers:[{
          text:'CODIGO',
          align:'start',
          value:'cod_item_fam',
          class:'deep-purple accent-4 white--text',
        },
            {
          text:'ITEM/FAMILIA',
          align:'start',
          value:'nom_item_fam',
          class:'deep-purple accent-4 white--text',
          
        },
        {
          text:'NIVEL',
          align:'center',
          filterable: false,
          value:'nivel',
          class:'deep-purple accent-4 white--text'
        },
        {
          text:'TIPO',
          align:'center',
          filterable: false,
          value:'tipo_bien',
          class:'deep-purple accent-4 white--text'
        },
        {
          text:'TIPO DE CALCULO',
          align:'center',
          filterable: false,
          value:'tipo_calculo',
          class:'deep-purple accent-4 white--text'
        },
        {
          text:'CLASIFICADOR',
          align:'start',
          filterable: false,
          value:'clasificador',
          class:'deep-purple accent-4 white--text'
        }],
        ds_kit:[],
        ds_prog:null,
        ds_meta:null,
        ds_tarea:null
      }
    },
    methods:{
      get_prog(){
        axios.get("http://localhost:3000/programas")
        .then(r=>{
        this.ds_prog=r.data;
        console.log('programas:',this.ds_prog);
        })
        .catch(function(error){
        console.log(error);
        })
        },

    get_meta(){
        axios.get("http://localhost:3000/metas/"+this.cod_prg)
        .then(r=>{
        this.ds_meta=r.data;
        console.log('metas:',this.ds_meta);
        })
        .catch(function(error){
        console.log(error);
        })
        },

    get_tarea(){
        axios.get("http://localhost:3000/tareas/"+this.cod_prg+"/"+this.cod_met)
        .then(r=>{
        this.ds_tarea=r.data;
        console.log('tareas:',this.ds_tarea);
        })
        .catch(function(error){
        console.log(error);
        })
        },

      async kit_item(){
        try{
          let datos=await axios.get('http://localhost:3000')
          console.log(datos.data);
          this.ds_kit=await datos.data 
        }catch(error){
          console.log(error);
        }
        
      },
      async kit_prog(){
        try{
          let datos=await axios.get('http://localhost:3000/kit_por_programa/'+this.cod_prg)
          console.log(datos.data);
          this.ds_kit=await datos.data 
        }catch(error){
          console.log(error);
        }
      },
      async kit_meta(){
        try{
          let datos=await axios.get('http://localhost:3000/kit_por_meta/'+this.cod_prg+'/'+this.cod_met)
          console.log(datos.data);
          this.ds_kit=await datos.data 
        }catch(error){
          console.log(error);
        }
      },
      async kit_tarea(){
        try{
          let datos=await axios.get('http://localhost:3000/kit_por_tarea/'+this.cod_prg+'/'+this.cod_met+'/'+this.cod_tar)
          console.log(datos.data);
          this.ds_kit=await datos.data 
        }catch(error){
          console.log(error);
        }
      }


    },
    /*created(){
      this.get_prog();
      this.kit_item();
    }*/
  }
</script>
