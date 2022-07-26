<template>
  <footer class="p-4 bg-transparent shadow md:px-6 md:pt-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <nuxt-link to="/creator">
        <img
          src="~/assets/img/creator-logo-pba.png"
          class="
            mr-3
            h-16
            hover:animate-pulse
            duration-500
            transition
            ease-in-out
            transform
            hover:scale-110
          "
          alt="PBA LOGO"
        />
      </nuxt-link>
      <ul class="flex flex-wrap items-center mb-6 text-xl sm:mb-0">
        <li>
          <nuxt-link to="/gaming"
            ><h1
              class="
                text-red-700
                md:mr-6
                mr-6
                hover:animate-pulse
                duration-500
                transition
                ease-in-out
                transform
                hover:scale-110
              "
            >
              Gaming
            </h1></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/creator"
            ><h2
              class="
                md:mr-6
                mr-6
                text-2xl
                hover:animate-pulse
                duration-500
                transition
                ease-in-out
                transform
                hover:scale-110
              "
            >
              Creator
            </h2></nuxt-link
          >
        </li>
      </ul>
    </div>
    <hr class="border-gray-500 sm:mx-auto lg:my-8" />
    <span class="text-sm text-gray-500 sm:text-center"
      >© ASUSTeK Computer Inc. Tous droits réservés.
      <a
        href="https://www.asus.com/fr/Terms_of_Use_Notice_Privacy_Policy/Official-Site"
        target="_blank"
        rel="noopener noreferrer"
        class="text-red-700 underline hover:text-red-800"
        >Conditions d'utilisation.</a
      >
      Toutes les caractéristiques sont sujettes à modification sans préavis et
      les caractéristiques données ne correspondent qu'à certains modèles. La
      disponibilité des produits peut varier selon le marché.</span
    >
  </footer>
</template>