/* eslint-disable @typescript-eslint/no-explicit-any */
import DOMPurify from "dompurify";
import moment from "moment";

import Icon from "../Icon";

import "./Post.scss";

interface PostProps {
  post: any;
}

const Post = ({ post }: PostProps) => {
  const featuredmedia = post ? post?._embedded["wp:featuredmedia"]["0"] : {};
  const author = post ? post?._embedded?.author["0"] : {};
  const content = post ? post?.excerpt?.rendered : {};
  const title = post ? post?.title?.rendered : "";

  return (
    <div className="post h-50">
      <div className="row h-100">
        <div className="col-sm-5">
          <div className="post-img-wrapper">
            <img
              src={featuredmedia?.source_url}
              alt="immunifyme blog post"
              className="post-img"
            />
          </div>
        </div>
        <div className="col-sm-7">
          <div className="post-content">
            <ul>
              <li>
                <a href="#" className="d-flex align-items-center gap-2 ">
                  <Icon icon="/icons/calendar-solid.svg" size={16} />
                  {moment(featuredmedia.date).fromNow()}
                </a>
              </li>
              <li>
                <a href="#">
                  <span>By </span>
                  {author.name}
                </a>
              </li>
            </ul>
            <a
              href={featuredmedia.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{title}</h3>
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
