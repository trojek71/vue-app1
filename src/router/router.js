import VueRouter from "vue-router";
import ListContact from './components/ListContact.vue';
//import ListContact from "./components/ListContact";
import AddContact from "./components/AddContact";
import DeleteContact from "./components/DeleteContact";
const router = new VueRouter({
  routes: [
    { path: "/", component: ListContact },
    { path: "/lista", component: ListContact },
    { path: "/dodaj", component: AddContact },
    { path: "/kasuj", component: DeleteContact }
  ]
});
export default router;
