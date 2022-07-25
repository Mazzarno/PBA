<template>
  <div class="flex flex-col w-full m-0 p-0 mt-16">
    <div class="relative">
      <img
        src="~/assets/img/1920x740-non-logo-0616-pba-gaming.jpg"
        height="auto"
        width="100%"
        alt=""
      />
      <div class="absolute left-36 top-1/3">
        <h1 class="heading44 text-6xl">
          DOMINEZ <br />
          AVEC LE MEILLEUR<br /><span class="font-sans">#PoweredByASUS</span>
        </h1>
      </div>
    </div>
    <div>
      <swiper class="swiper w-full" :options="swiperOption">
        <swiper-slide class="relative bg-PBABLACK"
          ><img
            src="~/assets/img/aura-banner2x.jpg"
            alt=""
            class="opacity-50"
          />
          <div class="absolute top-1/3 left-1/4 text-left w-2/4">
            <p class="text-center text-2xl">Qu'est-ce que</p>
            <h1 class="text-red-700 text-center text-4xl">POWERED BY ASUS</h1>
            <p class="text-lg">
              Powered by ASUS s'adresse à ceux qui acceptent uniquement la
              perfection. Nos équipes de recherche et développement à la
              renommée mondiale sont entièrement dévoués à notre devise : à la
              recherche de l'exceptionnel. Notre recherche constante de la
              perfection est récompensée par plus de 3000 prix chaque année.
              Alors, le défi des partenaires de Powered by ASUS consiste à
              sélectionner des assembleurs de PC capables de créer des machines
              de rêve introuvables ailleurs, qu'il s'agisse de dynamos compactes
              ou de bêtes de guerre à refroidissement liquide. Powered by ASUS,
              c'est l'exclusivité. Les performances. L’art de la technologie.
              Pourquoi penser autrement ?
            </p>
          </div></swiper-slide
        >
        <swiper-slide class="relative bg-PBABLACK"
          ><img
            src="~/assets/img/banner-2-xg438q.jpg"
            alt=""
            class="opacity-50"
          />
          <div class="absolute top-1/3 left-52 text-left w-2/4">
            <h1 class="text-red-700 text-center text-4xl">
              REPUBLIC OF GAMERS
            </h1>
            <br />
            <p class="text-left text-lg">
              La technologie ne dort jamais, et l'action devrait suivre cet
              exemple. À ceux qui veulent prendre le pouvoir : Republic of
              Gamers vous attend. En perpétuelle innovation, ROG s'engage à
              produire des expériences hors du commun pour les joueurs et les
              passionnés du monde entier. Depuis sa création, ROG est devenue
              une marque de référence en matière de révolution technologique
              pour le gaming, exerçant son influence sur les joueurs et
              passionnés d'informatique à travers le monde.
            </p>
          </div></swiper-slide
        >
        <swiper-slide class="relative bg-PBABLACK"
          ><img
            src="~/assets/img/tuf-gaming-banner.jpg"
            alt=""
            class="opacity-50"
          />
          <div class="absolute top-1/4 left-1/2 text-left w-1/3">
            <h3 class="text-center text-6xl">TUF GAMING</h3>
            <br />
            <p class="text-left text-lg">
              TUF Gaming est la nouvelle arme des joueurs qui réclament un PC
              gaming aux performances durables, stables et qualitatives. Nous
              avons imaginé une vaste gamme de cartes mères, d'ordinateurs
              portables et de bureau, de coques, de claviers, de souris et de
              casques, tandis que de nombreuses autres innovations passionnantes
              sont en cours.
            </p>
            <br />
            <p class="text-left text-lg">
              En plus d'afficher un style unique, chaque produit TUF a été
              rigoureusement testé pour garantir stabilité et durabilité tout en
              intégrant des fonctionnalités qui plairont aux joueurs. Nous avons
              également collaboré avec les meilleurs fabricants de composants
              afin de créer la TUF Gaming Alliance, un écosystème grandissant de
              produits compatibles les uns avec les autres et arborant un design
              à l'esthétisme homogène.
            </p>
          </div></swiper-slide
        >
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-4 gap-0 justify-center mt-10">
        <div
          @click="toCategorie()"
          class="
            relative
            w-56
            bg-grey-700
            hover:bg-red-700
            mx-5
            my-10
            p-5
            duration-500
            transition
            ease-in-out
            transform
            hover:animate-pulse hover:-translate-y-2 hover:scale-110
          "
        >
          <p class="font-bold text-xl">CATÉGORIES DE JEU</p>
        </div>
        <nuxt-link :to="{ path: '/gaming', hash: '#partenariat' }">
          <div
            class="
              relative
              w-56
              bg-grey-700
              hover:bg-red-700
              mx-5
              my-10
              p-5
              duration-500
              transition
              ease-in-out
              transform
              hover:animate-pulse hover:-translate-y-2 hover:scale-110
            "
          >
            <p class="font-bold text-xl">PARTENARIATS</p>
          </div>
        </nuxt-link>
        <nuxt-link :to="{ path: '/gaming', hash: '#produit' }">
          <div
            class="
              relative
              w-56
              bg-grey-700
              hover:bg-red-700
              mx-5
              my-10
              p-5
              duration-500
              transition
              ease-in-out
              transform
              hover:animate-pulse hover:-translate-y-2 hover:scale-110
            "
          >
            <p class="font-bold text-xl">PRODUITS</p>
          </div>
        </nuxt-link>
        <nuxt-link :to="{ path: '/gaming', hash: '#video' }">
          <div
            class="
              relative
              w-56
              bg-grey-700
              hover:bg-red-700
              mx-5
              my-10
              p-5
              duration-500
              transition
              ease-in-out
              transform
              hover:animate-pulse hover:-translate-y-2 hover:scale-110
            "
          >
            <p class="font-bold text-xl">VIDÉOS</p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div
      id="categorie"
      class="categorie flex flex-row justify-center mt-20 mb-10"
    >
      <h1 class="text-red-700 text-center sm:text-7xl text-2xl ROGBIGtitle">
        CATÉGORIES DE JEU
      </h1>
    </div>
    <div id="categorie" class="flex justify-center mt-10">
      <div class="grid grid-cols-3 gap-0 justify-center m-10">
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
          "
        >
          <img
            src="~/assets/img/FPS-gaming-genre-home-page.jpg"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-red-700">
            <h1 class="text-base p-1">FIRST PERSON SHOOTER</h1>
          </div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
          "
        >
          <img
            src="~/assets/img/dirt-rally-2-home-page.jpg"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-red-700">
            <h1 class="text-base p-1">SIMULATION</h1>
          </div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
          "
        >
          <img
            src="~/assets/img/MOBA-429-x-439.jpg"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-red-700"><h1 class="text-base p-1">MOBA</h1></div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
          "
        >
          <img
            src="~/assets/img/Village-Ethan.jpg"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-red-700">
            <h1 class="text-base p-1">ACTION/AVENTURE</h1>
          </div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
          "
        >
          <img
            src="~/assets/img/strategy-gaming-home-page.jpg"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-red-700"><h1 class="text-base p-1">STRATEGIE</h1></div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
          "
        >
          <img
            src="~/assets/img/RPG-439X439.jpg"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-red-700">
            <h1 class="text-base p-1">JEU DE ROLE</h1>
          </div>
        </div>
      </div>
    </div>
    <div id="produit" class="flex flex-row justify-center mt-20">
      <h1 class="text-red-700 text-center sm:text-7xl text-2xl ROGBIGtitle">
        PRODUITS
      </h1>
    </div>
    <div class="flex justify-center mt-10">
      <div class="grid grid-cols-3 gap-4 justify-center m-10">
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
            hover:animate-pulse
            hover:-translate-y-10
            hover:scale-105
          "
        >
          <img
            src="~/assets/img/pba-asus.png"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-transparent">
            <p class="text-base p-1 font-semibold">MONITEURS</p>
          </div>
        </div>

        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
            hover:animate-pulse
            hover:-translate-y-10
            hover:scale-105
          "
        >
          <img
            src="~/assets/img/ROG-STRIX-RTX3090_3D.png"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-transparent">
            <p class="text-base p-1 font-semibold">CARTES GRAPHIQUES</p>
          </div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
            hover:animate-pulse
            hover:-translate-y-10
            hover:scale-105
          "
        >
          <img
            src="~/assets/img/ROG-Delta-S_03.png"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-transparent">
            <p class="text-base p-1 font-semibold">EQUIPEMENTS GAMING</p>
          </div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
            hover:animate-pulse
            hover:-translate-y-10
            hover:scale-105
          "
        >
          <img
            src="~/assets/img/ROG-Maximus-XIII-Hero-gaming-home.png"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-transparent">
            <p class="text-base p-1 font-semibold">CARTES MERES</p>
          </div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
            hover:animate-pulse
            hover:-translate-y-10
            hover:scale-105
          "
        >
          <img src="~/assets/img/rtax82u.png" height="300" width="300" alt="" />
          <div class="bg-transparent">
            <p class="text-base p-1 font-semibold">RÉSEAUX</p>
          </div>
        </div>
        <div
          class="
            duration-500
            transition
            ease-in-out
            transform
            filter
            grayscale
            hover:grayscale-0
            hover:animate-pulse
            hover:-translate-y-10
            hover:scale-105
          "
        >
          <img
            src="~/assets/img/cooler-pba.png"
            height="300"
            width="300"
            alt=""
          />
          <div class="bg-transparent">
            <p class="text-base p-1 font-semibold">AIO/PSU</p>
          </div>
        </div>
      </div>
    </div>
    <div id="partenariat" class="flex flex-row justify-center mt-20">
      <h1 class="text-red-700 text-center sm:text-7xl text-2xl ROGBIGtitle">
        PARTENARIATS
      </h1>
    </div>
    <div class="flex justify-center mt-20">
      <div class="w-full relative overflow-hidden">
        <Transition
          enter-active-class="duration-500 ease-out"
          enter-class="translate-x-full opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="duration-500 ease-in"
          leave-class="translate-x-0 opacity-100"
          leave-to-class="translate-x-full opacity-0"
          mode="out-in"
        >
          <section
            v-if="partenaire == 1"
            key="1"
            class="
              transition-all
              transform
              grid grid-cols-2
              gap-0
              justify-center
            "
          >
            <div class="flex justify-end">
              <img
                src="~/assets/img/absolute2x.png"
                height="500"
                width="500"
                alt=""
              />
            </div>

            <div class="flex flex-col justify-start">
              <img
                src="~/assets/img/Absolutepc-logo_gris.png"
                height="auto"
                width="400"
                alt=""
                class="mb-10"
              />
              <p class="text-left text-lg w-3/4 mb-10">
                Célèbre boutique d’informatique située dans le 12ème
                arrondissement de Paris, Absolute PC a été parmi les premiers à
                proposer des machines Powered by ASUS. Véritable artisan du
                Hardware, leur métier est avant tout la conception et
                l'assemblage de PC sur-mesure pour gamers et professionnels
                exigeants. Ils proposent également un service de vente de
                composants informatiques et de maintenance/réparation pour vos
                ordinateurs.
              </p>
              <a
                href="https://www.absolutepc.fr/28-powered-by-asus"
                target="_blank"
                class="
                  ensavoirplus
                  duration-500
                  transition
                  ease-in-out
                  transform
                  filter
                  grayscale
                  hover:grayscale-0
                  hover:animate-pulse
                  hover:-translate-y-3
                  hover:scale-110
                "
                ><p>EN SAVOIR PLUS</p></a
              >
            </div>
          </section>
          <section
            v-if="partenaire == 2"
            key="2"
            class="
              transition-all
              transform
              grid grid-cols-2
              gap-0
              justify-center
            "
          >
            <div class="flex justify-end">
              <img
                src="~/assets/img/pba-pc-specialist.png"
                height="500"
                width="500"
              />
            </div>

            <div class="flex flex-col justify-start">
              <img
                src="~/assets/img/pcspecialist.png"
                height="auto"
                width="450"
                class="mb-10"
              />
              <p class="text-left text-lg w-3/4 mb-10">
                PCSpecialist est le premier fabricant britannique de PC gaming,
                d'ordinateurs portables et de stations de travail
                professionnelles personnalisés. L'objectif de PCSpecialist a
                toujours été d'offrir une expérience client optimale, tout en
                fournissant des systèmes puissants adaptés aux besoins de ses
                clients grâce à ses configurateurs en ligne faciles à utiliser.
                Tous les systèmes sont bâtis, testés et soutenus depuis leur
                installation dédiée au Royaume-Uni en utilisant des composants
                de la plus haute qualité pour garantir des performances
                fulgurantes et une qualité de construction inégalée.
              </p>
              <a
                href="https://www.pcspecialist.fr/pc-de-bureau/asus-pba/"
                target="_blank"
                class="
                  ensavoirplus
                  duration-500
                  transition
                  ease-in-out
                  transform
                  filter
                  grayscale
                  hover:grayscale-0
                  hover:animate-pulse
                  hover:-translate-y-3
                  hover:scale-110
                "
                ><p>EN SAVOIR PLUS</p></a
              >
            </div>
          </section>
          <section
            v-if="partenaire == 3"
            key="3"
            class="
              transition-all
              transform
              grid grid-cols-2
              gap-0
              justify-center
            "
          >
            <div class="flex justify-end">
              <img
                src="~/assets/img/pc-gamer-shiny-aquarius.png"
                height="500"
                width="500"
                alt=""
              />
            </div>

            <div class="flex flex-col justify-start">
              <img
                src="~/assets/img/Infomax_logox2.png"
                height="auto"
                width="400"
                alt=""
                class="mb-10"
              />
              <p class="text-left text-lg w-3/4 mb-10">
                Célèbre boutique d’informatique située dans le 12ème
                arrondissement de Paris, Absolute PC a été parmi les premiers à
                proposer des machines Powered by ASUS. Véritable artisan du
                Hardware, leur métier est avant tout la conception et
                l'assemblage de PC sur-mesure pour gamers et professionnels
                exigeants. Ils proposent également un service de vente de
                composants informatiques et de maintenance/réparation pour vos
                ordinateurs.
              </p>
              <a
                href="https://infomaxparis.com/fr/150-pc-gamer-asus"
                target="_blank"
                class="
                  ensavoirplus
                  duration-500
                  transition
                  ease-in-out
                  transform
                  filter
                  grayscale
                  hover:grayscale-0
                  hover:animate-pulse
                  hover:-translate-y-3
                  hover:scale-110
                "
                ><p>EN SAVOIR PLUS</p></a
              >
            </div>
          </section>
          <section
            v-if="partenaire == 4"
            key="4"
            class="
              transition-all
              transform
              grid grid-cols-2
              gap-0
              justify-center
            "
          >
            <div class="flex justify-end">
              <img
                src="~/assets/img/absolute2x.png"
                height="500"
                width="500"
                alt=""
              />
            </div>

            <div class="flex flex-col justify-start">
              <img
                src="~/assets/img/Absolutepc-logo_gris.png"
                height="auto"
                width="450"
                alt=""
                class="mb-10"
              />
              <p class="text-left text-lg w-3/4 mb-10">
                Célèbre boutique d’informatique située dans le 12ème
                arrondissement de Paris, Absolute PC a été parmi les premiers à
                proposer des machines Powered by ASUS. Véritable artisan du
                Hardware, leur métier est avant tout la conception et
                l'assemblage de PC sur-mesure pour gamers et professionnels
                exigeants. Ils proposent également un service de vente de
                composants informatiques et de maintenance/réparation pour vos
                ordinateurs.
              </p>
              <nuxt-link
                to=""
                class="
                  ensavoirplus
                  duration-500
                  transition
                  ease-in-out
                  transform
                  filter
                  grayscale
                  hover:grayscale-0
                  hover:animate-pulse
                  hover:-translate-y-3
                  hover:scale-110
                "
                ><p>EN SAVOIR PLUS4</p></nuxt-link
              >
            </div>
          </section>
        </Transition>
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <div class="grid grid-cols-4 justify-center">
        <img
          @click="partenaire = 1"
          src="~/assets/img/Absolutepc-logo_gris2.png"
          height="70"
          width="220"
          alt=""
          class="
            p-5
            duration-500
            transition
            ease-in-out
            transform
            hover:-translate-y-2 hover:scale-110
          "
        />
        <img
          @click="partenaire = 2"
          src="~/assets/img/pcspecialist.png"
          height="70"
          width="220"
          alt=""
          class="
            p-5
            duration-500
            transition
            ease-in-out
            transform
            hover:-translate-y-2 hover:scale-110
          "
        />
        <img
          @click="partenaire = 3"
          src="~/assets/img/Infomax_logo.png"
          height="70"
          width="220"
          alt=""
          class="
            p-5
            duration-500
            transition
            ease-in-out
            transform
            hover:-translate-y-2 hover:scale-110
          "
        />
        <img
          @click="partenaire = 4"
          src="~/assets/img/pcspecialist.png"
          height="70"
          width="220"
          alt=""
          class="
            p-5
            duration-500
            transition
            ease-in-out
            transform
            hover:-translate-y-2 hover:scale-110
          "
        />
      </div>
    </div>
    <div class="flex flex-row justify-center mt-20 mb-5">
      <h1 class="text-red-700 text-center sm:text-7xl text-2xl ROGBIGtitle">
        VIDÉOS
      </h1>
    </div>

    <div id="video" class="grid grid-cols-6 gap-4">
      <div
        class="
          col-start-2
          px-20
          mb-4
          col-span-4
          relative
          h-0
          overflow-hidden
          max-w-full
          w-full
        "
        style="padding-bottom: 56.25%"
      >
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/RC_auLvuO24"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="flex justify-center mb-16">
      <nuxt-link
        to="/gaming/videos"
        class="
          ensavoirplus
          duration-500
          transition
          ease-in-out
          transform
          filter
          grayscale
          hover:grayscale-0
          hover:animate-pulse
          hover:-translate-y-3
          hover:scale-110
        "
        ><p>ACCES AUX VIDÉOS</p></nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  layout: 'LayoutGaming',
  mounted() {},
  methods: {
    toCategorie() {
      gsap.to(window, { duration: 2, scrollTo: '#categorie' })
    },
  },
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
        breakpoints: {
          1500: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          430: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
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
<style>
.heading44 {
  background-color: #fff;
  color: transparent;
  line-height: 75px;
  text-shadow: 0 0 8px hsl(0deg 0% 95% / 69%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 100%;
  background: grey;
  opacity: 0.6;
}
.swiper-pagination-bullet-active {
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 100%;
  background: white;
  opacity: 1;
}
.swiper-button-prev {
  left: 10px;
  right: auto;
}
.swiper-button-next {
  left: auto;
  right: 30px;
}
.ensavoirplus {
  display: flex;
  width: 273px;
  height: auto;
  margin-top: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-width: 2px;
  border-color: #b70001;
  border-radius: 0px;
  background-color: transparent;
  background-image: url(~assets/img/btn-right.png),
    url(~assets/img/btn-left.png), url(~assets/img/btn-center.png);
  background-position: 100% 50%, 0% 50%, 50% 50%;
  background-size: contain, contain, contain;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-attachment: scroll, scroll, scroll;
  opacity: 1;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
}
</style>
