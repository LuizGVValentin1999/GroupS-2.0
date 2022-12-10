import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/59962559?v=4",
      name: "Luiz Gustavo Valter Valentin",
      role: "Dev Master",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um comit do meu projeto group S 2.0",
      },
      { type: "link", content: "teste/link" },
    ],
    publishedAt: new Date("2022-12-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/59962559?v=4",
      name: "Luiz Gustavo Valter Valentin",
      role: "Dev Master",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um comit do meu projeto group S 2.0",
      },
      { type: "link", content: "teste/link" },
    ],
    publishedAt: new Date("2022-12-06 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
