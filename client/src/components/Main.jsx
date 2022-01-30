import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        retrieveAllAuthors()
    }, [])

    const retrieveAllAuthors = () => {
        axios.get("http://localhost:8000/api/authorz")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }

    const deleteAuthor = (deleteId) => {
        axios.delete("http://localhost:8000/api/authorz/" + deleteId)
            .then(res => {
                console.log(res.data)
                setAuthors(authors.filter( (author) => author._id !== deleteId))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/authors/new"><button class="btn btn-warning mb-5">Create</button></Link>
            <table class="table">
                <thead>
                    <th>Author</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                {
                    authors.map((author, idx) => {
                        return(
                                <tr>
                                    <td>{author.authorName}</td>
                                    <td>
                                        <Link to={"/authors/update/" + author._id}><button class="btn btn-sm btn-secondary">Edit</button></Link>
                                    </td>
                                    <td><button onClick={ () => deleteAuthor(author._id)} class="btn btn-sm btn-danger">Delete</button></td>
                                </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Main;
