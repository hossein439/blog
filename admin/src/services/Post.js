import AxiosBase from "./AxiosBase";

export default {
    create(data) {
        return AxiosBase().post('/post', data);
    },
    update(id, data) {
        return AxiosBase().put(`/post/${id.id}`, data);
    },
    read(id) {
        return AxiosBase().get(`/post/${id.id}`)
    },
    readUserPosts(id){
        return AxiosBase().post(`/read-user-posts`, id)
    },
    index() {
        return AxiosBase().get('/post');
    },
    delete(id) {
        return AxiosBase().delete(`/post/${id}`);
    },
}