<template>
    <div v-if="loadSinglePost" class="grid grid-cols-12">
        <div class="col-span-1">
            <div class="w-[3em] flex flex-col items-center fixed left-[5rem] top-[6rem]">
                <div class="flex flex-col justify-center items-center mt-5">
                    <div v-if="isLiked(singlePost)" class="text-center dark:text-white text-zinc-600">
                        <button @click="savedLike(singlePost._id)"
                        class="border-2 border-transparent rounded-full p-[5px] transition-all hover:bg-red-500/20 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                                fill="currentColor" aria-hidden="true" class="crayons-icon">
                                <path
                                    d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z">
                                </path>
                            </svg>
                        </button>
                        <div class="py-1 dark:text-white">{{ singlePost.likedBy.length }}</div>
                    </div>
                    <div v-else class="text-red-600 text-center">
                        <button @click="removeLike(singlePost._id)"
                            class="border-2 border-red-600 rounded-full p-[5px] transition-all bg-red-500/20">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" role="img" aria-hidden="true" class="crayons-icon">
                                <path
                                    d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z">
                                </path>
                            </svg>
                        </button>
                        <div class="py-1">{{ singlePost.likedBy.length }}</div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center mt-5">
                    <div class="text-center dark:text-white text-zinc-600">
                        <button class="border-2 border-transparent rounded-full p-[5px] transition-all hover:bg-orange-900/20 hover:text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                                fill="currentColor" aria-hidden="true" class="crayons-icon">
                                <path
                                    d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z">
                                </path>
                            </svg>
                        </button>
                        <div class="py-1 dark:text-white">23</div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center mt-5 transition-all">
                    <div v-if="isBooked(singlePost)" class="dark:text-white text-zinc-600 text-center">
                        <button @click="savedList(singlePost._id)"
                            class="border-2 border-transparent rounded-full p-[5px] transition-all hover:bg-indigo-900/20 hover:text-indigo-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                                fill="currentColor" aria-hidden="true" class="crayons-icon">
                                <path
                                    d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z">
                                </path>
                            </svg>
                        </button>
                        <div class="py-1">{{ singlePost.bookedBy.length }}</div>
                    </div>
                    <div v-else class="text-indigo-700 text-center">
                        <button  @click="removeReadingList(singlePost._id)"
                            class=" border-2 rounded-full p-[5px] transition-all bg-indigo-900/20 border-indigo-700">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" role="img" aria-hidden="true" class="crayons-icon">
                                <path
                                    d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z">
                                </path>
                            </svg>
                        </button>
                        <div class="py-1">{{ singlePost.bookedBy.length }}</div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-span-8">
            <div>
                <div class="relative mb-2 dark:bg-[#171717] bg-white rounded-b dark:shadow-md shadow-sm dark:border-[1px] rounded border-zinc-800">
                    <div class="h-[270px] w-full">
                        <img class="rounded-t inline-block w-full h-full object-cover"
                            :src="`${require('../../../uploads/' + singlePost.coverImage)}`" alt="">
                    </div>
                    <div class="p-5">
                        <div class="flex items-center">
                            <img v-if="!singlePost.author?.avatar" class="w-10 h-10 rounded-full"
                                src="@/assets/images/account.png" alt="">
                            <img v-else class="w-10 h-10 rounded-full border border-zinc-700"
                                :src="`${require('../../../uploads/' + singlePost.author?.avatar)}`" alt="">
                            <div class="flex flex-col text-xs ml-2">
                                <span class="text-zinc-300">{{ singlePost.author?.name }} {{ singlePost.author?.lastname
                                }}</span>
                                <span class="text-zinc-500">Posted on {{ moment(singlePost.createdAt).format('MMM Do')
                                }}</span>
                            </div>
                        </div>
                        <p class="text-2xl my-4 font-bold dark:text-white">
                            {{ singlePost.title }}
                        </p>
                        <ul class="flex gap-3 text-sm text-zinc-500">
                            <li v-for="tag in singlePost.tags" :key="tag">
                                #{{ tag }}
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 dark:text-white" v-html="singlePost.body"></div>
                </div>
            </div>

        </div>
        <div class="col-span-3 ml-4">
            <div class="dark:bg-[#171717] dark:border-none bg-white border rounded-md mb-4">
                <div class="flex justify-between p-4 border-b dark:border-black">
                    <span class="text-xl dark:text-white">Listings</span>
                    <span class="text-sm text-indigo-400">See all</span>
                </div>
                <div class="flex flex-col p-4 border-b dark:border-black dark:text-zinc-300">
                    <span>Neverinstall: Year in Review, 2022</span>
                    <span class="text-sm pt-2">events</span>
                </div>
                <div class="flex flex-col p-4 border-b dark:border-black dark:text-zinc-300">
                    <span>I am a fresh graduate in Computer science engineering degree </span>
                    <span class="text-sm pt-2">events</span>
                </div>
                <div class="flex flex-col p-4 border-b dark:border-black dark:text-zinc-300">
                    <span>Flutter App Development Company and Services</span>
                    <span class="text-sm pt-2">events</span>
                </div>
            </div>
            <div class="dark:bg-[#171717] dark:border-none bg-white border rounded-md mb-4">
                <div class="flex justify-between p-4 border-b dark:border-black">
                    <span class="text-xl dark:text-white">#help</span>
                </div>
                <div class="flex flex-col p-4 border-b dark:border-black dark:text-zinc-300">
                    <span> How to run a function in background?</span>
                    <span class="text-sm pt-2">1 Comment</span>
                </div>
                <div class="flex flex-col p-4 border-b dark:border-black dark:text-zinc-300">
                    <span>Neverinstall: Year in Review, 2022</span>
                    <span class="text-sm pt-2">events</span>
                </div>
                <div class="flex flex-col p-4 border-b dark:border-black dark:text-zinc-300">
                    <span>Neverinstall: Year in Review, 2022</span>
                    <span class="text-sm pt-2">events</span>
                </div>
                <div class="flex flex-col p-4 border-b dark:border-black dark:text-zinc-300">
                    <span>Neverinstall: Year in Review, 2022</span>
                    <span class="text-sm pt-2">events</span>
                </div>
            </div>
        </div>
    </div>
    <LoaderView v-else></LoaderView>
</template>

<script setup>
import Users from '@/services/Users';
import { useUser } from '@/pinia-store/user';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import Post from '@/services/Post';
import { ref } from 'vue';
import LoaderView from '@/components/LoaderView.vue';
import moment from 'moment';

const { userJson } = storeToRefs(useUser());
const { _id: id } = userJson.value;
const route = useRoute();
let singlePost = ref({});
let loadSinglePost = ref(false);

function readSinglePost(id) {
    Post.read({
        id: id
    }).then(res => {
        console.log(res);
        loadSinglePost.value = true;
        singlePost.value = res.data;
        console.log(singlePost)
    }).catch(err => {
        console.log(err)
    })
}

readSinglePost(route.params.id)

function isBooked(post) {
    return !post.bookedBy.some(item => item === id)
}

function savedList(postId) {
    Users.addReadingList({
        id: id,
    }, { readingList: postId }).then(res => {
        console.log(res);
        readSinglePost(route.params.id)
    }).catch(err => {
        console.log(err);
    });
}

function removeReadingList(postId) {
    Users.removeReadingList({
        id: id
    }, { readingList: postId }).then(res => {
        console.log(res);
        readSinglePost(route.params.id)
    }).catch(err => {
        console.log(err);
    })
}



function isLiked(post) {
    console.log(id);
    return !post.likedBy.some(item => item === id)
}

function savedLike(postId) {
    console.log(id);
    console.log(postId);
    Users.addLike({
        id: id,
    }, { likedBy: postId }).then(res => {
        console.log(res);
        readSinglePost(route.params.id)
    }).catch(err => {
        console.log(err);
    });
}

function removeLike(postId) {
    console.log(id);
    Users.removeLike({
        id: id
    }, { likedBy: postId }).then(res => {
        console.log(res);
        readSinglePost(route.params.id)
    }).catch(err => {
        console.log(err);
    })
}
</script>