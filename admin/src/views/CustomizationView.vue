<template>
    <div class="dark:bg-[#171717] bg-white dark:border-none border rounded-md p-6">
        <p class="text-3xl mb-7 dark:text-white">Appearance</p>
        <span class="dark:text-white ">Site Theme</span>
        <div class="flex gap-x-4 my-4">
            <div class="p-1 rounded-[8px] dark:hover:bg-black hover:bg-zinc-100 transition-all relative">
                <div class="p-4 rounded-md border dark:border-zinc-700">
                    <input v-model="theme" id="darkTheme" class="px-2" type="radio" value="dark">
                    <span class="px-3 dark:text-white">Dark Theme</span>
                    <label class="absolute inset-0 cursor-pointer z-10" for="darkTheme"></label>
                    <div class="w-[160px] h-[85px] relative bg-[#0c1219] rounded-md border border-black mt-4 ml-4">
                        <div class="absolute top-0 left-0 right-0 h-[17px] bg-[#182938] rounded-t-md">
                            <div class="w-[50px] relative inset-y-0 mx-auto my-1 p-1 rounded-[1px] bg-[#404a54]">
                            </div>
                        </div>
                        <div class="grid grid-cols-10 absolute bottom-1 w-full gap-1 px-1 h-[68%] overflow-hidden">
                            <div class="col-span-2 h-full bg-[#182938]"></div>
                            <div class="col-span-6 h-full">
                                <div class="text-center bg-[#0c1219] leading-none">~ ~ ~</div>
                                <div class="bg-[#182938] h-[71%]"></div>
                            </div>
                            <div class="col-span-2 h-full bg-[#182938]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-1 rounded-[8px] dark:hover:bg-black hover:bg-zinc-100 transition-all relative">
                <div class="p-4 rounded-md border dark:border-zinc-700">
                    <input v-model="theme" id="lightTheme" class="px-2" type="radio" value="light">
                    <span class="px-3 dark:text-white">Light Theme</span>
                    <label class="absolute inset-0 cursor-pointer z-10" for="lightTheme"></label>
                    <div class="w-[160px] h-[85px] relative bg-[#f9f9fa] rounded-md border border-black mt-4 ml-4">
                        <div
                            class="absolute top-0 left-0 right-0 h-[17px] bg-[#fddff] rounded-t-md border-b border-gray-400">
                            <div class="w-[50px] relative inset-y-0 mx-auto my-1 p-1 rounded-[1px] bg-gray-300">
                            </div>
                        </div>
                        <div class="grid grid-cols-10 absolute bottom-1 w-full gap-1 px-1 h-[68%]">
                            <div class="col-span-2 h-full border border-gray-400"></div>
                            <div class="col-span-6 h-full">
                                <div class="text-center bg-[#f9f9fa] leading-none text-black">~ ~ ~</div>
                                <div class="border border-gray-400 h-[71%]"></div>
                            </div>
                            <div class="col-span-2 h-full border border-gray-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue';
let theme = ref(localStorage.getItem('theme'));

watch(theme, () => {
    localStorage.setItem('theme', theme.value);
    if(localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

});
</script>