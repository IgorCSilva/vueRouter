<template lang="pug">
    div 
        h1 The user page
        hr 
        //- p Loaded ID: {{ id }}
        button.w3-btn.w3-blue(
            @click="navigateToHome"
        ) Go to Home

        hr 
        router-view
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id // Here use $route, not $router.
        }
    },
    watch: {
        // Utilizado para verificar se há mudança nos parâmetros
        // de route. Caso não tenha o código abaixo ao mudar de página
        // os parâmetros sempre serão aqueles da primeira página acessada.
        '$route'(to, from){
            this.id = to.params.id // pega o valor passado como id da página que vai (to) acessar.
        }
    },
    methods: {
        navigateToHome(){
            // Goes to path '/' using $router. To get data
            // use $route.
            //this.$router.push('/')
            // ou
            this.$router.push({ name: 'home'})
        }
    }
}
</script>

<style scoped>

</style>
