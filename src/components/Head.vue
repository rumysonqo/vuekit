<template>
    <v-container fluid ma-0 pa-0>
        <v-layout>
        <v-flex>
            <v-app-bar
                app
                color="primary"
                dark
                >
                <v-app-bar-title>Kits SIGA</v-app-bar-title>
                <v-spacer></v-spacer>
                <router-link style="text-decoration: none; color: inherit;" to="/">
                    <v-btn class="deep-purple accent-4" dark large rounded>
                    <v-icon class="mr-2">home</v-icon>
                    Inicio
                    </v-btn> 
                </router-link>

                <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    
                    <v-btn
                    color="deep-purple accent-4 ml-4"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    large
                    rounded
                    >
                    <v-icon class="mr-2">view_list</v-icon>
                    Opciones de busqueda
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                    <v-list-item-title>
                        <router-link style="text-decoration: none; color: inherit;" to="/prog_meta">
                        <v-btn dark block outlined rounded color="deep-purple accent-4">
                        <v-icon class="mr-2">view_list</v-icon>
                        Programa/meta
                        </v-btn> 
                        </router-link>
                        
                        
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-title>
                    <router-link style="text-decoration: none; color: inherit;" to="/prog_meta_tarea">
                        <v-btn color="deep-purple accent-4" dark block outlined rounded>
                        <v-icon class="mr-2">view_list</v-icon>
                        Programa/meta/tarea
                        </v-btn> 
                        </router-link>
                    </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-title>
                    <router-link style="text-decoration: none; color: inherit;" to="/meta_clasif">
                        <v-btn color="deep-purple accent-4" dark block outlined rounded>
                        <v-icon class="mr-2">view_list</v-icon>
                        Meta/clasificador
                        </v-btn> 
                        </router-link>
                        
                    </v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>


            </v-app-bar>
        </v-flex>
        </v-layout>
    </v-container>
</template>
