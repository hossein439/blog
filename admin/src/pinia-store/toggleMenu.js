import { defineStore } from "pinia";

export const useMenu = defineStore('menuConfig', {
    state: () => {
        return {
            isOpen: true,
            widthSideBar: 'w-[18em]',
            marginLeftMenu: 'ml-[18em]',
        }
    },
    getters:  {
    },
    actions:  {
        toogleMenu(e) {
            e.currentTarget.children[0].classList.toggle('change');
            if (this.isOpen) {
                this.widthSideBar = 'w-[5em]';
                this.marginLeftMenu = 'ml-[5em]'
                this.isOpen = false
            }
            else {
                this.widthSideBar = 'w-[18em]';
                this.marginLeftMenu = 'ml-[18em]';
                this.isOpen = true
            }  
        }
    }
});