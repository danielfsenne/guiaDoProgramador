
<template>
  <div id="app">
    <h1>Guia do programador</h1>
    <input type="text" v-model="nomeDoDaniel">
    <ClientePage :nome="nomeDoDaniel" email="tuntuntun@gmail" idade="35" :showIdade="true"/>
    <ClientePage nome="James da Salada de Fruta"  email="tuntuntun1@gmail" idade="30" showIdade="false"/>
    <ClientePage nome="Tralalelo Tralala"  email="tuntuntun2@gmail" idade="67" :showIdade="false"/>
    <ClientePage nome="Tuntuntun Sauhr"  email="tuntuntun3@gmail" idade="23" :showIdade="true"/>
    <ClientePage nome="Bombardile Crocodile"  email="tuntuntun5@gmail" idade="344" :showIdade="true"/>
    
  </div>
</template>

<script>
import ClientePage from './components/ClientePage.vue';
//import ProdutoPage from './components/ProdutoPage.vue';
export default {
  name: 'App',
  data() {
    return {
      nomeDoDaniel: "D.Flausino Senne"
    }
  },
  components:{
    ClientePage,
    // ProdutoPage
  }
}
</script>
  
<style>

</style>
