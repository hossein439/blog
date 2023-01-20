<template>
    <div class="flex flex-wrap justify-between items-center">
        <p class="text-3xl capitalize">{{ propsTableHead.title }}</p>
        <RouterLink :to="{name: propsTableHead.link}" class=" py-1 px-2 capitalize bg-gray-500 rounded hover:opacity-90 transition-all">{{ propsTableHead.textBtn }}</RouterLink>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const propsTableHead = defineProps({
    link: String,
    title: String,
    textBtn: String
});

</script>