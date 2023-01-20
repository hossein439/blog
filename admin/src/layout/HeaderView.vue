<template>
    <div v-if="!['login'].includes(route.name)"
        class="flex justify-between bg-white dark:bg-[#171717] py-2 xs:px-2 xl:px-14 shadow-lg border-b border-1 dark:border-0">
        <div class="flex xs:items-center lg:items-stretch gap-x-4">
            <button @click="openMenu()" class="lg:hidden">
                <svg width="25px" height="25px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#fff" />
                    <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#fff" />
                    <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#fff" />
                </svg>
            </button>
            <div class="relative">
                <RouterLink to="/" class="absolute inset-0"></RouterLink>
                <img class="h-[40px]" src="@/assets/images/dev.png" alt="">
                
            </div>
            <input type="search" placeholder="search..."
                class="xs:hidden lg:inline px-3 font-thin rounded-md dark:bg-black border dark:border-zinc-700 border-zinc-400 capitalize focus:outline-0 focus:border-indigo-500 w-[25em]">
        </div>
        <div v-if="userJson?.name" class="flex items-center gap-x-4">
            <RouterLink :to="{ name: 'create-post' }"
                class="xs:hidden lg:inline-block px-4 py-1.5 text-indigo-500 rounded-md capitalize border border-indigo-500 dark:hover:bg-indigo-900 hover:bg-indigo-600 dark:hover:border-indigo-900 hover:border-indigo-600 hover:text-white transition-all">
                create post</RouterLink>
            <div class="p-2 rounded-md cursor-pointer transition-all dark:hover:bg-indigo-900 hover:bg-indigo-200 dark:text-white dark:hover:text-indigo-200 text-black hover:text-indigo-900">
                <!-- <img src="@/assets/images/bell.png" class="" alt=""> -->
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                    class="crayons-icon">
                    <title>Notifications</title>
                    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>

            </div>
            <div @click="openAdmin()"
                class="p-1 dark:hover:bg-indigo-900 hover:bg-indigo-200 transition-all rounded-full cursor-pointer">
                <img v-if="!userJson.avatar" src="@/assets/images/account.png"
                    class="w-8 h-8 rounded-full border border-gray-700" alt="">
                <img v-else :src="`${require('../../../uploads/' + userJson.avatar)}`"
                    class="w-8 h-8 object-contain rounded-full border border-gray-700" alt="">

            </div>
            <Transition>
                <div class="fixed z-50 top-[4em] right-[3.5em] lg:w-[250px] py-1 px-1 dark:text-gray-300 text-zinc-600 border dark:border-zinc-800 border-zinc-300 rounded dark:bg-[#171717] bg-white"
                    v-show="isOpenAdmin">
                    <ul class="capitalize">
                        <li class="menuAccount m-2 border-b-[1px] border-[#3d3d3d] ">
                            <RouterLink :to="{ name: 'user-profile' }"
                                class="flex flex-col dark:hover:bg-indigo-900 dark:hover:text-indigo-200 hover:bg-indigo-200 hover:text-indigo-900 rounded mb-2 p-2">
                                <span>{{ userJson.name }}</span>
                                <span class="text-gray-500 text-sm font-light">@{{ userJson.username }}</span>
                            </RouterLink>
                        </li>
                        <li class="menuAccount m-2">
                            <RouterLink :to="{ name: 'dashboard' }"
                                class="flex flex-col dark:hover:bg-indigo-900 dark:hover:text-indigo-200 hover:bg-indigo-200 hover:text-indigo-900 rounded p-2 mb-2">
                                <span>dashboard</span>
                            </RouterLink>
                        </li>
                        <li class="menuAccount m-2">
                            <RouterLink :to="{ name: 'create-post' }"
                                class="flex flex-col dark:hover:bg-indigo-900 dark:hover:text-indigo-200 hover:bg-indigo-200 hover:text-indigo-900 rounded p-2 mb-2">
                                <span>create post</span>
                            </RouterLink>
                        </li>
                        <li class="menuAccount m-2">
                            <RouterLink :to="{ name: 'reading-list' }"
                                class="flex flex-col dark:hover:bg-indigo-900 dark:hover:text-indigo-200 hover:bg-indigo-200 hover:text-indigo-900 rounded p-2 mb-2">
                                <span>reading list</span>
                            </RouterLink>
                        </li>
                        <li class="menuAccount m-2">
                            <RouterLink :to="{ name: 'profile' }"
                                class="flex flex-col dark:hover:bg-indigo-900 dark:hover:text-indigo-200 hover:bg-indigo-200 hover:text-indigo-900 rounded p-2 mb-2">
                                <span>settings</span>
                            </RouterLink>
                        </li>
                        <li class="menuAccount m-2 border-t-[1px] border-[#3d3d3d]">
                            <RouterLink :to="{ name: 'signout' }"
                                class="flex flex-col dark:hover:bg-indigo-900 dark:hover:text-indigo-200 hover:bg-indigo-200 hover:text-indigo-900 rounded mt-2 p-2">
                                <span>sign out</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
        <div v-else>
            <div class="flex">
                <RouterLink :to="{ name: 'login' }"
                    class="px-6 py-1.5 mr-2 capitalize hover:bg-indigo-200 hover:text-indigo-900 rounded-md transition-all">
                    log in
                </RouterLink>
                <RouterLink :to="{ name: 'register' }"
                    class="xs:hidden lg:inline-block px-4 py-1.5 text-indigo-500 rounded-md capitalize border border-indigo-500 hover:bg-indigo-900 hover:border-indigo-900 hover:text-white transition-all">
                    create account</RouterLink>

            </div>
        </div>
    </div>

    <Transition duration="550" name="slide">
        <div v-show="isOpen" class="fixed inset-0 bg-[#ffffff69]">
            <div class="absolute inset-y-0 left-0 w-[90%] bg-[#171717] p-4">
                <div class="flex justify-between items-center">
                    <img class="h-[40px]" src="@/assets/images/dev.png" alt="" />
                    <button @click="closeMenu()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <path
                                d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                                fill="gray" />
                        </svg>
                    </button>
                </div>
                <ul class="pt-6">
                    <li class="flex px-4 py-2 bg-indigo-900 rounded-md capitalize my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 330.242 330.242"
                            style="enable-background:new 0 0 330.242 330.242;" xml:space="preserve">
                            <path
                                d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999  c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314  c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053  v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5  c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <a class="pl-3" href="#">home</a>
                    </li>

                    <li class="flex px-4 py-2 rounded-md capitalize my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            id="Layer_1" x="0px" y="0px" width="22px" viewBox="0 0 64 64"
                            style="enable-background:new 0 0 64 64;" xml:space="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M63.707,25.293L58,19.586V5c0-0.553-0.447-1-1-1H32H7C6.447,4,6,4.447,6,5v14.586l-5.707,5.707C0.105,25.48,0,25.734,0,26    v38h2V26.414l4-4V25c0,0.553,0.447,1,1,1h11.873c-0.444,1.724-2.013,3-3.873,3h-4c-0.553,0-1,0.447-1,1c0,3.309-2.691,6-6,6v2    c0.691,0,1.36-0.095,2-0.26V49v4c0,0.553,0.447,1,1,1h7v10h2V54h32v10h2V54h7c0.553,0,1-0.447,1-1v-4V37.74    c0.64,0.166,1.309,0.26,2,0.26v-2c-3.309,0-6-2.691-6-6c0-0.553-0.447-1-1-1h-4c-1.86,0-3.429-1.276-3.873-3H57    c0.553,0,1-0.447,1-1v-2.586l4,4V64h2V26C64,25.734,63.894,25.48,63.707,25.293z M8,36.919c2.114-1.227,3.621-3.389,3.938-5.919    H15c3.309,0,6-2.691,6-6c0-0.553-0.447-1-1-1H8v-2V6h23v42H8V36.919z M56,52H8v-2h24h24V52z M56,22v2H44c-0.553,0-1,0.447-1,1    c0,3.309,2.691,6,6,6h3.062c0.317,2.53,1.824,4.692,3.938,5.919V48H33V6h23V22z" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path
                                        d="M21,8H11c-0.553,0-1,0.447-1,1v8c0,0.553,0.447,1,1,1h10c0.553,0,1-0.447,1-1V9C22,8.447,21.553,8,21,8z M20,16h-8v-6h8    V16z" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path
                                        d="M46,36H36c-0.553,0-1,0.447-1,1v8c0,0.553,0.447,1,1,1h10c0.553,0,1-0.447,1-1v-8C47,36.447,46.553,36,46,36z M45,44h-8    v-6h8V44z" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="24" y="8" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="24" y="12" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="24" y="16" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" y="16" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="42" y="16" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="49" y="16" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="10" y="20" width="19" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" y="20" width="19" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="23" y="24" width="6" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="22" y="28" width="7" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="18" y="32" width="11" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" y="24" width="6" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" y="28" width="7" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" y="32" width="11" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="12" y="36" width="17" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="10" y="40" width="19" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="10" y="44" width="19" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="49" y="36" width="4" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="49" y="40" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="49" y="44" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" y="12" width="9" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="46" y="12" width="8" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" y="8" width="5" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="42" y="8" width="12" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="48" width="2" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="52" width="2" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="56" width="2" height="2" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect x="35" width="11" height="2" />
                                </g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <a class="pl-3" href="#">reading list</a>
                    </li>
                </ul>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
// import Users from '@/services/Users';
import { useUser } from '@/pinia-store/user';
import { storeToRefs } from 'pinia';

const { userJson } = storeToRefs(useUser());
// const router = useRouter();
const route = useRoute();
// const isUserExist = ref(false);
// const user = ref({});
let isOpen = ref(false);
let isOpenAdmin = ref(false);

function openMenu() {
    isOpen.value = true;
}
function closeMenu() {
    isOpen.value = false;
}

function openAdmin() {
    isOpenAdmin.value = !isOpenAdmin.value;
}

// Users.readProfile()
//     .then((res) => {
//         isUserExist.value = true;
//         user.value = res.data;
//     }).catch(() => {
//         isUserExist.value = false
//         router.push({ name: 'home' });
//     })


onMounted(() => {
    window.addEventListener('scroll', () => {
        isOpenAdmin.value = false;
    });
});

onUpdated(() => {
    document.querySelectorAll('.menuAccount').forEach((element) => {
        element.addEventListener('click', () => { isOpenAdmin.value = false });
    })
})
</script>


<style scoped>
html:has(.dark) .router-link-active {
    background-color: #312e81b3;
}
.router-link-active {
    background-color: #c4d2ff;
    color: #5c5fa7;
}

.slide-leave-active,
.slide-enter-active {
    transition: .3s;
}

.slide-enter {
    transform: translate(0, 330px);
}

.slide-leave-to {
    transform: translate(-100%, 0);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>