import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// from Benoit Ranque http://forum.quasar-framework.org/topic/736/how-to-load-all-files-in-a-directory-as-views
// returns all vue files in directory 'pages'
const pages = require.context('./components/pages', true, /^\.\/.*\.vue$/)
  .keys()
  .filter(page => page.split('/').length >= 2)
  .map(page => page.slice(2).slice(0, -4))

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

// page loading function
function loadPage (page) {
  return {
    path: `/${page}`,
    component: load(`pages/${page}`)
  }
}

// Add first route with layout
let routes = [
  {
    path: '/',
    component: load('Layout'),
    children: []
  }
]

// Add all other pages
pages.forEach(page => {
  routes[0].children.push(loadPage(page))
})

// Standard quasar default will redirect to '/404' route
// Always leave this last one
routes.push({ path: '*', redirect: '/404' }) // Not found

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  /* routes: [
    { path: '/', component: load('Hello') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ] */
  routes
})
