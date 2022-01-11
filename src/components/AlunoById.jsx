import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getStudentById } from '../utils/Api';
import Input from './Input';
import Aluno from './Aluno';
import Loading from './Loading';

const Button = styled.button`
    width: 90px;
    height: 45px;
    border-radius: 5px;
    border: none;
    background-color: #f45905;
    color: #ffffff;
    font-size: 18px;
    float: right;

    &:hover{
        background-color: #ffffff;
        color: #f42d05;
    }

    &:active{
        background-color: #2A1A5E;
    }
`;

export default function AlunoById() {
    let id = 0;
    const [aluno, setAluno] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handlerInput(key, value){
        id = value;
    }

    function handlerClick(){
        setIsLoading(true);
        getStudentById(id).then((res) => {
            setAluno(res.req);
            setIsLoading(false);
        })
    }

    
    return (
        <div>
            <div>
                <Input type={'number'} handler={handlerInput}>Id do aluno:</Input>
                <Button onClick={handlerClick}>Pesquisar</Button>
            </div>
            
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
