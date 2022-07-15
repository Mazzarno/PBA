<template>
  <div>
    <div class="flex justify-center">
      <h1 class="text-red-700">DOMINEZ AVEC LE MEILLEUR</h1>
    </div>
    <div class="flex justify-center align-center">
      <div>
        <NuxtLink to="/creator" class="">
          <img
            class="mt-12 hover:animate-pulse"
            height="auto"
            width="460"
            src="~/assets/img/pba-build-creator-home.png"
            alt=""
          />
          <h2 class="mt-10">Creator</h2>
        </NuxtLink>
      </div>
      <div class="">
        <NuxtLink to="/gaming">
          <img
            class="hover:animate-pulse"
            height="auto"
            width="500"
            src="~/assets/img/scan-build-image-gaming.png"
            alt=""
          />
          <h2>Gaming</h2>
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-center align-center">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
}
</script>
