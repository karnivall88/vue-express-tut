<template>
 <panel title="Create song">
     <v-layout>
     <v-form>
     <v-text-field label="Song title" v-model="song.title">

     </v-text-field>
     <v-text-field label="Artist" v-model="song.artist">

     </v-text-field>
     <v-text-field label="Genre" v-model="song.genre">

     </v-text-field>
     <v-text-field label="Album name" v-model="song.album">

     </v-text-field>
     <v-text-field label="Link to album image" v-model="song.albumImage">

     </v-text-field>
     <v-text-field label="ID of a Youtube video" v-model="song.youtubeID">

     </v-text-field>
     <v-btn @click="create">Add song</v-btn>
     </v-form>
     </v-layout>
 </panel>
 </template>

<script>
import SongService from "@/services/SongService"
import Panel from "@/components/Panel"
export default {

   data () {
       return { 
           song:
           {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeID: null,
        lyrics: null,
        tab: null
        }
   }
},

   components:{
  Panel
   },
   methods:{
      async create(song){
          try{
          await SongService.post(this.song)
          this.$router.push({name:"songs"})
          }catch(err)
          {
              console.log(err)
          }
       }
   }
}
</script>

<style>

</style>
