import * as axios from "axios";

const socNet = axios.create({
    baseURL: 'https://test.megapolis-it.ru/api/list/',
});

export const tasksAPI = {
    setTasks() {
        return socNet.get().then(response => {
            return response.data.data;
        })
    },
    addTask(newTaskData) {
        return socNet.post(``,newTaskData).then(response => {
            return {...newTaskData,id:response.data.id};
        })
    },
    updateTask(updateTaskData) {
        return socNet.post(`${updateTaskData.id}`,updateTaskData).then(response => {
            if ( response.data.success){
                return updateTaskData;
            };

        })
    },
    delTask(task) {
        return socNet.delete(`${task.id}`).then(response => {
            if ( response.data.success){
                return task.id
            };
        })
    }
}
