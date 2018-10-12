<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="E-mail">
    <br>
     <input type="password" name="password" v-model="password" placeholder="Password">
     <br>
    <div class="error" v-html = 'error'> </div>
     <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try{
      await AuthService.register({email: this.email, password: this.password})
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
 .error{
   color: tomato;
 }
</style>
