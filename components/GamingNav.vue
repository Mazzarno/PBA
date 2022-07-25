<template>
  <div>
    <nav class="px-2 bg-metal z-50 fixed w-full">
      <div
        class="container flex flex-wrap justify-around items-center mx-auto"
      >
        <nuxt-link to="/" class="flex items-center hover:animate-pulse         duration-500
          transition
          ease-in-out
          transform

          hover:scale-110"
          ><img
            src="~/assets/img/logo_PBA.png"
            class="h-16 mr-20 "
            alt="PBA Logo"
        /></nuxt-link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="
            btn_nav
            inline-flex
            justify-center
            items-center
            ml-3
            text-gray-400
            rounded-lg
            md:hidden
            hover:text-gray-900
            focus:outline-none focus:ring-2 focus:ring-blue-300
            dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500
          "
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul
            class="
              flex flex-col
              mt-4
              md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
            "
          >
            <li class="group">
              <button
                @click="
                  dropdown1 = !dropdown1
                  dropdown2 = false
                  dropdown3 = false
                "
                class="
                  flex
                  justify-between
                  items-center
                  py-2
                  px-8
                  text-lg
                  font-bold
                  hover:text-red-700
                "
              >
                POURQUOI PBA<svg
                  class="
                    ml-1
                    w-4
                    h-4
                    group-hover:animate-bounce
                    duration-500
                    transition
                    ease-in-out
                  "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                v-show="dropdown1"
                class="absolute top z-50 text-base list-none shadow bg-metal"
              >
                <ul class="py-1 text-left">
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming"
                      >GAMING</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/creator"
                      >CREATOR</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="group">
              <button
                @click="
                  dropdown2 = !dropdown2
                  dropdown1 = false
                  dropdown3 = false
                "
                class="
                  flex
                  justify-between
                  items-center
                  py-2
                  px-8
                  text-lg
                  font-bold
                  hover:text-red-700
                "
              >
                CATÉGORIE DE JEU
                <svg
                  class="
                    ml-1
                    w-4
                    h-4
                    group-hover:animate-bounce
                    duration-500
                    transition
                    ease-in-out
                  "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                v-show="dropdown2"
                class="absolute top z-50 text-base list-none shadow bg-metal"
              >
                <ul class="py-1 text-left">
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/fps"
                      >FIRST PERSON SHOOTER (FPS)</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/action-aventure"
                      >ACTION-AVENTURE</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/simulation"
                      >SIMULATION</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/strategie"
                      >STRATÉGIE</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/moba"
                      >MOBA</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/jdr"
                      >JEU DE RÔLE</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="group">
              <button
                @click="
                  dropdown3 = !dropdown3
                  dropdown1 = false
                  dropdown2 = false
                "
                class="
                  flex
                  justify-between
                  items-center
                  py-2
                  px-8
                  text-lg
                  font-bold
                  hover:text-red-700
                "
              >
                PRODUITS
                <svg
                  class="
                    ml-1
                    w-4
                    h-4
                    group-hover:animate-bounce
                    duration-500
                    transition
                    ease-in-out
                  "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                v-show="dropdown3"
                class="
                  absolute
                  top
                  z-50
                  j
                  text-base
                  list-none
                  divide-y divide-gray-100
                  shadow
                  bg-metal
                  divide-gray-600
                "
              >
                <ul class="py-1 text-left">
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/moniteur"
                      >MONITEUR</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/cartes-graphiques"
                      >CARTES GRAPHIQUES</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/gaming-gear"
                      >EQUIPEMENT GAMING</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/networking"
                      >RÉSEAU</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 text-lg font-bold hover:bg-red-700"
                      to="/gaming/aio-psu"
                      >AIO/PSU</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <nuxt-link
                class="block py-2 px-8 text-lg font-bold hover:text-red-700"
                to="/gaming/videos"
                >VIDEO</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="" to="/gaming">
                <button
                  class="
                    block
                    py-2
                    px-8
                    text-lg
                    font-bold
                    text-grey-600
                    line-through
                  "
                  disabled
                >
                  PROMOTIONS
                </button></nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
    }
  },
}
</script>

