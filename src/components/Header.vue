<template lang="pug">

    ul.nav.nav-pills
        router-link(to="/" tag="li" active-class="active" exact)
            a Home
        router-link(to="/user" tag="li" active-class="active" )
            a User
        
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
