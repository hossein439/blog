import { createRouter, createWebHistory } from 'vue-router';
// import Users from './services/Users';

// import { storeToRefs } from 'pinia';

const routes = [{
        path: '/',
        name: 'home',
        component: () => import ('./views/HomeView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('./components/LoginPage.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./components/RegisterPage.vue')
    },
    {
        path: '/signout',
        name: 'signout',
        component: () => import('./components/SignOut.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import ('./layout/DashBoard.vue')
    },
    {
        path: '/create-post',
        name: 'create-post',
        component: () => import('./views/CreatePost.vue')
    },
    {
        path: `/user-profile`,
        name: 'user-profile',
        component: () => import('./views/UserProfile.vue'),
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('./views/UserUpdate.vue'),
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('./views/ProfileView.vue'),
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('./views/ProfileView.vue'),
            },
            {
                path: 'customization',
                name: 'customization',
                component: () => import('./views/CustomizationView.vue'),
            },
            {
                path: 'account',
                name: 'account',
                component: () => import('./views/AccountView.vue'),
            }
        ]
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: () => import('./views/SinglePost.vue')
    },
    {
        path: '/edit-post/:id',
        name: 'edit-post',
        component: () => import('./views/EditPost.vue')
    },
    {
        path: '/readinglist',
        name: 'reading-list',
        component: () => import('./views/ReadingList.vue')
    },
    // ------------ Not Found ------------ \\
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: () => import ('./components/NotFound.vue'),
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth',
        }
    }
});


// Users.readProfile()
//     .then((res) => {
//         const { name } = res.data;
//         router.addRoute({
//             path: `/${name}`,
//             name: 'user-profile',
//             component: () => import('./views/UserProfile.vue'),
//         })
//     }).catch(() => {
//         router.push({ name: 'login' })
//     })



// router.beforeEach((to, from, next) => {
//     const { isLogin } = storeToRefs(useUser());
//     console.log(isLogin.value);
//     if(!isLogin.value && to.name !== 'login'){
//         console.log(from)
//         next({name: 'login'});
//     } else {
//         console.log('next')
//         next()
//     }
// })

export default router;

// {
//     path: '/admin',
//     name: 'admin',
//     component: () => import('./views/admin/AdminView.vue'),
//     children: [
//         {
//             path: 'login',
//             name: 'login',
//             component: () => import ('./components/LoginPage.vue')
//         },
//         {
//             path: '',
//             name: 'dashboard',
//             component: () => import ('./views/admin/DashBoard.vue')
//         },
//         // ------------ Blog ------------ \\ 
//         {
//             path: 'blogs',
//             name: 'blogs',
//             component: () => import ('./views/blogs/BlogTemplate.vue'),
//             children: [
//                 {
//                     path: '',
//                     name:'index-blog',
//                     component: () => import('./views/blogs/BlogIndex.vue'),
//                 },
//                 {
//                     path: 'create',
//                     name: 'create-blog',
//                     component: () => import('./views/blogs/BlogCreate.vue')
//                 },
//                 {
//                     path: 'update/:id',
//                     name: 'update-blog',
//                     component: () => import('./views/blogs/BlogUpdate.vue')
//                 },
//             ]
//         },

//         // ------------ User ------------ \\ 
//         {
//             path: 'users',
//             name: 'users',
//             component: () => import ('./views/users/UserTemplate.vue'),
//             meta: {
//                 requiresAuth: true,
//             },
//             children: [
//                 {
//                     path: '',
//                     name: 'show-user',
//                     component: () => import('./views/users/UserShow.vue'),
//                 },
//                 {
//                     path: 'create',
//                     name: 'create-user',
//                     component: () => import ('./views/users/UserCreate.vue'),
//                 },
//                 {
//                     path: 'update/:id',
//                     name: 'update-user',
//                     component: () => import ('./views/users/UserUpdate.vue'),
//                 },
//             ],
//         },
//         // ------------ Category ------------ \\
//         {
//             path: 'categories',
//             name: 'categories',
//             component: () => import('./views/category/CategoryTemplate.vue'),
//             children: [
//                 {
//                     path: '',
//                     name: 'index-category',
//                     component: () => import('./views/category/CategoryIndex.vue')
//                 },
//                 {
//                     path: 'create',
//                     name: 'create-category',
//                     component: () => import('./views/category/CategoryCreate.vue'),
//                 },
//                 {
//                     path: 'update/:id',
//                     name: 'update-category',
//                     component: () => import('./views/category/CategoryUpdate.vue'),
//                 },
//             ],
//         },
//     ]
// },