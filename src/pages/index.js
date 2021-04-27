import Blog from "../components/blog";
import styles from "../styles/Home.module.css";
import { POSTS_URL } from "../url";

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Blog blog={post} />
      ))}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const response = await fetch(POSTS_URL);
  const data = await response.json();

  return {
    props: {
      posts: data.posts,
    },
  };
};
