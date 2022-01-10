import React from 'react'

export default function Aluno({aluno:{ID, NAME, nascimento, carreira, cpf, email, registro}}) {
    console.log(ID)
    return (
        <p>{ID}</p>
    )
}
