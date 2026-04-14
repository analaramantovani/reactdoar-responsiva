import OngsAprovar from "../OngsAprovar/OngsAprovar.jsx";
import css from "./ListaAprovacoes.module.css";
import Titulo from "../Titulo/Titulo.jsx";

export default function ListaAprovacoes() {
    return (
        <section className={css.secao}>
            <div className={css.tituloprincipal}>
                <Titulo titulo={'Lista de Pendências'} cor={'preto'}/>
            </div>
            <div className={css.categorias}>
                <Titulo titulo={'Nome da ONG'} cor={'preto-subtitulo'}/>
                <Titulo titulo={'Data de Cadastro'} cor={'preto-subtitulo'}/>
                <Titulo titulo={'Ações'} cor={'preto-subtitulo'}/>
            </div>
            <div className={css.cards}>
                <OngsAprovar nomeong={'GRUPA'} data={'17/11/25'}  />
                <OngsAprovar nomeong={'GRUPA'}  />
                <OngsAprovar nomeong={'GRUPA'}  />
                <OngsAprovar nomeong={'GRUPA'}  />
            </div>

        </section>
    )
}