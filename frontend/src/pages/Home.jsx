/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React,{ useState, useEffect} from "react";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import Spinner from "../components/Spinner";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import {AiOutLineEdit} from "react-icons/ai"
import { BsInfoCircle} from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md' ;
const Home =  ()=>{
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect (() => {
        setLoading (true);
        axios
        .get('http://localhost:5555/books')
        .then((response) => {
        setBooks (response.data.data);
        setLoading (false);
        })
        .catch(error)=>{
            console.log(error);
        });
    },[]);
    return(
        <div className="p-4">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl my-8">Books List</h1>
            <Link to ='/books/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl'/>
            </Link>
        </div>
        { loading ? (
                <Spinner/>
        )}
       </div>
    )
    
    
    
)
export default Home;