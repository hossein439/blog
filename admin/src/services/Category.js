import AxiosBase from "./AxiosBase";

export default {
    create(data) {
        return AxiosBase().post('/category', data);
    },
    index() {
        return AxiosBase().get('/category');
    },
    delete(id) {
        return AxiosBase().delete(`/category/${id}`);
    },
    read(id) {
        return AxiosBase().get(`/category/${id}`)
    }
}