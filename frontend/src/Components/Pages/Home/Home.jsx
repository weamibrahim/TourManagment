import './Home.css';
import Search from '../../Parts/Search/Search';
import { Helmet } from 'react-helmet-async';
function Home() {
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className="container">
            <div className="row my-4 ">
                <div className="col-md-6  ">
                    <h1  style={{  fontFamily: "Sofia"}}>Enjoy your your     Tour</h1>
              <p className='my-3'> Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                 galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

                <div className='row'>
                <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4 ' src="https://img.freepik.com/free-photo/building-with-domes-turrets_1122-1137.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                   
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4 ' src="https://img.freepik.com/free-photo/closeup-shot-male-standing-looking-giza-necropolis-egypt_181624-39408.jpg?t=st=1720886566~exp=1720890166~hmac=efdfcd99c10315c89bc87eb964c551d6ac2494709a2247cd6e1ff9be59319632&w=1060"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/closeup-shot-female-standing-front-medinet-habu-temple-egypt_181624-45877.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/viewpoint-alabaster-mosque-blue-sky-cairo-egypt_181624-52492.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                   
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/big-ben-house-parliament-night-london-united-kingdom_268835-1396.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                      <div className='col-md-3 my-3 '>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/woman-standing-celsus-library-ephesus-ancient-city-izmir-turkey_335224-583.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                    
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/woman-standing-theater-hierapolis-ancient-city-pamukkale-turkey_335224-619.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                    <div className='col-md-3 my-3 '>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/young-man-walking-towards-great-sphinx-giza_181624-51674.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/young-man-walking-egyptian-temple_181624-44493.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
                    </div>
                    <div className='col-md-3 my-3 '>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/wat-arun-temple-bangkok-thailand_335224-971.jpg?t=st=1719255529~exp=1719259129~hmac=1beb58d614b95e2715da1def17c01c113552e89b791b5f179d1d4e6845bf4110&w=1380"/>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;