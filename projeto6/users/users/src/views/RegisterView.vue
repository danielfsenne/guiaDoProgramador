<template>
    <div>
        <h2>Registro de Usuário</h2>
        <hr>
        <div class="columns is-centered">
            <div class="column is-half">
                <p>Nome</p>
                <input type="text" placeholder="Nome do Usuário" class="input" v-model="name">
                <p>E-mail</p>
                <input type="email" placeholder="email@emmail.com" class="input" v-model="email">
                <p>Senha</p>
                <input type="password" placeholder="******" class="input" v-model="password">
                <hr>
                <button class="button is-success " @click="register">Cadastrar</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'RegisterView',
    data(){
        return {
            name: '',
            password: '',
            email: ''
        }
    },
    methods:{
        register(){
         console.log(this.name)
         console.log(this.email)
         console.log(this.password)
        }
    },
    
}
</script>
<style scoped>

</style>