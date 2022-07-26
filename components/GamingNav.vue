<template>
  <div>
    <nav class="px-2 bg-metal z-50 fixed w-full opacity-90">
      <div class="flex f justify-around xl:mx-0 w-full items-center mx-auto">
        <nuxt-link
          to="/"
          class="
            flex
            items-center
            hover:animate-pulse
            duration-500
            transition
            ease-in-out
            transform
            hover:scale-110
          "
          ><img
            src="~/assets/img/logo_PBA.png"
            class="h-16 mr-20"
            alt="PBA Logo"
        /></nuxt-link>
        <button
          data-collapse-toggle="mobile-menu"
          @click="dropdownMobile = !dropdownMobile"
          type="button"
          class="
            btn_nav
            inline-flex
            justify-center
            items-center
            ml-3
            text-gray-400
            rounded-lg
            lg:hidden
            hover:text-gray-900
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

        <div class="hidden w-full lg:block">
          <ul
            class="
              flex flex-col
              w-full
              mt-4
              md:flex-row
              justify-center
              md:mt-0
              text-sm
              xl:text-lg
            "
          >
            <li class="group">
              <button
                @click="
                  dropdown1 = !dropdown1
                  dropdown2 = false
                  dropdown3 = false
                "
                v-click-outside="clickOutDropdown1"
                class="
                  flex
                  justify-between
                  items-center
                  py-2
                  px-8
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
                      class="block py-2 px-8 font-bold hover:bg-red-700"
                      to="/gaming"
                      >GAMING</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      class="block py-2 px-8 font-bold hover:bg-red-700"
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
                v-click-outside="clickOutDropdown2"
                class="
                  flex
                  justify-between
                  items-center
                  py-2
                  px-8
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
                v-click-outside="clickOutDropdown3"
                class="
                  flex
                  justify-between
                  items-center
                  py-2
                  px-8
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
                class="block py-2 px-8 font-bold hover:text-red-700"
                to="/gaming/videos"
                >VIDEO</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="" to="/gaming">
                <button
                  class="block py-2 px-8 font-bold text-grey-600 line-through"
                  disabled
                >
                  PROMOTIONS
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="dropdownMobile" class="lg:hidden mt-3">
        <ul class="">
          <li class="groupe py-2 px-8 my-2 flex justify-center">
            <button
              @click="
                dropdown4 = !dropdown4
                dropdown5 = false
                dropdown6 = false
              "
              v-click-outside="clickOutDropdown4"
              class="
                flex
                justify-between
                items-center
                py-2
                px-8
                hover:text-red-700
              "
            >
              POURQUOI PBA ?
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
          </li>
          <div v-show="dropdown4">
            <ul>
              <nuxt-link to="/creator">
                <li class="px-8 my-2 text-xs">CRÉATOR</li>
              </nuxt-link>
              <nuxt-link to="/gaming">
                <li class="px-8 my-2 text-xs">GAMING</li>
              </nuxt-link>
            </ul>
          </div>
          <li class="groupe py-2 px-8 my-2 flex justify-center">
            <button
              @click="
                dropdown5 = !dropdown5
                dropdown4 = false
                dropdown6 = false
              "
              v-click-outside="clickOutDropdown5"
              class="
                flex
                justify-between
                items-center
                py-2
                px-8
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
          </li>
          <div v-show="dropdown5">
            <ul>
              <nuxt-link to="/gaming/fps">
                <li class="px-8 my-2 text-xs">FIRST PERSON SHOOTER</li>
              </nuxt-link>
              <nuxt-link to="/gaming/simulation">
                <li class="px-8 my-2 text-xs">SIMULATION</li>
              </nuxt-link>
              <nuxt-link to="/gaming/moba">
                <li class="px-8 my-2 text-xs">MOBA</li>
              </nuxt-link>
              <nuxt-link to="/gaming/action-aventure">
                <li class="px-8 my-2 text-xs">ACTION/AVENTURE</li>
              </nuxt-link>
              <nuxt-link to="/gaming/strategie">
                <li class="px-8 my-2 text-xs">STRATEGIE</li>
              </nuxt-link>
              <nuxt-link to="/gaming/jdr">
                <li class="px-8 my-2 text-xs">JEU DE ROLE</li>
              </nuxt-link>
            </ul>
          </div>

          <li class="groupe py-2 px-8 my-2 flex justify-center">
            <button
              @click="
                dropdown6 = !dropdown6
                dropdown5 = false
                dropdown4 = false
              "
              v-click-outside="clickOutDropdown6"
              class="
                flex
                justify-between
                items-center
                py-2
                px-8
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
          </li>
          <div v-show="dropdown6">
            <ul>
              <nuxt-link to="/gaming/moniteur">
                <li class="px-8 my-2 text-xs">MONITEURS</li>
              </nuxt-link>
              <nuxt-link to="/gaming/carte-graphique">
                <li class="px-8 my-2 text-xs">CARTES GRAPHIQUES</li>
              </nuxt-link>
              <nuxt-link to="/gaming/equipement-gaming">
                <li class="px-8 my-2 text-xs">EQUIPEMENTS GAMING</li>
              </nuxt-link>
              <nuxt-link to="/gaming/carte-mere">
                <li class="px-8 my-2 text-xs">CARTES MERES</li>
              </nuxt-link>
              <nuxt-link to="/gaming/reseau">
                <li class="px-8 my-2 text-xs">RÉSEAUX</li>
              </nuxt-link>
              <nuxt-link to="/gaming/">
                <li class="px-8 my-2 text-xs">AIO/PSU</li>
              </nuxt-link>
            </ul>
          </div>
          <nuxt-link to="/gaming/video">
            <li class="py-2 px-8 my-2">VIDEO</li>
          </nuxt-link>
          <li class="py-2 px-8 font-bold text-grey-600 line-through">
            PROMOTIONS
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    clickOutDropdown1() {
      this.dropdown1 = false
    },
    clickOutDropdown2() {
      this.dropdown2 = false
    },
    clickOutDropdown3() {
      this.dropdown3 = false
    },
    clickOutDropdown4() {
      this.dropdown4 = false
    },
    clickOutDropdown5() {
      this.dropdown5 = false
    },
    clickOutDropdown6() {
      this.dropdown6 = false
    },
    clickOutDropdownMobile() {
      this.dropdownMobile = false
    },
  },
  data() {
    return {
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
      dropdown4: false,
      dropdown5: false,
      dropdown6: false,
      dropdownMobile: false,
    }
  },
}
</script>

