/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spinner } from "react-bootstrap";

import RecentPost from "@/components/RecentPost/RecentPost";
import Post from "@/components/Post/Post";

import "./News.scss";

interface NewsPops {
  news: any;
  isFetching: boolean;
  scrollRef: React.RefObject<HTMLInputElement>;
}

const News = ({ news, isFetching = false, scrollRef }: NewsPops) => {
  if (!news || news?.length === 0 || isFetching) {
    return (
      <div className="py-5 news">
        <div className="container py-5">
          {isFetching && (
            <div className="d-flex justify-content-center py-3">
              <Spinner />
            </div>
          )}
          <div className="d-flex justify-content-center py-3">
            <p>No posts available.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5 news" ref={scrollRef}>
      <div className="container py-5">
        <h1 className="main-heading">
          Let's Create a Healthier <br />
          Tomorrow, Together!
        </h1>
      </div>

      <div className="container">
        <h1 className="section-heading py-2">From the Blog</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="single-news">
              <RecentPost post={news[0]} />
            </div>
          </div>
          <div className="col-lg-6 mt-2 mt-md-0">
            <div className="d-flex flex-column justify-content-between h-100 gap-2">
              {news?.slice(1, 3).map((post: any, index: number) => (
                <Post post={post} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
