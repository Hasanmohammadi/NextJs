import Link from "next/link";

import blogStyles from "../styles/blogs.module.css";
import { cdnHandlerFn } from "../helpers/cdnHandler";
import { gregorian_to_jalali } from "../helpers/convertDate";

const Blog = ({ blog }) => {
  const year = blog.createdAt.slice(0, 4);
  const month = blog.createdAt.slice(5, 7);
  const day = blog.createdAt.slice(8, 10);

  return (
    <Link
      href={{
        pathname: `/[id]`,
        query: {
          id: blog.id,
        },
      }}
    >
      <a className={blogStyles.link}>
        <div className={blogStyles.blog}>
          <img
            src={cdnHandlerFn(blog.cover)}
            alt={blog.title}
            className={blogStyles.image}
          />
          <h3 className={blogStyles.title}>{blog.title}</h3>
          <p className={blogStyles.date}>
            {gregorian_to_jalali(+year, +month, +day)}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Blog;
