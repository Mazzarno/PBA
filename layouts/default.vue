<template>
  <div id="app" class="dark bg_index bg_index">
    <Default-Nav />
    <transition name="page" mode="out-in">
      <Nuxt class="mx-auto p-4" />
    </transition>
    <Default-Footer />
  </div>
</template>
<script>
import DefaultNav from '@/components/DefaultNav.vue'
import DefaultFooter from '@/components/DefaultFooter.vue'
export default {
  components: {
    DefaultNav,
    DefaultFooter,
  },
  transition: {
    name: 'home',
    mode: 'out-in',
  },
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>