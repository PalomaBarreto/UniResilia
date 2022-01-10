import React from 'react'
import styled from 'styled-components';

const LiCard = styled.li`
    width: 350px;
    height: 170px;
    background-color: aliceblue;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0 30px 0 30px;
`;

export default function Aluno({ aluno: { ID, NAME, BIRTHDATE, CPF, EMAIL, CAREER, REGISTRATIONDATE } }) {

    return (
        <LiCard key={ID}>
            <p>{NAME}</p>
            <p>CPF: {CPF}.</p>
            <p>Data de nascimento: {BIRTHDATE}.</p>
            <p>Email: {EMAIL}.</p>
            <p>Admissão: {REGISTRATIONDATE}.</p>
            <p>Carreira: {CAREER}.</p>
        </LiCard>
    )
}