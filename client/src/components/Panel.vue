<template>

<v-container >
 <v-layout align-center justify-center column >
 <v-flex xs12 >
     
     <div class=" white elevation-4 " fluid>
         <v-toolbar  flat dense color="blue-grey darken-3" dark>
             <v-toolbar-title>{{title}}</v-toolbar-title>
         </v-toolbar>
          <div class="px-4">
         <slot >
             No slot content defined
         </slot>
      </div>
     </div>
    </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    props:[
        "title"
    ]
   
}
</script>

<style>


</style>
