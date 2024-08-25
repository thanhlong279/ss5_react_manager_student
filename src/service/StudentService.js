import axios from "axios";

const URL_STUDENT = "http://localhost:8081/students"

// export const getAllStudents = async (name) => {
//     try {
//         let res = await axios.get(URL_STUDENT + "?name_like=" + name);
//         return res.data;
//     } catch (e) {
//         return []
//     }
// }

export const saveStudent = async (student) => {
    try {
        await axios.post(URL_STUDENT, student)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const getStudentById = async (id) => {
    const response = await axios.get(`${URL_STUDENT}/${id}`);
    return response.data;
}

export const updateStudent = async (id, studentData) => {
    try {
        await axios.put(`${URL_STUDENT}/${id}`, studentData);
        return true
    } catch (e) {
        console.log("tác vụ thất bại!!!", e)
        return false;
    }
}

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${URL_STUDENT}/${id}`);
        return true
    } catch (error) {
        console.error("tác vụ thất bại", error);
        return false
    }
};

export const getAllStudents = async ({ name, startDate, endDate }) => {
    try {
        let url = `http://localhost:8081/students?`;

        // Append query parameters if they exist
        if (name) {
            url += `name_like=${name}&`;
        }
        if (startDate) {
            url += `dob_gte=${startDate}&`;
        }
        if (endDate) {
            url += `dob_lte=${endDate}&`;
        }

        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch students", error);
        return [];
    }
};

