<template>

     <panel title = "Songs">
         <div v-for="song in songs" :key="song.id">
             {{song.title}}
             {{song.album}}
             {{song.artits}}

         </div>
     </panel>
 </template>

<script>
import SongService from "@/services/SongService"
import Panel from "@/components/Panel"
export default {
   components:
   {
       Panel
   },
   data () {
       return { 
           songs: null
   }
},
 async mounted(){
    //  do a request for all hte songs in the dtabase
    this.songs = (await SongService.index()).data

 }
}
</script>

<style>

</style>
