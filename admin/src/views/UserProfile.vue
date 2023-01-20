<template>
    <div class="py-5">
        <div class="">
            <div class="w-4/5 mx-auto relative dark:bg-zinc-800 bg-white mt-12 rounded-lg">
                <div class="w-full mx-auto relative -top-[2.7em] ">
                    <img v-if="!userJson?.avatar" class="mx-auto rounded-full border-[5px] dark:border-black border-[#f5f5f5] bg-black p-5"
                        src="@/assets/images/account.png" alt="">
                    <img v-else class="h-[100p] w-[100px] mx-auto rounded-full border-[5px] dark:border-black border-[#f5f5f5] bg-black" :src="`${require('../../../uploads/' + userJson?.avatar)}`" alt="">
                </div>
                <div class="absolute right-6 top-7">
                    <RouterLink :to="{ name: 'profile' }" class="py-2 px-4 capitalize rounded bg-indigo-600 text-white">Edit
                        Profile</RouterLink>
                </div>
                <div class="text-center">
                    <p class="text-3xl dark:text-white capitalize font-bold">{{ userJson?.name }}</p>
                    <p class="py-4">{{ userJson?.bio }}</p>
                </div>
                <div class="flex justify-center items-center pb-8">
                    <svg fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        role="img" aria-labelledby="a4hl9l3wuoow33ueox1hbtbr5h7cpm31">
                        <title id="a4hl9l3wuoow33ueox1hbtbr5h7cpm31">Joined</title>
                        <path
                            d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 012.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.36a4.025 4.025 0 01-.972-2.182l-.022-.253L2 14v-1a3 3 0 012.824-2.995L5 10l1-.001V6h2zm11 6H5a1 1 0 00-.993.883L4 13v.971l.003.147a2 2 0 003.303 1.4c.363-.312.602-.744.674-1.218l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 003.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012.282a2 2 0 003.99 0L20 14v-1a1 1 0 00-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 11-2.898-.776C5.85 2.002 7 2.5 7 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C10.85 2.002 12 2.5 12 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C15.85 2.002 17 2.5 17 1z">
                        </path>
                    </svg>
                    <p class="px-3 text-sm text-zinc-400">Joined us on {{ moment(userJson?.createdAt).format("MMM Do, YYYY") }}</p>
                    <svg fill="#a3a3a3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        role="img" aria-labelledby="akqol8lvlf2om24pq65wzni3og5m0wrr" class="crayons-icon shrink-0">
                        <title id="akqol8lvlf2om24pq65wzni3og5m0wrr">github website</title>
                        <path
                            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z">
                        </path>
                    </svg>
                </div>

                <div class="flex justify-around p-6 border-[#a3a3a3] border-t">
                    <div class="text-center">
                        <p class="text-sm capitalize font-light text-zinc-400">Education</p>
                        <p class="text-base capitalize">{{ userJson?.education }}</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm capitalize font-light text-zinc-400">work</p>
                        <p class="text-base capitalize">{{userJson?.work}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUser } from '@/pinia-store/user';
import { storeToRefs } from 'pinia';
import moment from 'moment'

const { userJson } = storeToRefs(useUser());
console.log(userJson);

</script>