import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import React from 'react'
import styles from './Post.module.css'
import Comentario from './Comentario'
import Avatar from './Avatar'
//Procurar
  // onst publishedDateFormatted = new Intl.DateTimeFormat("pt-BR"


const Post = ({author, content, publishedAt}) => {
  const [comments, setComments] = React.useState([1,2,3])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
    locale: ptBR
  })

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handlePostComments = (e) => {
    e.preventDefault()
    setComments((previous) => [...previous, comments.length +1])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
         <Avatar  src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publisedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          return line.type === 'paragraph' 
            ? <p>{line.content}</p>
            : <p><a href="">{line.content}</a></p>
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handlePostComments}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((_) => {
          return <Comentario />
        })}
      </div>
    </article>
  )
}

export default Post