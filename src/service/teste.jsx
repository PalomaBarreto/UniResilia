import React, {useState} from 'react'
const [nome, setNome] = useState('')

change = (e)=>{
    nome = e.target.value
}