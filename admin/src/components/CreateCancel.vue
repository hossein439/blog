<template>
    <div class="flex justify-between">
        <RouterLink :to="{name: propsCreateCancel.link}" class="bg-blue-600 px-3 py-1 rounded capitalize">{{propsCreateCancel.cancelText}}</RouterLink>
        <button class="bg-gray-500 px-3 py-1 rounded capitalize" type="submit">{{propsCreateCancel.createText}}</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const propsCreateCancel = defineProps({
    link: String,
    cancelText: String,
    createText: String,
})
</script>