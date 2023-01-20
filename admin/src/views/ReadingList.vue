<template>
    <div>
        <div>
            <div class="flex justify-between items-center">
                <p class="text-3xl font-bold dark:text-white">Reading list ({{ readingList.length }})</p>
                <div>
                    <input class=" p-2 border dark:border-zinc-700 dark:text-white transition-all hover:outline-none focus:outline-none focus:outline-transparent hover:outline-transparent rounded-md dark:bg-black placeholder:text-zinc-700" type="text"
                        placeholder="Search...">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-10 gap-x-5">
            <div class="col-span-2">
                <ul class="flex flex-col dark:text-white text-zinc-700">
                    <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-500/30 hover:text-indigo-900 rounded">
                        <span>posts</span>
                        <!-- <span>{{ userPosts.length }}</span> -->
                    </li>
                    <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-500/30 hover:text-indigo-900 rounded">
                        <span>series</span>
                        <span>0</span>
                    </li>
                    <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-500/30 hover:text-indigo-900 rounded">
                        <span>followers</span>
                        <span>0</span>
                    </li>
                    <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-500/30 hover:text-indigo-900 rounded">
                        <span>following tags</span>
                        <span>0</span>
                    </li>
                    <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-500/30 hover:text-indigo-900 rounded">
                        <span>following users</span>
                        <span>0</span>
                    </li>
                    <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-500/30 hover:text-indigo-900 rounded">
                        <span>following organizations</span>
                        <span>0</span>
                    </li>
                    <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:text-indigo-100 hover:bg-indigo-500/30 hover:text-indigo-900 rounded">
                        <span>following podcasts</span>
                        <span>0</span>
                    </li>
                </ul>
            </div>
            <div class="col-span-8">
                <div>
                    <p class="text-2xl mb-5">Posts</p>
                    <div class="">
                        <div v-if="loadReadingList">
                            <ul class="dark:border-zinc-600 dark:bg-zinc-800 bg-white border rounded-lg">
                                <li v-for="post in readingList" :key="post"
                                    class="grid grid-cols-12 justify-between items-center relative my-4 px-2 py-2 transition-all">

                                    <div class="col-span-1">
                                        <img v-if="!post.author" class="w-10 h-10 mx-auto rounded-full dark:bg-black border p-1"
                                            src="@/assets/images/account.png" alt="">
                                        <img v-else :src="`${require('../../../uploads/' + post.author?.avatar)}`"
                                            class="w-10 h-10 mx-auto rounded-full hello dark:bg-black border p-1" alt="">
                                    </div>
                                    <div class="col-span-11 flex justify-start">
                                        <div class="flex flex-col">
                                            <RouterLink :to="{ name: 'posts', params: { id: post._id } }"
                                                class="">
                                                <p class="text-xl font-bold dark:text-zinc-200 dark:hover:text-indigo-400 text-zinc-700 hover:text-indigo-800 capitalize transition-all">{{ post.title }}</p>
                                            </RouterLink>
                                            <div class="flex gap-x-4 text-sm dark:text-zinc-400 text-zinc-800">
                                                <p class="capitalize">{{ post.author?.name }}</p>
                                                <p>{{ moment(post.createdAt).format('MMM Do') }}</p>
                                                <ul class="flex gap-x-2">
                                                    <li v-for="tag in post.tags" :key="tag">
                                                        #{{ tag }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <LoaderView v-else></LoaderView>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import { useUser } from '@/pinia-store/user';
import { storeToRefs } from 'pinia';
import Users from '@/services/Users';
import LoaderView from '@/components/LoaderView.vue';

const router = useRouter();
const { userJson } = storeToRefs(useUser());
const { _id: id } = userJson.value
let readingList = ref([]);
let loadReadingList = ref(false);

Users.readingList({ id }).then(res => {
    console.log(res.data);
    loadReadingList.value = true;
    readingList.value = res.data;
    console.log(readingList.value);
}).catch(err => {
    router.push({ name: 'login' });
    console.log(err);
})


</script>

<style scoped>

</style>