import styles from './Post.module.css';

export function Post(props) {
    return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <div  className={styles.avatar} src='https://avatars.githubusercontent.com/u/59962559?v=4'></div>
          <div className={styles.authorInfo}>
            <strong>Luiz Valentin</strong>
            <span>Dev Master</span>
          </div>
        </div>
        <time title='11 de novembro às 08:30h' dateTime='2002-11-11 08:30:30'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      </div>
    </article>
    )
  }