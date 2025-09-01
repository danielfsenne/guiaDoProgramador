<template>
  <div id="pokemon">
    <h1>{{ num }} {{ upper(name) }}</h1>
    <div class="card">
    <div class="card-image">
    <figure class="">
      <img
        :src="currentImg"
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="https://bulma.io/assets/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{ num }} {{ upper(name) }}</p>
            <p class="subtitle is-6">{{ pokemon.type }}</p>
        </div>
        </div>
        <div class="content">
            <button class="button is-medium" @click="mudarSprite">Mudar Sprite</button>
        </div> 
      </div>
     </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    num: Number,
    name: String,
    url: String,
  },
  data() {
    return {
      isFront: true,
      currentImg: '',
      pokemon: {
        type: '',
        front: '',
        back: ''
      },
    };
  },
  created() {
    axios.get(this.url).then((res) => {
      this.pokemon.type = res.data.types[0].type.name;
      this.pokemon.front = res.data.sprites.front_default;
      this.pokemon.back = res.data.sprites.back_default;
      this.currentImg = this.pokemon.front
    });
  },
  methods: {
    upper(value) {
      if (!value) return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    mudarSprite: function(){
        if(this.isFront){
            this.isFront = false
            this. currentImg = this.pokemon.back
        }else{
            this.isFront = true
            this.currentImg = this.pokemon.front
        }
    }
  },
};
</script>

<style>
    #pokemon {
        margin-top: 2%;
    }
</style>
