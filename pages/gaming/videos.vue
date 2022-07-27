<template>
  <div></div>
</template>
<script>
export default {
  layout: 'LayoutGaming',
  mounted() {},
  methods: {},
  data() {
    return {
      totalPartenaire: 4,
      partenaire: 1,
      swiperOption: {
        loop: true,
        navigation: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>