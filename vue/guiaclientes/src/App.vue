
<template>
  <div id="app">
    <h1>Guia do programador</h1>
    <ClientePage/>
    <h4>Lista de Produtos</h4>
    <ProdutoPage/>
  </div>
</template>

<script>
import ClientePage from './components/ClientePage.vue';
import ProdutoPage from './components/ProdutoPage.vue';
export default {
  name: 'App',
  components:{
    ClientePage,
    ProdutoPage
  }
}
</script>
  
<style>

</style>
