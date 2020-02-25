import VueRouter from "vue-router";
import ListContact from "../components/ListContact";
import Contact from "../components/Contact";
//import AddContact from "../components/AddContact";
import DeleteContact from "../components/DeleteContact";
import Basic from "../components/Econtact";
const router = new VueRouter({
  routes: [
    { path: "/", component: Contact },
    { path: "/lista", component: ListContact },
    { path: "/dodaj", component: Basic },
    { path: "/kasuj", component: DeleteContact }
  ]
});
export default router;
