import VueRouter from "vue-router";
import ListContact from "./ListContact";
import Contact from "./Contact";
import AddContact from "./AddContact";
import DeleteContact from "./DeleteContact";
const router = new VueRouter({
  routes: [
    { path: "/", component: Contact },
    { path: "/lista", component: ListContact },
    { path: "/dodaj", component: AddContact },
    { path: "/kasuj", component: DeleteContact }
  ]
});
export default router;
