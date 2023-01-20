<template>
    <select v-model="locales">
        <option v-for="locale in locales" :key="locale" :value="locale">
            {{ locale }}
        </option>
    </select>
</template>
  
<script setup>
// import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

// const locales = ref(["fr", "en"]) ;
const { locale:locales } = useI18n(); 

console.log(locales.value);
</script>