<template>
    <form action="" class="dark:bg-[#171717] bg-white dark:border-none border rounded-md p-6">
        <p class="text-3xl mb-7 dark:text-white">Set new password</p>
        <div class="flex flex-col mb-5">
            <label for="" class="pb-2 dark:text-white">
                Current password
            </label>
            <input type="password"
                class="p-2 dark:bg-black dark:text-white border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
        </div>
        <div class="flex flex-col mb-5">
            <label for="" class="pb-2 dark:text-white">
                Password
            </label>
            <input type="password"
                class="p-2 dark:bg-black dark:text-white border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
        </div>
        <div class="flex flex-col mb-5">
            <label for="" class="pb-2 dark:text-white">
                Confirm new password
            </label>
            <input type="password"
                class="p-2 dark:bg-black dark:text-white border dark:border-zinc-700 rounded-md focus:border-indigo-400 outline-none transition-all">
        </div>
        <button class="px-4 py-2 bg-indigo-600 text-white rounded-md">Set new password</button>
    </form>
    <form action="" class="dark:bg-[#171717] bg-white dark:border-none border rounded-md p-6 mt-6">
        <p class="text-3xl mb-7 text-red-600">Danger Zone</p>
        <button class="px-4 py-2 bg-red-600 text-white rounded-md">Delete Account</button>
    </form>
</template>