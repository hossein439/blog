<template>
    <div ref="sidebar" :class="widthSideBar"
        class="h-screen fixed z-10 top-0 left-0 overflow-x-hidden p-5 text-whtie bg-[#232227] transition-all">
        <button :class="[isOpen ? 'pr-4' : 'left-0']" @click="configMenu.toogleMenu($event)"
            class="absolute top-0 right-0 text-sm py-4">
            <div class="close-sidebar">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </button>
        <div class="flex flex-col items-center">
            <h1 v-show="isOpen" class="text-3xl font-bold text-center capitalize">{{ user.name }}</h1>
            <img v-if="!user.avatar" :class="[isOpen ? '' : 'mt-10']" src="../../public/images/man-64.png" class="inline-block my-3" alt="">
            <img v-else :class="[isOpen ? '' : 'mt-10']" class="inline-block my-3 rounded-full" width="70" height="70" :src="`data:image;base64, ${user.avatar}`"  alt="" />
            <h2 v-show="isOpen" class="text-xl font-semibold capitalize"> {{ user.lastname }} </h2>
            <div class="flex">
                <p v-show="isOpen" v-for="role in user.roles" :key="role" class="mr-2 text-sm text-gray-400"> {{ role }} </p>
            </div>
        </div>
        <div class="mt-6">
            <ul :class="[isOpen ? 'w-[10em]' : 'w-auto']" class="grid grid-cols-1 flex-col mx-auto">
                
                <li :class="[isOpen ? 'grid-cols-3' : 'grid-cols-1']"
                    class="grid w-full justify-center relative mx-auto py-2 px-1 rounded-lg transition-all hover:bg-white hover:text-black cursor-pointer my-1">
                    <img class="h-6 w-6 mx-auto" src="../../public/images/dashboard.png" alt="" srcset="">
                    <RouterLink :to="{name:'dashboard'}" class="absolute inset-0"></RouterLink>
                    <span v-show="isOpen">Dashboard</span>
                </li>

                <li :class="[isOpen ? 'grid-cols-3' : 'grid-cols-1']"
                    class="grid w-full justify-center relative mx-auto py-2 px-1 rounded-lg transition-all hover:bg-white hover:text-black cursor-pointer my-1">
                    <img class="h-6 w-6 mx-auto" src="../../public/images/account.png" alt="" srcset="">
                    <RouterLink :to="{name: 'index-user'}" class="absolute inset-0"></RouterLink>
                    <span v-show="isOpen">Users</span>
                </li>

                <li :class="[isOpen ? 'grid-cols-3' : 'grid-cols-1']"
                    class="grid w-full justify-center relative mx-auto py-2 px-1 rounded-lg transition-all hover:bg-white hover:text-black cursor-pointer my-1">
                    <img class="h-6 w-6 mx-auto" src="../../public/images/add-post.png" alt="" srcset="">
                    <RouterLink :to="{name: 'index-blog'}" class="absolute inset-0"></RouterLink>
                    <span v-show="isOpen">Blogs</span>
                </li>

                <li :class="[isOpen ? 'grid-cols-3' : 'grid-cols-1']"
                    class="grid w-full justify-center relative mx-auto py-2 px-1 rounded-lg transition-all hover:bg-white hover:text-black cursor-pointer my-1">
                    <img class="h-6 w-6 mx-auto" src="../../public/images/menu.png" alt="" srcset="">
                    <RouterLink :to="{name: 'index-category'}" class="absolute inset-0"></RouterLink>
                    <span v-show="isOpen">Categories</span>
                </li>

                <li :class="[isOpen ? 'grid-cols-3' : 'grid-cols-1']"
                    class="grid w-full justify-center relative mx-auto py-2 px-1 rounded-lg transition-all hover:bg-white hover:text-black cursor-pointer my-1">
                    <img class="h-6 w-6 mx-auto"
                        src="../../public/images/chat-comment-oval-speech-bubble-with-text-lines.png" alt="" srcset="">
                        <RouterLink to="#" class="absolute inset-0"></RouterLink>
                        <span v-show="isOpen">Comments</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'

import { useMenu } from '@/pinia-store/toggleMenu';
import Users from '@/services/Users';

const configMenu = useMenu();
const {isOpen, widthSideBar} = storeToRefs(useMenu())
const user = ref({});

Users.readProfile()
.then((res) => {
    user.value = res.data;
}).catch((err) => {
    console.log(err);
})


</script>

<style scoped>
.close-sidebar {
    display: inline-block;
    cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
    transition: .5s;
    width: 20px;
    height: 2px;
    margin: 4px 0;
    background-color: #afaeb1;
}

.change .bar1 {
    transform: translate(0) rotate(0deg);
}

.change .bar2 {
    opacity: 1;
}

.change .bar3 {
    transform: translate(0px) rotate(0deg);
}

.bar1 {
    transform: translate(0, 6px) rotate(-225deg);
}

.bar2 {
    opacity: 0;
}

.bar3 {
    transform: translate(0, -6px) rotate(225deg);
}
</style>