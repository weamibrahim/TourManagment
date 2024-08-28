import "./Home.css";

import { Helmet } from "react-helmet-async";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";
import { CgViewComfortable } from "react-icons/cg";
import SwiperSlides from "../../Parts/Swiper/Swiper";
import PageTransition from "../../Parts/Animation/PageTransition";
import SectionScroll from "../../Parts/Animation/ScrollSection";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="container my-5 ">
        <div className="row m-3 bg-body-tertiary p-5 rounded-5 ">
          
          <motion.div
            className="col-md-6  "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          >
            <div>
              <h2 style={{ fontFamily: "Sofia" }}>
                Explore the world
                <span className="text-warning"> with us! </span>
              </h2>
              <p className="my-5">
                
                Discover breathtaking destinations, unique experiences and
                unforgettable adventures, Book your perfect tour with ease and
                embark on an unforgettable journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6 "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="ms-auto">
              <div className="row">
                <div className="col-md-4 ">
                  <img
                    className="rounded-4 img-fluid"
                    src="https://img.freepik.com/free-photo/vertical-shot-beautiful-eiffel-tower-captured-paris-france_181624-45445.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"
                  />
                </div>
                <div className="col-md-4 my-4">
                  <img
                    className="rounded-4 img-fluid"
                    src="https://img.freepik.com/free-photo/ferris-wheel-park_74190-5032.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"
                  />
                </div>

                <div className="col-md-4 my-5">
                  <img
                    className="rounded-4 img-fluid "
                    src="https://img.freepik.com/free-photo/palm-alley-tropical-egyptian-beach_155003-10002.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ////////////////////////////////////////////////////About///////////////////////////////////////////////////////// */}
<div className="row my-5">
  
<div className="col-md-6 col-sm-12">
  <div className="position-relative">
    <img
      src="https://img.freepik.com/free-photo/kelingking-beach-nusa-penida-island-bali-indonesia_335224-335.jpg?ga=GA1.1.1848435922.1723918661&semt=ais_hybrid"
      className="main_img img-fluid"
      alt="Main"
    />
    <img
      src="https://img.freepik.com/free-photo/view-hot-air-balloons-moroccan-sky_268835-3945.jpg?ga=GA1.1.1848435922.1723918661&semt=ais_hybrid"
      className="branch_img img-fluid"
      alt="Branch"
    />
    <img
      src="https://img.freepik.com/free-photo/infinity-caribbean-resort-vacation-tree_1203-5297.jpg?ga=GA1.1.1848435922.1723918661&semt=ais_hybrid"
      className="branch2_img img-fluid"
      alt="Branch2"
    />
  </div>
</div>

  <div className="col-md-6">
    <h4 style={{ fontFamily: "Sofia" }} className="text-warning">About Us</h4>
  
      <span className="fw-bold fs-3">We  Recommend Beautiful 
         </span>
        
         <p className="fs-3"> Beautiful  Distanstions Every Month</p>
         <p>Let's chose your dream destination here we provide  many destination  and we offer best destination every week</p>
         <div className="row">
          <div className="col-md-3 text-center bg-body-secondary p-3 rounded-3 m-2" >
            
          <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="fw-bold">
            {isVisible ? <CountUp start={0} end={1000} duration={2.75} /> : "0"}+
          </div>
        )}
      </VisibilitySensor>
            <div>Our Explorers</div>

          </div>
          <div className="col-md-3 text-center bg-body-secondary p-3 rounded-3 m-2  " >
          <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="fw-bold">
            {isVisible ? <CountUp start={0} end={100} duration={2.75} /> : "0"}+
          </div>
        )}
      </VisibilitySensor>
          <div>Destination</div>
          </div>
          <div className="col-md-3 text-center bg-body-secondary p-3 rounded-3 m-2" >
          <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="fw-bold">
            {isVisible ? <CountUp start={0} end={20} duration={2.75} /> : "0"}+
          </div>
        )}
      </VisibilitySensor>
          <div>Years Experience</div>
          </div>
          
         </div>
  </div>
</div>













      {/* //////////////////////////////////////////////////////Gallery///////////////////////////////////////////////////////// */}

        <div>
          <h1 style={{ fontFamily: "Sofia" }}>Gallery</h1>
          <SwiperSlides />
          <div className="row m-3">
            <div className="col-md-4 my-1">
              <SectionScroll>
                <img
                  src="https://img.freepik.com/free-photo/sky-beautiful-vacation-ocean-house_1203-5310.jpg?t=st=1721687364~exp=1721690964~hmac=26bf9c28d583537338905228143835b0014458c03de6c7d45471ce891f29cb60&w=360"
                  className="img-fluid  rounded-4"
                />
              </SectionScroll>
            </div>

            <div className="col-md-8">
              <div className="row mb-2">
                <div className="col-md-6 my-1">
                  <SectionScroll>
                    <img
                      className="img-fluid  rounded-4"
                      src="https://img.freepik.com/free-photo/3d-render-yacht-tropical-island_1048-5501.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"
                    />
                  </SectionScroll>
                </div>
                <div className="col-md-6 my-1">
                  <SectionScroll>
                    <img
                      className="img-fluid  rounded-4"
                      src="https://img.freepik.com/free-photo/aerial-view-lao-lading-island-krabi-thailand_335224-1184.jpg?t=st=1721687587~exp=1721691187~hmac=575b6d708fba15f3eb36b1d3fc5c6c143bbe877ee066e9047c821a247a08faca&w=1060"
                    />
                  </SectionScroll>
                </div>
              </div>
              <div className="row">
                <div className="col-12 my-1">
                  <SectionScroll>
                    <img
                      className="img-fluid rounded-4"
                      src="https://img.freepik.com/free-photo/wide-shot-kualoa-ranch-hawaii-usa_181624-11701.jpg?t=st=1721687950~exp=1721691550~hmac=cd9c36bf9e285199fccfbec159b98ec162c349ff79aa6fe1e96230257338665d&w=1060"
                      style={{ maxHeight: "270px", width: "100%" }}
                    />
                  </SectionScroll>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5 mx-3 bg-body-tertiary p-5 rounded-4">
          <div className="col-md-4  ">
            <SectionScroll>
              <h1>Experince the new adventure</h1>
              <p>
                Explore the world with us! Discover breathtaking destinations,
                unique experiences and unforgettable adventures, Book your
                perfect tour with ease and embark on an unforgettable journe
              </p>
              <div>
                <AiFillSafetyCertificate className="fs-3 text-warning" />
                <span className="fs-4 text-dark mx-2">Safe Travelling</span>
                <p>
                  Explore the world with us! Discover breathtaking destinations,{" "}
                </p>
              </div>
              <div>
                <MdOutlinePriceChange className="fs-3 text-warning" />
                <span className="fs-4 text-dark mx-2">Affordable price</span>
                <p>Explore the world with us! Discover breathtaking des</p>
              </div>
              <div>
                <CgViewComfortable className="fs-3 text-warning" />
                <span className="fs-4 text-dark mx-2">
                  comfort accomndation
                </span>
                <p>
                  Explore the world with us! Discover breathtaking destinations,
                  unique experiences and unforgettable adventures,e
                </p>
              </div>
            </SectionScroll>
          </div>

          <div className="col-md-8">
            <SectionScroll>
              <img
                src="https://img.freepik.com/free-photo/woman-walking-railay-beach-krabi-thailand_335224-1206.jpg?t=st=1721686134~exp=1721689734~hmac=873488df5e108cdbc09094dbda0658033e6f67e9f3608015c256dcc735275e56&w=1060"
                className="img-fluid rounded-4"
              />
            </SectionScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTransition(Home);
