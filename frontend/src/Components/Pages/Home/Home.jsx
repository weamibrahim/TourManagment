import './Home.css';
import Search from '../../Parts/Search/Search';
import { Helmet } from 'react-helmet-async';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";
import { CgViewComfortable } from "react-icons/cg";
import SwiperSlides from '../../Parts/Swiper/Swiper';
import PageTransition from '../../Parts/Animation/PageTransition';
function Home() {
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className="container my-5 ">
         
            <div className="row m-3 bg-body-tertiary p-5 rounded-5 ">
                <div className="col-md-6  ">
                    <h2  style={{  fontFamily: "Sofia"}}>Explore the world <span className='text-warning'> with us! </span></h2>
              <p className='my-5'> Discover breathtaking destinations,
                 unique experiences and unforgettable adventures,
                 Book your perfect tour with ease and embark on an unforgettable journey.
              </p>  </div>
                <div className="col-md-6  ms-auto">
                    <div className="row">
                         <div className="col-md-4 ">
                            <img className='rounded-4 img-fluid' src="https://img.freepik.com/free-photo/vertical-shot-beautiful-eiffel-tower-captured-paris-france_181624-45445.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user" />
                            </div>
                        <div className="col-md-4 my-4">
                            <img className='rounded-4 img-fluid' src="https://img.freepik.com/free-photo/ferris-wheel-park_74190-5032.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user" />
                            </div>
                            
                           
                            <div className="col-md-4 my-5">
                            <img className='rounded-4 img-fluid ' src="https://img.freepik.com/free-photo/palm-alley-tropical-egyptian-beach_155003-10002.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user" />
                            </div>

                            
                    </div>
                </div>
            </div>
            <Search/>
          
            <div>
                <h1 style={{  fontFamily: "Sofia"}}>Gallery</h1>
<SwiperSlides/>
                <div className='row m-3'>
  <div className='col-md-4 my-1' >
    <img src='https://img.freepik.com/free-photo/sky-beautiful-vacation-ocean-house_1203-5310.jpg?t=st=1721687364~exp=1721690964~hmac=26bf9c28d583537338905228143835b0014458c03de6c7d45471ce891f29cb60&w=360' className='img-fluid  rounded-4'/>
  </div>

  <div className='col-md-8' >
    <div className='row mb-2'>
      <div className='col-md-6 my-1'>
        <img className='img-fluid  rounded-4' src="https://img.freepik.com/free-photo/3d-render-yacht-tropical-island_1048-5501.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
      </div>
      <div className='col-md-6 my-1'>
        <img className='img-fluid  rounded-4' src="https://img.freepik.com/free-photo/aerial-view-lao-lading-island-krabi-thailand_335224-1184.jpg?t=st=1721687587~exp=1721691187~hmac=575b6d708fba15f3eb36b1d3fc5c6c143bbe877ee066e9047c821a247a08faca&w=1060"/>
      </div>
    </div>
    <div className='row'>
      <div className='col-12 my-1'>
        <img className='img-fluid rounded-4' src="https://img.freepik.com/free-photo/wide-shot-kualoa-ranch-hawaii-usa_181624-11701.jpg?t=st=1721687950~exp=1721691550~hmac=cd9c36bf9e285199fccfbec159b98ec162c349ff79aa6fe1e96230257338665d&w=1060" style={{maxHeight: "270px", width: "100%"}} />
      </div>
    </div>
</div>


                
                </div>
            </div>
          
                
                <div className='row my-5 mx-3 bg-body-tertiary p-5 rounded-4'>
                    <div className='col-md-4  ' >
                        <h1>Experince  the new adventure</h1>
                        <p>Explore the world with us! Discover breathtaking destinations, unique experiences and unforgettable adventures, Book your perfect tour with ease and embark on an unforgettable journe</p>
                        <div ><AiFillSafetyCertificate className='fs-3 text-warning'/>
                        <span className='fs-4 text-dark mx-2'>Safe Travelling</span>
                        <p>Explore the world with us! Discover breathtaking destinations, </p>
                        </div>
                        <div ><MdOutlinePriceChange className='fs-3 text-warning' />
                        <span className='fs-4 text-dark mx-2'>Affordable price</span>
                        <p>Explore the world with us! Discover breathtaking des</p>
                        </div>
                        <div><CgViewComfortable className='fs-3 text-warning'/>
                        <span className='fs-4 text-dark mx-2'>comfort accomndation</span>
                        <p>Explore the world with us! Discover breathtaking destinations, unique experiences and unforgettable adventures,e</p>

                        </div>
                      </div>

                      <div className='col-md-8'>
                        <img src="https://img.freepik.com/free-photo/woman-walking-railay-beach-krabi-thailand_335224-1206.jpg?t=st=1721686134~exp=1721689734~hmac=873488df5e108cdbc09094dbda0658033e6f67e9f3608015c256dcc735275e56&w=1060" className='img-fluid rounded-4'/>    
                      </div>
           </div>
        </div>
        </>
    );
}

export default PageTransition(Home);