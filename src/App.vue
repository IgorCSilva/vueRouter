<template lang="pug">

  div.w3-container
    div.w3-center
      h1 Routing
      hr
      router-view(name="header-top")
      transition(
        name="slide"
        mode="out-in"
      )
        router-view
      router-view(name="header-bottom")

</template>

<script>
  import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header: Header,
  }
}
</script>

<style>
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
    }
    .slide-leave{
        opacity: 1;
        transform: translateY(0);
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s ease;
        opacity: 0;
    }


    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }

        100% {
            transform: translateY(0);
        }        
    }
    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(-30px);
        }        
    }

</style>
