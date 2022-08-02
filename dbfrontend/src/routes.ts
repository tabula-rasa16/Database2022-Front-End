import{createRouter,createWebHistory} from 'vue-router'
import HomePage from "./views/HomePage.vue"
import ToStore from "./views/ToStore.vue"
import ToStoreTest from"./views/ToStoreTest.vue"
const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
            {path:'/',component: HomePage},
            {path:'/ToStore',component:ToStore},
            {path:'/ToStoretest',component:ToStoreTest},
        ],
    }
)
export default router