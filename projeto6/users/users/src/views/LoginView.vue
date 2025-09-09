<template>
    <div>
        <h2>Login de Usuário</h2>
        <hr>
        <div class="columns is-centered">
            <div class="column is-half">
                <div v-if="error != undefined">
                    <p>{{ error }}</p>
                </div>
                <p>E-mail</p>
                <input type="email" placeholder="email@emmail.com" class="input" v-model="email">
                <p>Senha</p>
                <input type="password" placeholder="******" class="input" v-model="password">
                <hr>
                <button class="button is-success " @click="register">Logar</button>
            </div>
        </div>
    </div>
</template>
<script>
//import axios from 'axios'
export default{
    name: 'LoginView',
    data(){
        return {
            password: '',
            email: '',
            error: undefined
        }
    },
    methods:{
        login(){
            console.log(login)
        }
    },
    
}
</script>
<style scoped>

</style>