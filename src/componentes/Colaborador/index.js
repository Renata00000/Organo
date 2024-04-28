//importe abre colchetes cola o icon escreve fron e passa o nome da biblioteca/ para saber qual a pasta e apenas ver as 2 primeiras letras doque esta entre colchetes
import './colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador