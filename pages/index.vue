<template>
  <div class="container mx-auto">
    <div>
      <h1 class="text-red-700 md:text-4xl pb-5">DOMINEZ AVEC LE MEILLEUR</h1>
    </div>
    <div class="flex flex-col sm:flex-row justify-center align-center">
      <NuxtLink to="/creator" class="flex justify-center">
        <div
          class="
            flex-col
            duration-500
            transition
            ease-in-out
            delay-125
            transform
            justify-between
            hover:animate-pulse hover:-translate-y-10
            filter
            grayscale
            hover:grayscale-0 hover:scale-105
          "
        >
          <div>
            <img
              class="mt-8"
              height="auto"
              width="460"
              src="~/assets/img/pba-build-creator-home.png"
              alt=""
            />
          </div>
          <div>
            <h2 class="text-2xl font-bold">CREATOR</h2>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/gaming" class="flex justify-center">
        <div
          class="
            flex-col
            duration-500
            transition
            ease-in-out
            delay-125
            transform
            justify-between
            hover:animate-pulse hover:-translate-y-10
            filter
            grayscale
            hover:grayscale-0 hover:scale-105
          "
        >
          <div>
            <img
              class=""
              height="auto"
              width="500"
              src="~/assets/img/scan-build-image-gaming.png"
              alt=""
            />
          </div>
          <div><h1 class="text-red-700 text-2xl font-bold">GAMING</h1></div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
}
</script>
