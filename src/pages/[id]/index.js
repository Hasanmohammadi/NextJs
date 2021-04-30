import { cdnHandlerFn } from '~helpers/cdnHandler';
import postStyle from '~styles/post.module.css';
import { DETAILLE_POST_URL } from '~src/url';
import Link from 'next/link';

const Detaille = ({ post }) => {
  return (
    <>
      <div className={postStyle.container}>
        <h4 className={postStyle.description}>{post.description}</h4>
        <h2>{post.title}</h2>
        <img src={cdnHandlerFn(post.cover)} alt={post.title} width={700} />
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/href/g, "target='_blank' href"),
          }}
        />
        <div className={postStyle.tagContainer}>
          {post.tags.map((tag) => (
            <Link href={`/tags?tag=${tag.id}`} key={tag.id}>
              <a className={postStyle.tag}>{tag.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detaille;

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`${DETAILLE_POST_URL}${id}`);
  const data = await response.json();

  return {
    props: {
      post: data,
      title: data.title,
    },
  };
};
