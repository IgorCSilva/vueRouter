<template lang="pug">
    div
        h1 Edit the User
        p Locale: {{ $route.query.locale }}
        p Analytics: {{ $route.query.q }}
        hr
        button.w3-btn(@click="confirmed = !confirmed") Confirm
        p(v-if="confirmed") Go to home
        p(v-else) Ask before go to home
        div(style="height: 700px")
        p#data Some text
</template>

<script>
export default {
    data(){
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next){
        // Função executada antes de deixar este componente.
        if(this.confirmed){
            next()
        }else {
            if(confirm('Are you sure?')){
                next()
            }else {
                next(false)
            }
        }
    }
}
</script>

<style scoped>

</style>
