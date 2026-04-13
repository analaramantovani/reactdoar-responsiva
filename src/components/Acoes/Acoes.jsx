import css from './Acoes.module.css';

export default function Acoes({cor = 'amarelo', texto}){
    return (
        <div className={css.cards}>
            <div className={css[cor]}></div>
            <h2>{texto}</h2>
        </div>
    )
}