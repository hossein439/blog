<template>
    <form action="" @submit.prevent="updateUser()" enctype="multipart/form-data">
        <div class="p-6 rounded-md dark:bg-[#171717] bg-white border dark:border-zinc-800 border-zinc-200 dark:text-white text-zinc-800">
            <p class="text-2xl mb-7">User</p>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Name
                </label>
                <input v-model="user.name" type="text"
                    class="p-2 dark:bg-black border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
            </div>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Email
                </label>
                <input v-model="user.email" type="email"
                    class="p-2 dark:bg-black border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
            </div>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Username
                </label>
                <input v-model="user.username" type="text"
                    class="p-2 dark:bg-black border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
            </div>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Profile image
                </label>

                <div class="flex items-center gap-x-4 p-1">
                    <div class="h-[88px] w-[88px]">
                        <img v-show="user.avatar" class="h-full w-full object-cover border border-zinc-700"
                            :src="[user.avatar ? `${require('../../../uploads/' + user.avatar)}` : '']" alt="">
                        <img v-show="!user.avatar" ref="previewAvatar" class="h-full w-full object-cover border border-zinc-700"
                            src="@/assets/images/account.png" alt="">
                    </div>
                    <button class="relative w-[8em] p-[1em] rounded-md inline-block text-sm cursor-pointer bg-indigo-800 hover:bg-indigo-600 transition-all">
                        <input type="file" @change="previewImage($event)"
                            class="absolute inset-0 z-10 opacity-0 cursor-pointer" name="avatar">
                        <span
                            class="absolute inset-0 top-1 cursor-pointer text-white">Change image</span>
                    </button>

                </div>
            </div>
        </div>

        <div class="my-6 p-6 rounded-md dark:bg-[#171717] bg-white border dark:border-zinc-800 border-zinc-200 dark:text-white text-zinc-800">
            <p class="text-2xl mb-7">Basic</p>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Location
                </label>
                <input v-model="user.location" placeholder="Hailfax, Nova Scotia" type="text"
                    class="dark:placeholder:text-zinc-700 p-2 dark:bg-black border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
            </div>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Bio
                </label>
                <input v-model="user.bio" placeholder="A short bio" type="text"
                    class="dark:placeholder:text-zinc-700 p-2 dark:bg-black border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
            </div>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Work
                </label>
                <input v-model="user.work" placeholder="What do you do ?" type="text"
                    class="dark:placeholder:text-zinc-700 p-2 dark:bg-black border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
            </div>
            <div class="flex flex-col mb-5">
                <label for="" class="pb-2">
                    Education
                </label>
                <input v-model="user.education" placeholder="Where did you go to school ?" type="text"
                    class="dark:placeholder:text-zinc-700 p-2 dark:bg-black border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
            </div>
        </div>

        <div class="p-6 my-6 rounded-md dark:bg-[#171717] bg-white border dark:border-zinc-800 border-zinc-200">
            <button class="py-2 px-3 w-full capitalize rounded-md bg-indigo-800 dark:text-white text-white">save profile information</button>
        </div>
    </form>



</template>

<script setup>
import { reactive, ref } from 'vue';
import { useUser } from '@/pinia-store/user';
import { storeToRefs } from 'pinia';
import Users from '@/services/Users';

const { saveUser } = useUser();
const { userJson } = storeToRefs(useUser());
const { _id: id } = userJson.value;
let previewAvatar = ref();
let isShowPreview = ref(true)
let avatarImage = ref();

let user = reactive({
    name: null,
    username: null,
    email: null,
    location: null,
    bio: null,
    work: null,
    education: null,
    avatar: null
});

user = userJson.value;
console.log(Boolean(user.avatar));
function previewImage(e) {
    const input = e.currentTarget.files[0];
    avatarImage.value = input;
    previewAvatar.value.src = URL.createObjectURL(input)
    isShowPreview.value = false;
}

function updateUser() {
    const formData = new FormData();
    console.log(user.avatar);
    formData.append('name', user.name === 'undefined' || user.name === null ? '' : user.name);
    formData.append('username', user.username === 'undefined' || user.username === null ? '' : user.username);
    formData.append('email', user.email === 'undefined' || user.email === null ? '' : user.email);
    formData.append('avatar', avatarImage.value ? avatarImage.value : user.avatar);
    formData.append('location', user.location === 'undefined' || user.location === null ? '' : user.location);
    formData.append('bio', user.bio === 'undefined' || user.bio === null ? '' : user.bio);
    formData.append('work', user.work === 'undefined' || user.work === null ? '' : user.work);
    formData.append('education', user.education === 'undefined' || user.education === null ? '' : user.education);

    Users.update({ id }, formData).then(res => {
        useUser().$patch({
            user: res.data,
            isLogin: true
        });
        saveUser();
        location.reload();
    }).catch(err => {
        console.log(err);
    })
}

</script>
