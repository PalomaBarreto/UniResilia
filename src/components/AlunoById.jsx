import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStudentById } from '../utils/Api';
import Aluno from './Aluno';
import Loading from './Loading';

export default function AlunoById() {
    const [id, setId] = useState(0);
    const [aluno, setAluno] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStudentById(1).then((res) => {
            console.log(res)
            console.log('res acima')
            setAluno(res.req);
            setIsLoading(false);
            console.log(aluno)
            console.log('aluno a cima')
        });

    }, [isLoading])

    if (isLoading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <div>
                {aluno.map(aluno => {
                    return (
                        <Aluno
                            key={aluno.ID}
                            aluno={aluno}
                        />
                    )
                })}
            </div>
        )
    }
}
