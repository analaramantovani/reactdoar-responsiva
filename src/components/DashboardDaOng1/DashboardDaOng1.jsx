import Titulo from "../Titulo/Titulo.jsx";
import css from "./DashboardDaOng1.module.css";
import Acoes from "../Acoes/Acoes.jsx";
import Cards from "../Cards/Cards.jsx";

export default function DashboardDaOng1() {
    return(
        <section className={css.secao}>
            <div>
                <Titulo titulo={'Olá, nome do sobrenome'} />
            </div>
            <Titulo titulo={'Ações Rápidas'} cor={'preto'}/>
            <div className={css.acoes}>
                <Acoes cor={'amarelo'} texto={'Editar Perfil'}/>
                <Acoes cor={'amarelo'} texto={'Criar Projeto'}/>
                <Acoes cor={'amarelo'} texto={'Criar Atualização'}/>
            </div>
            <div className={css.titulos}>
                <Titulo titulo={'Projetos Ativos'} cor={'preto'}/>
            </div>
            <div className={css.cards}>
                <Cards texto={'Mutirão de Castração Solidária'} imagem={'/projeto3.png'}/>
                <Cards texto={'Operação Patas Quentinhas'} imagem={'/projeto1.png'}/>
                <Cards texto={'Recomeço Feliz'} imagem={'/projeto2.png'}/>
            </div>
            <div className={css.titulos}>
                <Titulo titulo={'Últimas atualizações'} cor={'preto'}/>
            </div>

        </section>
    )
}