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

// Page not found
routes.push({ path: '*', component: load('Error404') })

export default new VueRouter({
  routes
})
