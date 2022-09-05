import React from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function FormularioCadastro() {

    return (
        <form action="">
            <TextField id="nome" label="Nome" variant="outlined" />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" />
            <TextField id="cpf" label="CPF" variant="outlined" />
            <input type="text" />
            <label htmlFor="">Promoções</label>
            <input type="checkbox" />
            <label htmlFor="">Novidades</label>
            <input type="checkbox" />
            <Button variant="contained" color='primary' type='submit'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;