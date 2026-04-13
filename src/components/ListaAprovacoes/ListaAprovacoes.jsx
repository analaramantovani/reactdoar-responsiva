import OngsAprovar from "../OngsAprovar/OngsAprovar.jsx";
import css from "./ListaAprovacoes.module.css";
import Titulo from "../Titulo/Titulo.jsx";

export default function ListaAprovacoes() {
    return (
        <section className={css.secao}>
            <div>
                <Titulo titulo={'Lista de Pendências'} cor={'preto'}/>
            </div>
            <OngsAprovar nomeong={'GRUPA'}  />
            <OngsAprovar nomeong={'GRUPA'}  />
            <OngsAprovar nomeong={'GRUPA'}  />
            <OngsAprovar nomeong={'GRUPA'}  />
        </section>
    )
}