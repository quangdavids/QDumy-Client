import axios from 'axios';

const api = "http://localhost:3000/api/"

export const getLatestCoursesAPI = async () => {
    const response = await axios.get(`${api}/latest` )
    return response.data
}

export const getCourseAPI = async(id) => {
    const response = await axios.get(`${api}courses/${id}`)
    return response.data
}

export const searchCourseAPI = async (query, level) => {
    const response = await axios.get(`${api}courses/search?query=${query}`)
    return response.data
}

export const createCourseAPI = async (data) => {
    const courseData = {...data}
    const response = await axios.post(`${api}/`, courseData)
    return response.data
}

export const addLessonAPI = async (data) => {
    const lessonData = {...data}
    const response = await axios.post(`${api}/lesson`, lessonData)
    return response.data
}
