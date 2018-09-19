<template lang="pug">
    div
        h1 User detail
        p User loaded has ID: {{ $route.params.id }}
        router-link(
            tag="button"
            :to="link"
        ) Edit User
</template>

<script>
export default {
    data(){
        return{
            link: { 
                name: 'userEdit', 
                params: { id: this.$route.params.id }, 
                query: { locale: 'en', q: 100},  
                hash: '#data'
            },
            
        }
    },

    beforeRouteEnter(to, from, next){
        // Function called before start the next component.
        // Function that define if this component (UserDetail)
        // will be showed (next()) or not (next(false)).
        // Only chosing the user 2 this component will appear.
        if(to.params.id == 2){
            next()
        }else {
            next(false)
        }
        
    }
}
</script>

<style scoped>

</style>
