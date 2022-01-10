<<<<<<< HEAD
import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStudentById } from '../utils/Api';
import Aluno from './Aluno';
import Loading from './Loading';

export default function AlunoById() {
    const [id, setId] = useState(0);
    const [aluno, setAluno] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getStudentById(2).then((res)=>{
            setAluno(res);
            setIsLoading(false);
            console.log(aluno)
        });

    },[isLoading])
    
    if(isLoading){
        return(
            <Loading />
        )
    }
    else{
        return(
            <p>Aluno</p>
        )
    }
=======
import React from 'react'

export default function AlunoById() {
    return (
        <div>
            <p>AlunoByID</p>
        </div>
    )
>>>>>>> 24f8b7430cc3bd46ab2861ae2784b0226c901043
}
