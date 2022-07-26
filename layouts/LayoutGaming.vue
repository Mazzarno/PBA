<template>
  <div id="app" class="dark bg-gaming">
    <Gaming-Nav />
    <Nuxt />
    <Gaming-Footer />
  </div>
</template>
<script>
import GamingNav from '@/components/GamingNav.vue'
import GamingFooter from '@/components/GamingFooter.vue'
export default {
  components: {
    GamingNav,
    GamingFooter,
  },
  transition: {
    name: 'home',
    mode: 'out-in',
  },
}
</script>
<style scoped>
.bg-gaming {
  background-image: linear-gradient(
      180deg,
      rgba(5, 5, 5, 0.74),
      rgba(5, 5, 5, 0.74)
    ),
    url(~assets/img/background-watermark-PBA.jpg);
  background-position: 0px 0px, 0px 0px;
  background-size: auto, auto;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ea1126, #cd131c 41%, #b90000);
  border-radius: 10px;
  z-index: 60;
}
</style>