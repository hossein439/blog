import { defineStore } from "pinia";
import Category from '@/services/Category';

export const useCategory = defineStore('category', {
    state: () => {
        return {
            categories: [],
        }
    },
    getters:{},
    actions: {
        getCategories() {
            Category.index()
            .then(res => {
                this.categories = res.data;
            }).catch(err => {
                console.log(err)
            });
        }
    }
})