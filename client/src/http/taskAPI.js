import {$host} from "./index"


export const fetchTasks = async () => {
    const {data} = await $host.get('api/task')
    return data
}


export const deleteTask = async (id) => {
    const {data} = await $host.delete('api/task/' + id)
    return data
}

export const createTask = async (task) => {
    const {data} = await $host.post('api/task/', {task: task})
    return data
}