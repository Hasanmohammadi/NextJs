import Blog from '~src/components/blog';
import styles from '~styles/Home.module.css';

const Tags = ({ posts, tags }) => {
  console.log(tags);
  return (
    <div>
      <h1>{`آرشیو خبر های ${tags.name}`}</h1>

      <div className={styles.container}>
        {posts.posts.map((post) => (
          <Blog key={post.id} blog={post} />
        ))}


      </div>
    </div>
  );
};

export default Tags;

export const getServerSideProps = async (context) => {
  const { tag } = context.query;

  const res = await fetch(`https://api.bourseon.com/tags/${tag}`);
  const tags = await res.json();

  const response = await fetch(
    // `https://api.bourseon.com/search?query=${encodeURIComponent(tag)}`
    `https://api.bourseon.com/posts?tags[]=${tag}}`
  );
  const posts = await response.json();

  return {
    props: {
      posts,
      tags,
    },
  };
};
