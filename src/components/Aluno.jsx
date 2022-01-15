import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';
import AlunoUpdate from './AlunoUpdate';
import { deleteStudentById } from '../utils/Api';

const LiCard = styled.li`
    width: 350px;
    height: 200px;
    background-color: aliceblue;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
    box-shadow: 15px 15px 10px #2A1A5E;
    border-radius: 0 30px 0 30px;

    &:hover{
        transform: scale(1.01);
        animation: ihul 1.5s;
        box-shadow: 15px 15px 10px #f45905;
    }

    @keyframes ihul{
        0% {box-shadow: 15px 15px 10px #2A1A5E;}
        100% {box-shadow: 15px 15px 10px #f45905;}
    }
`;

const Nome = styled.p`
    font-weight: 600;
`;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
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

const Delete = styled.button`
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

export default function Aluno({ aluno: { ID, NAME, BIRTHDATE, CPF, EMAIL, CAREER, REGISTRATIONDATE } }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handlerDelete() {
        deleteStudentById(ID).then((res) => {
            window.location.reload();
        })
    }

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <>
        <LiCard>
            <Nome>{NAME}</Nome>
            <p>CPF: {CPF}.</p>
            <p>Data de nascimento: {BIRTHDATE}.</p>
            <p>Email: {EMAIL}.</p>
            <p>Admissão: {REGISTRATIONDATE}.</p>
            <p>Carreira: {CAREER}.</p>
            <Buttons>
                <Delete onClick={handlerDelete}>Deletar</Delete>
                <Update onClick={openModal}>Atualizar</Update>
            </Buttons>
        </LiCard>

            {modalIsOpen &&
                <AlunoUpdate
                    onCancel={closeModal}
                    ID={ID}
                    NAME={NAME}
                    BIRTHDATE={BIRTHDATE}
                    CPF={CPF}
                    EMAIL={EMAIL}
                    CAREER={CAREER}
                    REGISTRATIONDATE={REGISTRATIONDATE}
                />}
            {/* {modalIsOpen && <Backdrop onClick={closeModal} />} */}
        </>
    )
}
