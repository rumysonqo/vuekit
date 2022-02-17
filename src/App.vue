<template>
  <v-app>
    <Head></Head>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Head from './components/Head'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
      Head,
      Footer
    },

  data: () => ({
    //
  }),
};
</script>
