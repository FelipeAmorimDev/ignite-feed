import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import React from 'react'
import styles from './Post.module.css'
import Comentario from './Comentario'
import Avatar from './Avatar'
//Procurar
  // onst publishedDateFormatted = new Intl.DateTimeFormat("pt-BR"


const Post = ({author, content, publishedAt}) => {
  const [comments, setComments] = React.useState([
    'Post muito bacana!'
  ])
  const [newCommentText, setNewCommentText] = React.useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
    locale: ptBR
  })

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handlePostComments = (e) => {
    e.preventDefault()

    setComments((previous) => [...previous, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentChange = (e) => {
    setNewCommentText(e.target.value)
    e.target.setCustomValidity('')
  }

  const handleNewCommentInvalid = (e) => {
    e.target.setCustomValidity('O comentario não pode ser enviado vazio.')
  }

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
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
            ? <p key={line.content}>{line.content}</p>
            : <p key={line.content}><a href="">{line.content}</a></p>
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handlePostComments}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={!newCommentText}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
          <Comentario 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
          )
        })}
      </div>
    </article>
  )
}

export default Post