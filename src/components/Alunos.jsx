import React from 'react'
import { useState, useEffect } from 'react';
import { getStudents } from '../utils/Api';
import Loading from './Loading';

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(()=>{
    //     const students = getStudents();
    //     setAlunos(students);
    //     setIsLoading(false);
    // },[isLoading])
    
    if(isLoading){
        return(
            <Loading/>
        );
    }
    else{
        return (
            <div>Tristeza</div>
        )
    }
}
