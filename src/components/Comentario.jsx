import React from 'react'
import styles from './Comentario.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

const Comentario = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/felipeamorimdev.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}> <time title="25 de Outubro ás 19:32h" dateTime='2023-10-25 19:32:00'>Publicado há 1h</time>
              <strong>Felipe Amorim</strong>
              <time title="25 de Outubro ás 19:32h" dateTime='2023-10-25 19:32:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comentario