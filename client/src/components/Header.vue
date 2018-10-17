<template>
<v-toolbar fixed color="blue-grey darken-3" dark fluid>
<v-toolbar-title class="mx-3">Tabtracker</v-toolbar-title>
<v-toolbar-items>
    <v-btn flat dark to="/">
        Home
    </v-btn>
    <v-btn flat dark to="songs">
        Browse
    </v-btn>
</v-toolbar-items>
<v-spacer></v-spacer>
<v-toolbar-items>
    <v-btn  v-if="!$store.state.isUserLoggedIn" flat dark to="register" >Sign up</v-btn>
    <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="login">Login</v-btn>
    <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Log Out</v-btn>
</v-toolbar-items>

</v-toolbar>
</template>

<script>
export default {
    methods:
    {
        logout(){
            this.$store.dispatch("setToken", null)
            this.$store.dispatch("setUser", null)
            this.$router.push({name: "root"})
            //TODO: redirect to homepage or something...
        }
    }

}
</script>

<style>

</style>
