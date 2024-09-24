import "./UserDetails.css"

export const UserDetails = ({nome, idade, profissao}) => {
  return (
    <>
      <section className="container">
        <div className="box">
          <h2 className="titulo">Detalhes do usuário</h2>
          <p className="componente">Nome: {nome}</p>
          <p className="componente">Idade: {idade}</p>
          <p className="componente">Profissão: {profissao}</p>
          {idade >= 18 ? <p className="validacaoTrue">Este Usuário pode tirar carteira!</p> : <p className="validacaoFalse">Este usuário é menor de idade</p>}
        </div>
      </section>
    </>
    
  )
}
