<template>
    <div>
        <input type="text" name="email" id="email" placeholder="E-mail" ><br>
        <input type="text" name="Nome" id="nome" placeholder="Nome">
        <button>Test</button>
        <h4>{{ paramatroDaRota }}</h4>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    created(){
        this.$route.params.dado
        this.paramatroDaRota = this.$route.params.dado
    },
    data(){
        return{
            paramatroDaRota: "Nada"
        }
    }
}
</script>

