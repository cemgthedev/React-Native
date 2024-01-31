import api from "../services/api";
async function getUsers() {
    try {
        const response = await api.get("/users");
        const data = response.data;
        return data;
    } catch (error) {
        return null
    }
}

export default getUsers;