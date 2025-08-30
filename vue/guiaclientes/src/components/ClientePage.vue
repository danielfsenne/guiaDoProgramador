<template>
  <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr>
    <p>Email: {{ processarEmail(cliente.email) }}</p>
    <p v-if="showIdade">Idade: {{ cliente.idade }}</p>
    <p v-else>O usuário escondeu a idade!</p>

    <button @click="mudarCor">Mudar cor!</button>
    <button @click="emitirEventoDelete">Deletar</button>

    <h4>Id especial: {{ idEspecial }}</h4>
  </div>
</template>

<script>
export default {
  name: "ClientePage",
  props: {
    cliente: {
      type: Object,
      required: true
    },
    showIdade: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isPremium: false
    };
  },
  methods: {
    mudarCor() {
      this.isPremium = !this.isPremium;
    },
    emitirEventoDelete() {
      this.$emit("meDelete", {
        idDoCliente: this.cliente.id,
        curso: "Formação Node.js",
        emPromocao: true,
        component: this
      });
    },
    testar() {
      alert("Isso é um alert!");
    },
    processarEmail(value) {
      return "GUIADOPROGRAMADOR." + value.toUpperCase();
    }
  },
  computed: {
    idEspecial() {
      return (this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase();
    }
  }
};
</script>

<style scoped>
.cliente {
  background-color: #ECE5E3;
  max-width: 600px;
  height: 240px;
  padding: 1%;
  margin-top: 2%;
}

.cliente-premium {
  background-color: black;
  color: yellow;
  max-width: 600px;
  height: 180px;
  padding: 1%;
  margin-top: 2%;
}
</style>
