import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home/Home';
import Kind from '../components/Kind/Kind';
import Car from '../components/Car/Car';
import User from '../components/User/User';
import VideoInfo from '../components/Home/VideoInfo';
import Register from '../components/Register/Register';
import Profile from '../components/User/profile';
import City from '../components/City/City';
import Main from '../components/Num/Main';
import Sign from '../components/Sign/Sign';
import New from '../components/New/New';
import Hot from '../components/Hot/Hot';
import Find from '../components/Find/Find';
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/kind',
            component: Kind
        },
        {
            path: '/car',
            component: Car
        },
        {
            name: 'user',
            path: '/user',
            component: User,
            children: [
                {
                    name: 'profile',
                    path: 'profile',
                    component: Profile
                }
            ]
        },
        {
            name: 'videoInfo',
            path: '/videoInfo/:vid',
            component: VideoInfo
        },
        {
            name: 'city',
            path: '/city',
            component: City
        },
        {
            name: 'Register',
            path: '/register',
            component: Register
        },
        {
            name: 'num',
            path: '/num',
            component: Main
        },
        {
            name: 'sign',
            path: '/sign',
            component: Sign
        },
        {
            name: 'new',
            path: '/new',
            component: New
        },
        {
            name: 'hot',
            path: '/hot',
            component: Hot
        },
        {
            name: 'find',
            path: '/find',
            component: Find
        }
    ]
});
