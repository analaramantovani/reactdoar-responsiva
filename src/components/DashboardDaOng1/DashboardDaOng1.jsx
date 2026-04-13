import Titulo from "../Titulo/Titulo.jsx";
import css from "./DashboardDaOng1.module.css";

export default function DashboardDaOng1() {
    return(
        <section>
            <div>
                <Titulo titulo={'Olá, '} />
            </div>
            <Titulo titulo={'Ações Rápidas'} cor={'preto'}/>
            <div className={css.acoes}>
                <div className={css.cards}>
                    <h2>Editar Perfil</h2>
                </div>
                <div className={css.cards}>
                    <h2>Criar Projeto</h2>
                </div>
                <div className={css.cards}>
                    <h2>Criar Atualização</h2>
                </div>
            </div>
        </section>
    )
}