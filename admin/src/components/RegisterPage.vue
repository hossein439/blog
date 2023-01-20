<template>
    <div class="relative register">
        <div class="grid grid-cols-2 w-[50em] mx-auto rounded shadow-xl bg-white">
            <form @submit.prevent="register()" class="p-8 text-gray-800" action="">
                <h1 class="text-4xl capitalize">register</h1>
                <p class="text-gray-500 mt-2">Create your own account</p>
                <div class="flex flex-col gap-y-3 mt-5">
                    <label class="relative">
                        <input type="text" v-model="credentails.name" placeholder="Firstname" class="w-full p-2 focus:outline-none border rounded">
                    </label>
                    <label class="relative">
                        <input type="text" v-model="credentails.lastname" placeholder="Lastname" class="w-full p-2 focus:outline-none border rounded">
                    </label>
                    <label class="relative">
                        <input type="email" v-model="credentails.email" placeholder="Email" class="w-full p-2 focus:outline-none border rounded">
                    </label>
                    <label class="relative ">
                        <input type="text" v-model="credentails.password" placeholder="Password" class="w-full p-2 focus:outline-none border rounded">
                    </label>
                    <div class="flex justify-between items-center">
                        <RouterLink :to="{name: 'login'}" class="text-sm text-blue-700 border-b-2 border-blue-700">login</RouterLink>
                        <button
                            class="flex ml-auto px-12 py-1 my-4 text-base rounded bg-zinc-600 text-white capitalize">register</button>
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
import Users from '@/services/Users';
import { useUser } from '@/pinia-store/user';

const { saveUser } = useUser();

const credentails = reactive({
    name: null,
    lastname: null,
    email: null,
    password: null
});
const router = useRouter()

function register() {
    console.log(credentails)
    Users.register(credentails)
    .then((res) => {
        console.log(res);
        useUser().$patch({
            user: res.data.user,
            isLogin: true
        });
        saveUser();
        router.push({name: 'dashboard'});
    })
    .catch((err) => {
        console.log(err);
    })
}



</script>

<style scoped>
.register {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}

.img {
    transform: scaleX(-1);
}
</style>
