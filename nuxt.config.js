export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Powered By ASUS - Dominez avec le meilleur',
        htmlAttrs: {
            lang: 'fr',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: "Powered by ASUS s'adresse à ceux qui acceptent uniquement la perfection. Nos équipes de recherche et développement à la renommée mondiale sont entièrement dévouées à notre devise : à la recherche de l'exceptionnel. Notre recherche constante de la perfection est récompensée par plus de 3000 prix chaque année." },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'language', name: 'language', content: "French" },
            { hid: 'revisit-after', name: 'revisit-after', content: "1 days" },
            { name: 'format-detection', content: 'telephone=no' },
            // Open Graph / Facebook
            { hid: 'og:type', property: 'og:type', content: "website" },
            { hid: 'og:url', property: 'og:url', content: "https://www.asus.fr/event/Powered-by-ASUS/" },
            { hid: 'og:title', property: 'og:title', content: "Powered By ASUS - Dominez avec le meilleur" },
            { hid: 'og:description', property: 'og:description', content: "Powered by ASUS s'adresse à ceux qui acceptent uniquement la perfection. Nos équipes de recherche et développement à la renommée mondiale sont entièrement dévouées à notre devise : à la recherche de l'exceptionnel. Notre recherche constante de la perfection est récompensée par plus de 3000 prix chaque année." },
            // Twitter
            { hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image" },
            { hid: 'twitter:url', property: 'twitter:url', content: "https://www.asus.fr/event/Powered-by-ASUS/" },
            { hid: 'twitter:title', property: 'twitter:title', content: "Powered By ASUS - Dominez avec le meilleur" },
            { hid: 'twitter:description', property: 'twitter:description', content: "Powered by ASUS s'adresse à ceux qui acceptent uniquement la perfection. Nos équipes de recherche et développement à la renommée mondiale sont entièrement dévouées à notre devise : à la recherche de l'exceptionnel. Notre recherche constante de la perfection est récompensée par plus de 3000 prix chaque année." },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/asus_ico.png' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/styles.css', ],
    layoutTransition: {
        name: 'my-layouts',
        mode: 'out-in'
    },

    loading: '~/components/loading.vue',
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/vue-awesome-swiper.js', '~/plugins/directive.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        'nuxt-gsap-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        'nuxtjs-mdi-font', ['nuxt-compress',
            {
                gzip: {
                    threshold: 8192,
                },
                brotli: {
                    threshold: 8192,
                },
            },
        ]
    ],
    gsap: {
        extraPlugins: {
            scrollTo: true,
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    generate: {
        dir: 'htdocs',
        fallback: '404.html',
        routes: ['/', ],
        subFolders: false,
        crawler: false,
    },
    build: {
        publicPath: 'https://www.asus.fr/event/pba-test/',
    },
    router: {
        base: '/event/pba-test/'
    },

    robots: {
        UserAgent: '*',
        Allow: '/',
        UserAgent: 'Googlebot',
        Allow: '/',
        Sitemap: 'https://www.asus.fr/event/pba-test/sitemap.xml'
    },
    sitemap: {
        hostname: 'https://www.asus.fr/event/pba-test/',
        Default: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        routes: [{
            url: 'https://www.asus.fr/event/pba-test/',
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }, ]
    },
}