import VueRouter from 'vue-router'
import queues from '../components/queues'
import agents from '../components/agents'
import account from '../components/account'
import login from '../components/login'
import home from '../components/Home'
import Vue from 'vue'


// Configure routes for all Applets



Vue.use(VueRouter)

// Instantiate `router`
const router =
     new VueRouter({
        routes:[
            {
                path: '/',
                name: 'home',
                component: agents
            },
            {
                path: '/Agents',
                name: 'agent',
                component: agents
            },
            {
                path: '/Queues',
                name:'queues',
                component:queues
            },
            {
                path: '/Profile',
                name:'profile',
                component:account
            },
            {
                path: '/login',
                name:'Login',
                component:login
            }
        ]
        ,
        mode: 'history'
    })


export default router