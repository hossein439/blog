<template>
    <div class="mx-[164px]">
        <p class="text-4xl mb-5">Settings for user</p>
        <div class="grid grid-cols-8 gap-x-4">
            <div class="col-span-2 flex flex-col dark:text-zinc-200">
                <div>
                    <RouterLink
                        class="flex p-2 my-1 relative dark:hover:bg-indigo-900/70 dark:hover:text-indigo-300 hover:bg-indigo-200 hover:text-indigo-900 transition-all cursor-pointer rounded-md"
                        :to="{ name: 'profile' }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            role="img" aria-labelledby="a76nmwnd5twc164n5est2hnhfwdlafxw"
                            class="crayons-icon crayons-icon--default">
                            <title id="a76nmwnd5twc164n5est2hnhfwdlafxw">Profile</title>
                            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                                fill="#FFCC4D"></path>
                            <path
                                d="M7.842 15.123c.025.1.649 2.433 4.158 2.433 3.51 0 4.133-2.333 4.158-2.433a.277.277 0 00-.464-.265c-.011.01-1.086 1.03-3.695 1.03-2.607 0-3.683-1.02-3.692-1.03a.28.28 0 00-.452.087.278.278 0 00-.014.178zM10.056 9.5c0 1.074-.622 1.944-1.39 1.944-.767 0-1.388-.87-1.388-1.944 0-1.074.621-1.944 1.389-1.944.767 0 1.389.87 1.389 1.944zm6.666 0c0 1.074-.621 1.944-1.389 1.944-.767 0-1.389-.87-1.389-1.944 0-1.074.622-1.944 1.39-1.944.767 0 1.388.87 1.388 1.944z"
                                fill="#664500"></path>
                        </svg>
                        <span class="px-3">Profile</span>
                    </RouterLink>
                </div>
                <div>
                    <RouterLink
                        class="flex p-2 my-1 relative dark:hover:bg-indigo-900/70 dark:hover:text-indigo-300 hover:bg-indigo-200 hover:text-indigo-900 transition-all cursor-pointer rounded-md"
                        :to="{ name: 'customization' }">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            role="img" aria-labelledby="api3h6t267g8q1pswsdwaqqbwh0c7r4d"
                            class="crayons-icon crayons-icon--default">
                            <title id="api3h6t267g8q1pswsdwaqqbwh0c7r4d">Customization</title>
                            <path
                                d="M12 16.444a4.444 4.444 0 110-8.889 4.444 4.444 0 010 8.89zm8.889-6.11H19.02a7.16 7.16 0 00-.879-2.12l1.322-1.32a1.112 1.112 0 000-1.572l-.786-.786a1.11 1.11 0 00-1.571 0l-1.321 1.322a7.167 7.167 0 00-2.12-.88V3.112A1.111 1.111 0 0012.557 2h-1.112a1.11 1.11 0 00-1.11 1.111V4.98a7.167 7.167 0 00-2.12.879l-1.32-1.322a1.111 1.111 0 00-1.572 0l-.786.786a1.112 1.112 0 000 1.571l1.322 1.321a7.172 7.172 0 00-.88 2.12H3.112A1.111 1.111 0 002 11.443v1.112a1.11 1.11 0 001.111 1.11H4.98c.18.76.48 1.473.879 2.119l-1.322 1.322a1.112 1.112 0 000 1.571l.786.786a1.113 1.113 0 001.571 0l1.321-1.322c.655.405 1.37.702 2.12.88v1.867A1.111 1.111 0 0011.443 22h1.112a1.111 1.111 0 001.11-1.111V19.02c.76-.18 1.473-.48 2.119-.879l1.322 1.322a1.108 1.108 0 001.571 0l.786-.786a1.111 1.111 0 000-1.571l-1.322-1.321a7.16 7.16 0 00.88-2.12h1.867A1.111 1.111 0 0022 12.557v-1.112a1.111 1.111 0 00-1.111-1.11z"
                                fill="#66757F"></path>
                        </svg>
                        <span class="px-3">Customization</span>
                    </RouterLink>
                </div>
                <div>
                    <RouterLink
                        class="flex p-2 my-1 relative dark:hover:bg-indigo-900/70 dark:hover:text-indigo-300 hover:bg-indigo-200 hover:text-indigo-900 transition-all cursor-pointer rounded-md"
                        :to="{ name: 'account' }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            role="img" class="crayons-icon crayons-icon--default">
                            <title>Account</title>
                            <path
                                d="M14.728 9.999a9.75 9.75 0 00-1.6 1.345c-.07-2.358-.637-5.408-3.762-6.901-.618-3.364-7.83-1.655-7.183-1.329 1.285.65 1.97 2.305 2.796 3.175 1.474 1.552 3.113 1.647 3.928.433 1.927 1.252 2.054 3.627 1.995 6.166-.006.28-.013.542-.013.78v7.776c0 .614 2.223.614 2.223 0v-6.383c.3-.53 1.179-1.947 2.46-2.941.881.774 2.301.527 3.59-.83.829-.871 1.275-2.525 2.56-3.176.68-.342-7.11-2.218-6.993 1.885"
                                fill="#77B255"></path>
                        </svg>
                        <span class="px-3">Account</span>
                    </RouterLink>
                </div>
            </div>
            <div class="col-span-6">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<style scoped>
html:has(.dark) .router-link-active {
    background-color: #312e81b3;
}
.router-link-active {
    background-color: white;
}
</style>
