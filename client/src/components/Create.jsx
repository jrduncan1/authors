import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const Create = (props) => {
    const history = useHistory();

    const [authorName, setAuthorName] = useState("");

    const [errors, setErrors] = useState([]);

    const createAuthor = (e) => {
        e.preventDefault();

        const newAuthor = {
            authorName
        }

        axios.post("http://localhost:8000/api/authorz", newAuthor)
            .then(res => {
                console.log(res.data)
                console.log("SUCCESS POSTING TO DATABASE")
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
            <form onSubmit={createAuthor} class="form-control">
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
                <h5>Add Author:</h5>
                <div class="d-flex flex-column">
                    <div>
                        <label for="authorName">Author:</label>
                        <input onChange={e => setAuthorName(e.target.value)} value={authorName} type="text" class="ms-3" />
                    </div>
                </div>
                <button className="btn btn-primary mt-3">Add!</button>
            </form>
        </div>
    )
}

export default Create;