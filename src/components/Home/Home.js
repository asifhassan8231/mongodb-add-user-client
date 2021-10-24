import React, { useRef } from 'react';

const Home = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = e => {
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const newUser = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added Successfully!')
                    e.target.reset();
                }
            })
        e.preventDefault();


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" ref={nameRef} />
                <input type="email" placeholder="email" ref={emailRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Home;