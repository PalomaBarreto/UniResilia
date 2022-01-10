const url = 'https://afternoon-thicket-89765.herokuapp.com/students';

export async function getStudents() {
    const data = await fetch(
        url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    ).then(
        res => {
            return res.json();
        }
    )

    return data.students;
}

export async function getStudentById(id) {
    const data = await fetch(
        `${url}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    ).then(
        res =>{
            return res.json();
        }
    )

    return data
}