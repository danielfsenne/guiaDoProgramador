<template>
    <div :class="{'cliente' : !isPremium, 'cliente-premium': isPremium}">
        <h4>Nome: {{ nome }}</h4>
        <hr>
        <hr>
        <p>Email: {{ email }}</p>
        <p v-if="showIdade == true">Idade: {{ idade }}</p>
        <p v-else>O usuário escondeu a idade</p>
    </div>
</template>
<script>
    export default {   
        data(){
            return{
                isPremium: false
            }
        },
        props: {
            nome: String,
            email: String,
            idade: Number,
            showIdade: Boolean
        }
    }
</script>
<style scoped>
    .cliente{
        background-color: #ECE5E3;
        max-height: 600px;
        height: 180px;
        padding: 1%;
        margin-top: 2%;
    }
    .cliente-premium{
        background-color: black;
        color: yellow;
        max-width: 600px;
        height: 180px;
        padding: 1%;
        margin-top: 2%;
    }
    
</style>

