<template>
<v-toolbar fixed color="blue-grey darken-3" dark fluid>
<v-toolbar-title class="mx-3">Tabtracker</v-toolbar-title>
<v-toolbar-items>
    <v-btn flat dark to="/">
        Home
    </v-btn>
    <v-btn flat dark>
        Browse
    </v-btn>
</v-toolbar-items>
<v-spacer></v-spacer>
<v-toolbar-items>
    <v-btn flat dark to="register" >Sign up</v-btn>
    <v-btn flat dark to="login">Login</v-btn>
</v-toolbar-items>

</v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
