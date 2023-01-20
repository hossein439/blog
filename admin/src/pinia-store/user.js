import { defineStore } from "pinia";
import { useRouter } from "vue-router";
export const useUser = defineStore('user', {
    state: () => {
        return {
            user: undefined,
            isLogin: localStorage.getItem('user') === null ? false : true,
        }
    },
    getters: {
        userJson() {
            const router = useRouter();
            const isCookieSet = Boolean(this.getCookie('auth_token'));
            if (isCookieSet) {
                const isUserExist = Boolean(localStorage.getItem('user')); 
                if(isUserExist) {
                    return JSON.parse(localStorage.getItem('user'));
                } else {
                    return 
                }
            } else {
                router.push({ name: 'login' })
                return 
            }
        },
    },
    actions: {
        getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        saveUser() {
            localStorage.setItem('user', JSON.stringify(this.user));
        }
    }
});