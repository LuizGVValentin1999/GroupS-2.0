import './global.css'
import styles from './App.module.css';
import { Header } from './components/header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
function App() {

  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar /> 
      <main>
        <Post
          author="Luiz Valentin"
          content="apenas um post de test "
        />
        <br/>
        <Post
          author="aluno X"
          content="Um novo post muito legal"
        />
      </main>
    </div>
  </div> 
  )
}

export default App
