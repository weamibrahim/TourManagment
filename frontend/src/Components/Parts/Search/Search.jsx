import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiPinDistanceLine } from "react-icons/ri";
import { MdOutlinePeople } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import { TfiMoney } from "react-icons/tfi";
import './Search.css';
function Search() {

const cityRef = useRef('');
const priceRef = useRef(0);
const maxGroupRef = useRef(0);
const navigate = useNavigate();

const searchHandler = async() => {
    console.log(cityRef.current.value, priceRef.current.value, maxGroupRef.current.value);
    const city = cityRef.current.value;
    const price = priceRef.current.value;
    const maxGroup = maxGroupRef.current.value;

    if(city === '' || price === '' || maxGroup === '') {
        alert('All fields are required');
}

const res = await fetch(`https://tour-managment-three.vercel.app/api/tour/search?city=${city}&distance=${price}&maxGroupSize=${maxGroup}`);
const data = await res.json();
    navigate(`/search?city=${city}&distance=${price}&maxGroupSize=${maxGroup}`, {state: data});


}
    return (
        <div className="container">
            <h1>Search</h1>
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded-5">
                <div className="row g-3 align-items-center">
                    <div className="col-md-3 col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text">
                                <CiLocationOn className="fs-4 text-warning" />
                            </span>
                            <input 
                                type="text" 
                                className="form-control rounded-2" 
                                placeholder="Where are you going?" 
                                ref={cityRef} 
                            />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text">
                                <TfiMoney className="fs-4 text-warning" />
                            </span>
                            <input 
                                type="number" 
                                className="form-control rounded-2" 
                                placeholder="price $" 
                                ref={priceRef} 
                            />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text">
                                <MdOutlinePeople className="fs-4 text-warning" />
                            </span>
                            <input 
                                type="number" 
                                className="form-control rounded-2" 
                                placeholder="0" 
                                ref={maxGroupRef} 
                            />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-grid">
                        <button 
                            className="btn btn-warning" 
                            onClick={searchHandler}
                        >
                            <CiSearch className="fs-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;