import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router/router'
import VueRouter from 'vue-router'
import { ApolloClient } from "apollo-client";
import VueApollo from "vue-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";

Vue.config.productionTip = false
const link = new WebSocketLink({
  uri: "ws://trojek.sytes.net:8089/v1/graphql",
  options: {
    reconnect: true,
    timeout: 60000
    //connectionParams: () => {
    //  return { headers: getHeaders() };
  }
});

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});


Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueApollo);
new Vue({
  render: h => h(App),
  router,
  apolloProvider,
  components: { App }
}).$mount('#app')
