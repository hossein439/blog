<template>
    <div class="min-h-screen flex justify-center items-center flex-col">
        <p class="text-2xl py-4 dark:text-white">
            Are you sure you want to sign out?
        </p>
        <button @click="signOut()" class="bg-indigo-700 text-white hover:opacity-90 transition-all py-3 px-5 rounded-md">
            Yes, sign out
        </button>
    </div>
</template>

<script setup>
import { useUser } from '@/pinia-store/user';
import { storeToRefs } from 'pinia';
import Users from '@/services/Users';
import { useRouter } from 'vue-router';

const router = useRouter();
const { userJson } = storeToRefs(useUser());

function signOut() {
    Users.signout(userJson.value._id)
    .then(res => {
        console.log(res);
        router.push({name: 'home'});
        window.location.reload();
    })
    .catch(err => {
        console.log(err);
    });
}

</script>