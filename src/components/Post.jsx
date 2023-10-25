import React from 'react'
import styles from './Post.module.css'
const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/felipeamorimdev.png" />
          <div className={styles.authorInfo}>
            <strong>Felipe Amorim</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="25 de Outubro ás 19:32h" dateTime='2023-10-25 19:32:00'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{" "}<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto{" "}</a>
          <a href="">#nlw{" "}</a>
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}

export default Post