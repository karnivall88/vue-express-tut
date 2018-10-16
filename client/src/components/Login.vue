<template>
<v-container fluid > 
<v-layout  align-center justify-center column >
 <v-flex xs12>
   <div class=" white elevation-4" style="width:32rem;" >
      <v-toolbar flat dense color="blue-grey darken-3" dark>
        <v-toolbar-title >
          Login
        </v-toolbar-title>
      </v-toolbar>
      <div class="px-4">
        <v-form ref="form"  lazy-validation>
        <v-text-field  type="email" v-model="email" required label="E-mail" color="teal lighten-1"> </v-text-field>
        <v-text-field type="password" v-model="password" label="Password" color="teal lighten-1"> </v-text-field>
        <!-- <div class="error" v-html = 'error'> </div> -->
         <v-alert
      :value="error"
      type="error"
      transition="scale-transition"
      >
      {{error}}
      </v-alert>
        <v-btn  dark @click="login" color="blue-grey  darken-3">Login</v-btn>
        </v-form>
        
      </div>
     
   </div>
 </v-flex>
</v-layout>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      success: null
    }
  },
  methods: {
    async login () {
      try{
      await AuthService.login({email: this.email, password: this.password})
      }catch(error)
      {
        this.error = error.response.data.error
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
