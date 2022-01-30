import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';

const Update = (props) => {
    let history = useHistory();

    const {id} = useParams();

    const [authorName, setAuthorName] = useState("");

    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/authorz/" + id)
            .then(res => {
                console.log(res.data)
                setAuthorName(res.data.authorName)
            })
            .catch(err => console.log(err))
    },[])

    const updateAuthor = (e) => {
        e.preventDefault();
        const revisedAuthor = {
            authorName: authorName
        }
        axios.put("http://localhost:8000/api/authorz/" + id, revisedAuthor)
            .then(res => {
                console.log(res.data)
                history.push("/")
            })
            .catch(err => {
                console.log("ERROR POSTING TO DATABASE")
                console.log(err.response.data);
                const {errors} = err.response.data.error;
                const errorMessages = Object.keys(errors).map( error => errors[error].message)
                setErrors(errorMessages);
            })
    }

    return (
        <div>
            <Link to="/"><button class="btn btn-warning mb-5">Home</button></Link>
            <form onSubmit={updateAuthor} class="form-control">
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
                <h5>Edit Author:</h5>
                <div class="d-flex flex-column">
                    <div>
                        <label for="authorName">Author:</label>
                        <input onChange={e => setAuthorName(e.target.value)} value={authorName} type="text" class="ms-3" />
                    </div>
                </div>
                <button className="btn btn-primary mt-3">Submit!</button>
            </form>
        </div>
    )
}

export default Update;
