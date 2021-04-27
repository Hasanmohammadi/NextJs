// import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";

import "antd/dist/antd.css";
import { Pagination } from "antd";
import Blog from "../components/blog";
import styles from "../styles/Home.module.css";
import { POSTS_URL } from "../url";

export default function Home({ posts }) {
  const router = useRouter();
  function onChange(pageNumber) {
    console.log("Page: ", pageNumber);
    // router.push(`?page=${pageNumber}`);

    router.push({
      pathname: "/",
      query: { page: pageNumber },
    });
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Blog key={post.id} blog={post} />
      ))}

      <div>
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={600}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { page } = context.query;
  const response = await fetch(`${POSTS_URL}${page}`);
  const data = await response.json();

  return {
    props: {
      posts: data.posts,
    },
  };
};
