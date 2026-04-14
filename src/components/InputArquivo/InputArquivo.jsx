import { useState, useEffect } from 'react'
import css from './InputArquivo.module.css'

export default function InputArquivo({ required = false, tamanho = "normal" }) {

    const [nomeArquivo, setNomeArquivo] = useState("Nenhum arquivo selecionado")
    const [preview, setPreview] = useState(null)

    function handleChange(e) {
        const file = e.target.files[0]

        if (file) {
            setNomeArquivo(file.name)
            setPreview(URL.createObjectURL(file))
        }
    }

    function removerImagem() {
        setPreview(null)
        setNomeArquivo("Nenhum arquivo selecionado")
    }

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview)
            }
        }
    }, [preview])

    return (
        <div className={css.inputGroup}>
            <label className={css.label}>Foto de Perfil</label>

            {!preview ? (
                // 🔹 MOSTRA INPUT
                <>
                    <label className={`${css.botao} ${css[tamanho]}`}>
                        Selecionar arquivo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            required={required}
                            className={css.inputFile}
                        />
                    </label>

                    <span className={css.nome}>{nomeArquivo}</span>
                </>
            ) : (
                // 🔹 MOSTRA PREVIEW
                <div className={css.previewContainer}>
                    <img
                        src={preview}
                        alt="Preview"
                        className={css.preview}
                    />

                    <button
                        type="button"
                        onClick={removerImagem}
                        className={css.remover}
                    >
                        Trocar imagem
                    </button>
                </div>
            )}
        </div>
    )
}