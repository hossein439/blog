<template>

    <h1 class="text-3xl font-bold">Dashboard</h1>
    <div class="grid xl:grid-cols-4 my-4 gap-x-4">
        <div class="flex flex-col p-7 rounded-lg dark:bg-zinc-800 bg-white">
            <span class="text-2xl font-bold dark:text-white">0</span>
            <span class="dark:text-gray-300 text-gray-600">Total post reactions</span>
        </div>
        <div class="flex flex-col p-5 rounded-lg dark:bg-zinc-800 bg-white">
            <span class="text-2xl font-bold dark:text-white">500</span>
            <span class="dark:text-gray-300 text-gray-600">Total post views</span>
        </div>
        <div class="flex flex-col p-5 rounded-lg dark:bg-zinc-800 bg-white">
            <span class="text-2xl font-bold dark:text-white">0</span>
            <span class="dark:text-gray-300 text-gray-600">Listings created</span>
        </div>
        <div class="flex flex-col p-5 rounded-lg dark:bg-zinc-800 bg-white">
            <span class="text-2xl font-bold dark:text-white">0</span>
            <span class="dark:text-gray-300 text-gray-600">Credits available</span>
        </div>
    </div>
    <div class="grid grid-cols-10 gap-x-5">
        <div class="col-span-2">
            <ul class="flex flex-col dark:text-white text-gray-800">
                <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded transition-all">
                    <span>posts</span>
                    <span>{{ userPosts.length }}</span>
                </li>
                <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded transition-all">
                    <span>series</span>
                    <span>0</span>
                </li>
                <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded transition-all">
                    <span>followers</span>
                    <span>0</span>
                </li>
                <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded transition-all">
                    <span>following tags</span>
                    <span>0</span>
                </li>
                <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded transition-all">
                    <span>following users</span>
                    <span>0</span>
                </li>
                <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded transition-all">
                    <span>following organizations</span>
                    <span>0</span>
                </li>
                <li class="flex justify-between px-3 py-2 cursor-pointer dark:hover:bg-indigo-900 dark:hover:text-indigo-100 hover:bg-indigo-100 hover:text-indigo-800 rounded transition-all">
                    <span>following podcasts</span>
                    <span>0</span>
                </li>
            </ul>
        </div>
        <div class="col-span-8">
            <div>
                <p class="text-2xl mb-5">Posts</p>
                <div class="">
                    <div v-if="LoadUserPost">
                        <div>
                            <ul>
                                <li v-for="post in userPosts" :key="post"
                                    class="grid grid-cols-6 justify-between items-center relative my-4 px-4 py-3 border dark:border-zinc-600 dark:bg-zinc-800 bg-white dark:hover:bg-zinc-900 transition-all rounded-lg ">
                                    <!-- <RouterLink :to="{ name: 'edit-post', params: { id: post._id } }"
                                        class=""></RouterLink> -->
                                    <div class="col-span-3">
                                        <RouterLink :to="{ name: 'posts', params: { id: post._id } }">
                                            <p class="text-lg font-bold text-indigo-500 capitalize">
                                                {{ post.title }}
                                            </p>
                                        </RouterLink>
                                        <div class="flex text-sm font-thin">
                                            <p v-if="post.isPublished" class="">Published: {{ moment(post.createdAt).format('MMM Do') }}</p>
                                            <p v-else>Draft</p>
                                            <p class="px-5">Edited: </p>
                                        </div>
                                    </div>
                                    <div class="col-span-2 flex justify-center text-zinc-500">
                                        <div class="flex justify-between">
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" role="img"
                                                aria-labelledby="arf3fec3iwqx18vkteoib57slnnzk5se"
                                                class="crayons-icon mr-1">
                                                <title id="arf3fec3iwqx18vkteoib57slnnzk5se">Reactions</title>
                                                <path
                                                    d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                                </path>
                                            </svg>
                                            <span>{{ post.likedBy.length }}</span>
                                        </div>
                                        <div class="flex justify-between px-5 text-zinc-500">
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" role="img"
                                                aria-labelledby="a3sswtzvbqtnq22hrnhltovcz33t5tm1"
                                                class="crayons-icon mr-1">
                                                <title id="a3sswtzvbqtnq22hrnhltovcz33t5tm1">Comments</title>
                                                <path
                                                    d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                                </path>
                                            </svg>
                                            <span>10</span>
                                        </div>
                                    </div>
                                    <div class="col-span-1">
                                        <RouterLink class="w-[3em] mx-auto block text-center py-1 text-zinc-500 hover:bg-zinc-100 rounded transition-all"
                                            :to="{ name: 'edit-post', params: { id: post._id } }">
                                            Edit
                                        </RouterLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-else-if="userPosts.length === 0" class="flex flex-col justify-center items-center dark:bg-zinc-800 bg-white rounded-lg">
                        <div>
                            <img src="@/assets/images/coala.webp" class="py-12" alt="">
                        </div>
                        <p class="dark:text-white">This is where you can manage your posts, but you haven't written anything yet.</p>
                        <RouterLink :to="{name: 'create-post'}" class="py-2 px-5 rounded-md my-8 bg-indigo-600 text-white">Write your first post now</RouterLink>
                    </div>
                    <LoaderView v-else></LoaderView>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import Post from '@/services/Post';
import LoaderView from '@/components/LoaderView.vue';
import { useUser } from '@/pinia-store/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import moment from 'moment';

let LoadUserPost = ref(false);
let userPosts = ref([]);
    const { userJson } = storeToRefs(useUser());
    const { _id: id } = userJson.value;

Post.readUserPosts({
    id: id
}).then(res => {
    res.data.length === 0 ? LoadUserPost.value = false : LoadUserPost.value = true;
    userPosts.value = res.data;
    console.log(res);
}).catch(err => {
    console.log(err);
})

</script>