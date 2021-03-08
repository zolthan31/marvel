import React from 'react'

export default function Form() {
    return (
        <div className='container'>
            <form>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" placeholder="E-mail de destino.." />

                <label htmlFor="nome">Titulo</label>
                <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." />

                <label htmlFor="mensagem">Detalhes</label>
                <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea"></textarea>

                <label htmlFor="anexo">Imagem</label>
                <input type="file" id="anexo" name="anexo" />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

