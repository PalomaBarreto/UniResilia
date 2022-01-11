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
        res => {
            return res.json();
        }
    )

    return data
}

export async function deleteStudentById(id) {
    const data = await fetch(
        `${url}/${id}`, {
            method: 'DELETE',
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

    return data;
}

export async function postStudent(aluno) {
    const {nome, nascimento, cpf, email, carreira, registro} = aluno
    console.log('log fuleiro acima ^^');
    const data = await fetch(
        `${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nome,
                CPF: cpf,
                career: carreira,
                birthDate: nascimento,
                email: email,
                registrationDate: registro
            })
        }
    ).then(
        res => {
            return res.json();
        }
    ).catch(
        (err)=>{
            console.log(err.message);
        }
    )

    return data;
}
