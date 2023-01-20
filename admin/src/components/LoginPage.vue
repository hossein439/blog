<template>
    <div class="relative login">
        <div class="grid grid-cols-2 w-[50em] mx-auto rounded shadow-xl bg-white">
            <form @submit.prevent="login()" class="p-8 text-gray-800" action="">
                <h1 class="text-4xl capitalize">Login</h1>
                <p class="text-gray-500 mt-2">sign in to your account</p>
                <div class="flex flex-col gap-y-3 mt-5">
                    <label class="relative">
                        <input type="email" v-model="credentails.email" placeholder="Email" class="w-full p-2 focus:outline-none border rounded">

                    </label>

                    <label class="relative ">
                        <input type="text" v-model="credentails.password" placeholder="Password" class="w-full p-2 focus:outline-none border rounded">

                    </label>

                    <div class="flex justify-between items-center">
                        <RouterLink :to="{name: 'register'}" class="text-blue-700 border-b-2 border-blue-700 text-sm">register</RouterLink>
                        <button
                            class="flex ml-auto px-12 py-1 my-4 text-base rounded bg-zinc-600 text-white capitalize">login</button>
                    </div>
                </div>
            </form>
            <div class="h-full">
                <img src="../../public/images/login.jpg" class="h-full object-cover rounded-l img" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive } from 'vue';
import { useRouter } from 'vue-router';  
import User from '@/services/Users';
import { useUser } from '@/pinia-store/user';
// import { storeToRefs } from 'pinia';

const { saveUser, isLogin } = useUser();

const credentails = reactive({
    email: null,
    password: null
});
const router = useRouter()

function login() {
    User.login(credentails)
    .then((res) => {
        useUser().$patch({
            user: res.data.user,
            isLogin: true
        });
        saveUser();
        console.log(isLogin);
        router.push({name: 'dashboard'});
    })
    .catch((err) => {
        console.log(err);
    })
}

// axios.post('http://localhost:4000/register')
// .then((res) => {
//     console.log(res)
//     console.log('Super admin is created!');
// })
// .catch((err) => {
//     console.log(err);
// });

</script>

<style scoped>
.login {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}

.img {
    transform: scaleX(-1);
}
</style>
