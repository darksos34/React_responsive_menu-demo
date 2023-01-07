import http from "../../http-common";

const getAll = () => {
    return http.get("/topics");
};

const get = (id) => {
    return http.get(`/topics/${id}`);
};

const create = (data) => {
    return http.post("/topics", data);
};

const update = (id, data) => {
    return http.put(`/topics/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/topics/${id}`);
};

const removeAll = () => {
    return http.delete(`/topics`);
};

const findByTitle = (title) => {
    return http.get(`/topics?title=${title}`);
};

const TopicService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};

export default TopicService;