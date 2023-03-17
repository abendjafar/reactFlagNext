import React, { useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Blog = () => {

    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (content.length < 140) {
            setError(true)
        }else{
            setError(false)
        }
    }

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />

            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Name' />
                <textarea
                style ={{border : error ? "3px solid red" : "1px solid #61dafb"}}
                placeholder='Message'
                    onChangeCapture={(e) => setContent(e.target.value)}
                ></textarea>
                {error && <p>Veuillez écrire un minimum de 140 caracteres</p>}

                <input type="submit" value="Envoyer" />

            </form>
            <ul></ul>



        </div>
    );
};

export default Blog;