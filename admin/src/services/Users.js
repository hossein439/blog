import AxiosBase from "@/services/AxiosBase";

export default {
    login(credentials) {
        return AxiosBase().post('/login', credentials)
    },
    register(credentials) {
        console.log(credentials)
        return AxiosBase().post('/register', credentials)
    },
    signout(id) {
        return AxiosBase().post(`/signout/${id}`, id)
    },
    index() {
        return AxiosBase().get(`/users`);
    },
    create(user) {
        return AxiosBase().post('/users', user);
    },
    update(id, user) {
        return AxiosBase().put(`/users/${id.id}`, user);
    },
    delete(id) {
        return AxiosBase().delete(`/users/${id}`)
    },
    read(id) {
        return AxiosBase().get(`/users/${id}`)
    },
    readProfile() {
        return AxiosBase().post('/user-profile')
    },

    addReadingList(id, data) {
        return AxiosBase().post(`/add-reading-list/${id.id}`, data);
    },
    removeReadingList(id, data) {
        return AxiosBase().post(`/remove-reading-list/${id.id}`, data);
    },
    readingList(id) {
        return AxiosBase().post(`/reading-list/${id.id}`);
    },

    addLike(id, data) {
        return AxiosBase().post(`/add-like/${id.id}`, data);
    },
    removeLike(id, data) {
        return AxiosBase().post(`/remove-like/${id.id}`, data);
    },
}