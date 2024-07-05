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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="col-md-6  ms-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <img className='rounded-4 img-fluid' src="https://img.freepik.com/free-photo/full-shot-woman-travel-concept_23-2149153259.jpg?t=st=1718480117~exp=1718483717~hmac=dae6d6fd0e50632e0761d3926b1f2b343d54a3bca255d2ebea41cb32a4817f30&w=360" />
                            </div>
                            <div className="col-md-4 my-4">
                            <img className='rounded-4 img-fluid ' src="https://img.freepik.com/free-photo/full-shot-woman-travel-concept_23-2149153259.jpg?t=st=1718480117~exp=1718483717~hmac=dae6d6fd0e50632e0761d3926b1f2b343d54a3bca255d2ebea41cb32a4817f30&w=360" />
                            </div>

                            <div className="col-md-4 my-5">
                            <img className='rounded-4 img-fluid' src="https://img.freepik.com/free-photo/full-shot-woman-travel-concept_23-2149153259.jpg?t=st=1718480117~exp=1718483717~hmac=dae6d6fd0e50632e0761d3926b1f2b343d54a3bca255d2ebea41cb32a4817f30&w=360" />
                            </div>
                    </div>
                </div>
            </div>
            <Search/>
            <div>
                <h1>gellrrey</h1>

                <div className='row'>
                    <div className='col-md-3 my-3 '>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/wat-arun-temple-bangkok-thailand_335224-971.jpg?t=st=1719255529~exp=1719259129~hmac=1beb58d614b95e2715da1def17c01c113552e89b791b5f179d1d4e6845bf4110&w=1380"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4 ' src="https://img.freepik.com/free-photo/beautiful-cherry-blossoms-trees-blooming-spring_335224-878.jpg?t=st=1719256126~exp=1719259726~hmac=e39101623914af798894282642c8daa5aa5465a9483c009b96c3804001828ee4&w=1060"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?t=st=1719256173~exp=1719259773~hmac=cd1c6ee4e5e897cb53885455996eaa1d9379ed3baa87974f0a9c75e009ba37c0&w=1060"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/blue-villa-beautiful-sea-hotel_1203-5316.jpg?t=st=1719256012~exp=1719259612~hmac=37e68eb59df89cdb18cebf73990c9b9ab316b58e5222f7a1020683c26f3d1c5e&w=1060"/>
                    </div>
                    {/* <div className='col-md-3'> 
                        <img className='img-fluid imgHover rounded-4'src="https://img.freepik.com/free-photo/vacation-water-sea-nature-modern_1203-4653.jpg?t=st=1719256378~exp=1719259978~hmac=39882703b03cabc16371d15d856d02cd16206c3009518e3368bae55864acbe12&w=360"/>
                    </div> */}
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/blue-villa-beautiful-sea-hotel_1203-5316.jpg?t=st=1719256012~exp=1719259612~hmac=37e68eb59df89cdb18cebf73990c9b9ab316b58e5222f7a1020683c26f3d1c5e&w=1060"/>
                    </div>
                      <div className='col-md-3 my-3 '>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/wat-arun-temple-bangkok-thailand_335224-971.jpg?t=st=1719255529~exp=1719259129~hmac=1beb58d614b95e2715da1def17c01c113552e89b791b5f179d1d4e6845bf4110&w=1380"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4 ' src="https://img.freepik.com/free-photo/beautiful-cherry-blossoms-trees-blooming-spring_335224-878.jpg?t=st=1719256126~exp=1719259726~hmac=e39101623914af798894282642c8daa5aa5465a9483c009b96c3804001828ee4&w=1060"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?t=st=1719256173~exp=1719259773~hmac=cd1c6ee4e5e897cb53885455996eaa1d9379ed3baa87974f0a9c75e009ba37c0&w=1060"/>
                    </div>
                    <div className='col-md-3 my-3 '>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/wat-arun-temple-bangkok-thailand_335224-971.jpg?t=st=1719255529~exp=1719259129~hmac=1beb58d614b95e2715da1def17c01c113552e89b791b5f179d1d4e6845bf4110&w=1380"/>
                    </div>
                    <div className='col-md-3 my-3'>
                        <img className='img-fluid imgHover rounded-4' src="https://img.freepik.com/free-photo/blue-villa-beautiful-sea-hotel_1203-5316.jpg?t=st=1719256012~exp=1719259612~hmac=37e68eb59df89cdb18cebf73990c9b9ab316b58e5222f7a1020683c26f3d1c5e&w=1060"/>
                    </div>

                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;