import React from 'react'
import { useState, useEffect } from 'react';
import { getStudents } from '../utils/Api';
import Aluno from './Aluno';
import Loading from './Loading';

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStudents().then((res)=>{
            setAlunos(res);
            setIsLoading(false);
        }
        );
    }, [isLoading])

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else {
        return (
            <ul>
                {alunos.map((aluno, index)=>{
                    return(
                        <Aluno
                            // id={aluno.ID}
                            // nome={aluno.NAME}
                            // nascimento={aluno.BIRTHDATE}
                            // carreira={aluno.CAREER}
                            // cpf={aluno.CPF}
                            // email={aluno.EMAIL}
                            // registro={aluno.REGISTRATIONDATE}
                            aluno={aluno}
                        />
                    );
                })}
            </ul>
        )
    }
}
