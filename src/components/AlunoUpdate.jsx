import React from 'react';
import styled from 'styled-components';
import { putStudent } from '../utils/Api';
import Input from './Input';

const Div = styled.div`
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: white;
    padding: 1rem;
    text-align: center;
    width: 30rem;
    z-index: 10;
    position: fixed;
    top: 20vh;
    left: calc(50% - 15rem);
`;

const Cancelar = styled.button`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    align-self: flex-end;
    margin: 0 15px 5px 0;
    border: none;
    background-color: #f42d05;
    color: #ffffff;
    font-size: 15px;

    &:hover{
        background-color: #ffffff;
        color: #f42d05;
    }

    &:active{
        background-color: #2A1A5E;
    }
`;

const Update = styled.button`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    align-self: flex-end;
    margin: 0 10px 5px 0;
    border: none;
    background-color: #2A1A5E;
    color: #ffffff;
    font-size: 15px;

    &:hover{
        background-color: #ffffff;
        color: #f42d05;
    }

    &:active{
        background-color: #f42d05;
        color: #2A1A5E;
    }
`;

export default function AlunoUpdate(props) {
    const Obj = {
        nome: '',
        nascimento: '',
        cpf: '',
        email: '',
        carreira: '',
    };

    function handlerOnBlur(key, valor) {
        Obj[key] = valor;
    }

    function handlerUpdate(){
        putStudent({...Obj}, props.ID).then((res)=>{
            console.log(res)
            window.location.reload();
        })
    }

    return (
        <Div>
            <Input type={"text"} value={props.NAME} handler={handlerOnBlur} nome={'nome'}>Nome do Aluno: </Input>
            <Input type={"text"} value={props.BIRTHDATE} handler={handlerOnBlur} nome={'nascimento'}>Data de Nascimento: </Input>
            <Input type={"text"} value={props.CPF} handler={handlerOnBlur} nome={'cpf'}>CPF: </Input>
            <Input type={"text"} value={props.EMAIL} handler={handlerOnBlur} nome={'email'}>E-mail: </Input>
            <Input type={"text"} value={props.CAREER} handler={handlerOnBlur} nome={'carreira'}>Curso: </Input>

            <Cancelar onClick={props.onCancel}>Cancelar</Cancelar>
            <Update onClick={handlerUpdate}>Atualizar</Update>
        </Div>
    )
}
