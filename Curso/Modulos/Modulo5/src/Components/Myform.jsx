import { useState } from 'react'
import './Myform.css'

const Myform = ({ user }) => {
  //6 - controlled inputs


  //3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState( user ? user.bio : '')
    const [role, setRole] = useState( user ? user.role : '')
    const handleName = (e) => {
      setName(e.target.value)
    }
    
    const handleSubmit = (e) => {
      event.preventDefault();
      setEmail('')
      setName('')
    }

    return (
      <div>
          {/* Criação de form */}
          <form onSubmit={handleName}>
              <div>
                  <label htmlFor="name">Nome</label>
                  <input type="text" value={name} name="name" placeholder="Digite o seu nome" onChange={handleName}/>
              </div>
              {/* 2- label envolvento input */}
              <label>
                <span>E-mail</span>
                <input type="email" value={email} name="email" placeholder='Digite seu e-mail' onChange={(e) => {setEmail(e.target.value)}} />
              </label>
              {/* textarea */}
              <label>
                <span>bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
              </label>
              {/* 9- Select */}
              <label>
                <span>função do sistema</span>
                <select name="role" value={role} onChange={(e) => {setRole(e.target.value)}}>
                  <option value="user">Usuário</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Administrador</option>
                </select>
              </label>
              <input type="submit" value="Enviar"/>
          </form>
      </div>
  )
}

export default Myform