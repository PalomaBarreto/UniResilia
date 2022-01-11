import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStudentById } from '../utils/Api';
import Input from './Input';
import Aluno from './Aluno';
import Loading from './Loading';

export default function AlunoById() {
    const [id, setId] = useState(0);
    const [aluno, setAluno] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handler(key, value){
        setId(value);
        console.log(id);
    }

    useEffect(() => {
        getStudentById(id).then((res) => {
            setAluno(res.req);
            setIsLoading(false);
        });
    }, [isLoading])

    
    return (
        <div>
            <Input type={'number'} handler={handler}>Id do aluno:</Input>
            
            {isLoading ?
                <Loading />
                :aluno.map(aluno => {
                return (
                    <Aluno
                        key={aluno.ID}
                        aluno={aluno}
                    />
                )}
            )}
        </div>
    )
}
