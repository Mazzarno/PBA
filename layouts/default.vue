<template>
  <div id="app" class="dark bg_index bg_index">
    <Default-Nav />
    <Nuxt class="mx-auto p-4" />
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
<style lang="scss">
$t-duration: 1000ms;
$t-delay: 400ms;
.my-layouts-enter-active,
.my-layouts-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #181717;
  }

  &::after {
    top: 50%;
    background-color: #181717;
  }
}

.my-layouts-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.my-layouts-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.my-layouts-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.my-layouts-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.my-layouts-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.my-layouts-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>