<template>
      <panel title="Login">
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
      </panel>

</template>

<script>
import AuthService from '@/services/AuthService'
import Panel from '@/components/Panel'
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
      const response = await AuthService.login({email: this.email, password: this.password})
      this.$store.dispatch("setToken", response.data.token)
      this.$store.dispatch("setUser", response.data.user)
      }catch(error)
      {
        this.error = error.response.data.error
      }


    }
  },
  components:{
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
