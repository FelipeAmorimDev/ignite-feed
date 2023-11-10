import React from 'react'
import styles from './Comentario.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'

const Comentario = ({content, onDeleteComment}) => {
  const [likeCount, setLikeCount] = React.useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar  src="http://github.com/pedro.png" hasBorder={false}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Amorim</strong>
              <time title="25 de Outubro ás 19:32h" dateTime='2023-10-25 19:32:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comentario