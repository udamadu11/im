import { useRef } from "react";

import { ParentBanner } from "./component/ParentBanner/ParentBanner";
import Header from "../../components/Header/Header";
import Facts from "./component/Facts/Facts";
import Pitch from "./component/Pitch/Pitch";
import FAQ from "./component/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import Testimonials from "./component/Testimonials/Testimonials";
import Awards from "./component/Awards/Awards";
import Newsletter from "../../components/Newsletter/Newsletter";
import News from "./component/News/News";

import { useFetchNewsQuery } from "@/services";

const Home = () => {
  const scrollRef = useRef(null);

  const {
    data: news,
    isSuccess: isNewsSuccess,
    isFetching: isNewsFetching,
  } = useFetchNewsQuery({});

  const newsList = isNewsSuccess ? news : [];

  return (
    <div className="home-page">
      <Header />
      <ParentBanner />
      <Facts scrollRef={scrollRef} />
      <Pitch />
      <Testimonials />
      <Awards />
      <News news={newsList} isFetching={isNewsFetching} scrollRef={scrollRef} />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
