import {createRouter, createWebHistory} from "vue-router";
import useAuth from "./composable/useAuth";

import Index from  "./pages/index.vue";
import About from "./pages/about.vue";
import Login from "./pages/login.vue";
import NotFound from "./pages/404.vue";
import FamilyHistory from "./pages/familyHistory.vue";
import FamilyMember from "./pages/familyMember.vue";
import AccountProfile from "./pages/accountProfile.vue";

const {isAuthenticated} = useAuth();


const routes = [
    {
    path: "/",
    name:"Index",
    component: Index,
},
{
    path: "/about",
    name:"About",
    component: About,
},

{
    path: "/login",
    name:"Login",
    component: Login,
},


{
    path: "/accountProfile",
    name:"AccountProfile",
    component: AccountProfile,
 
},

   
{
    path: '/familyMember',
    name: "FamilyMember",
    component: FamilyMember,
  },
  

{
    path: "/familyHistory",
    name:"FamilyHistory",
    component: FamilyHistory,
    beforeEnter: (to, from, next) => {
        if (!isAuthenticated.value) {
         next("/login");
         } 
                next();
            

      },
},

{
    path: "/:pathMatch(.*)*",
    name:"NotFound",
    component: NotFound,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
