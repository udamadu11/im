import { AnimatePresence, motion } from "framer-motion";

import "./Facts.scss";

interface FactsPops {
  scrollRef: React.RefObject<HTMLInputElement>;
}

const Facts = ({ scrollRef }: FactsPops) => {
  return (
    <AnimatePresence>
      <div className="fact-section" ref={scrollRef}>
        <div className="mt-5">
          <h5 className="section-heading mb-4">GET STARTED TODAY</h5>
          <h1 className="section-subheading">
            Smarter Digitization,
            <br />
            Leads to Better Immunization
          </h1>
          <div className="pb-5">
            <div className="container">
              <div className="row my-5">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef }}
                  className="col-md-5 rightImg order-md-2 order-lg-1"
                >
                  <img
                    src="/img/features/features01.png"
                    alt="img"
                    width="100%"
                    className="feature-img"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef }}
                  className="col-md-7 leftDesc order-md-1 order-lg-2 d-flex align-items-center"
                >
                  <div>
                    <h3 className="py-3 fact-heading">
                      Digitized Vaccination records and Reminders
                    </h3>
                    <p className="text-left">
                      Vaccination records are your baby’s first and one of the
                      most crucial health records. ImmunifyMe keeps these
                      records digital, so you do not lose them ever. If you are
                      still using the old paper booklet to keep your child’s
                      vaccination records, find out why you should switch to
                      ImmunifyMe now!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grey-bg">
              <div className="container">
                <div className="row my-5">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ root: scrollRef }}
                    className="col-md-7 leftDesc d-flex align-items-center order-2 order-md-1"
                  >
                    <div>
                      <h3 className="py-3 fact-heading">Telemedicine 2.0</h3>
                      <p className="text-left">
                        Have an urgent meeting, but also need to see a
                        pediatrician? No need to take a day off. Consult with
                        your favourite pediatrician from the comfort of your
                        living room, or even book an in-clinic appointment on
                        your preferred date and time!
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ root: scrollRef }}
                    className="col-md-5 rightImg order-1 order-md-2"
                  >
                    <img
                      src="/img/features/features02.png"
                      alt=""
                      width="100%"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row my-5">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef }}
                  className="col-md-5 rightImg order-md-2 order-lg-1"
                >
                  <img
                    src="/img/features/features03.png"
                    alt="img"
                    width="100%"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef }}
                  className="col-md-7 order-md-1 order-lg-2 d-flex align-items-center"
                >
                  <div>
                    <h3 className="py-3 fact-heading">Digital Prescription</h3>
                    <p className="text-left">
                      All the written prescriptions can be stored and shared
                      whenever needed. So, no more hassles in finding the paper
                      prescription. Store all the health records of your child
                      in one place, never to lose it again!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grey-bg">
              <div className="container">
                <div className="row my-5">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ root: scrollRef }}
                    className="col-md-7 leftDesc d-flex align-items-center order-2 order-md-1"
                  >
                    <div>
                      <h3 className="py-3 fact-heading">Milestone Tracking</h3>
                      <p className="text-left">
                        The first few years are very crucial for your child’s
                        growth. Our intelligent AI-powered programming assesses
                        your child’s growth on various parameters like physical,
                        mental, emotional and cognitive, etc. It predicts the
                        onset of certain anomalies, thus, giving you an early
                        warning to consult the specialists on time!
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ root: scrollRef }}
                    className="col-md-5 rightImg order-1 order-md-2"
                  >
                    <img
                      src="/img/features/features04.png"
                      alt="img"
                      width="100%"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row my-5">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef }}
                  className="col-md-5 rightImg order-md-2 order-lg-1"
                >
                  <img
                    src="/img/features/features05.png"
                    alt="img"
                    width="100%"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef }}
                  className="col-md-7 leftDesc order-md-1 order-lg-2 d-flex align-items-center"
                >
                  <div>
                    <h3 className="py-3 fact-heading">
                      Customized Nutrition Plan
                    </h3>
                    <p className="text-left">
                      It is said that you become what you eat! The first two
                      years are important for your child’s growth and parents
                      often worry about what to feed their child. With the help
                      of one-on-one teleconsultation and our AI-powered
                      recommendation tool, our team of professional
                      nutritionists with specialisation in child nutrition help
                      you choose the right nutrition for your child. All these
                      and more for less than Rs. 10 a day!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Facts;
