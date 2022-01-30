import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const ViewOne = (props) => {
    // grab the variable name from the url
    const {id} = useParams();

    const [thisAuthor, setThisAuthor] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/authorz/${id}`)
            .then(res => {
                console.log(res.data)
                setThisAuthor(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <Link to="/"><button class="btn btn-warning mb-5">Home</button></Link>
            <h3>{thisAuthor.authorName}</h3>
        </div>
    )
};

export default ViewOne;