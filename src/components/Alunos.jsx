import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStudents } from '../utils/Api';
import Aluno from './Aluno';
import Loading from './Loading';

const UlContainer = styled.ul`
    width: 1000px;
    min-height: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStudents().then((res) => {
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
            <UlContainer>
                {alunos.map((aluno, index) => {
                    return (
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
            </UlContainer>
        )
    }
}

/* <Aluno
    id={aluno.ID}
    nome={aluno.NAME}
    nascimento={aluno.BIRTHDATE}
    carreira={aluno.CAREER}
    cpf={aluno.CPF}
    email={aluno.EMAIL}
    registro={aluno.REGISTRATIONDATE}
    aluno={aluno}
/> */
