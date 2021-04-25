import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useState } from "react";
import { POST_URL } from "../url";

import Blog from "../components/blog";

export default function Home({ blogsApi }) {
  const [blogs, setBlogs] = useState(blogsApi);

  return (
    <div className={styles.container}>
      {blogs.map((blog) => {
        return <Blog blog={blog} />;
      })}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const response = await fetch(POST_URL);
  const data = await response.json();

  return {
    props: {
      blogsApi: data.posts,
    },
  };
};
