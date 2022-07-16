import React from 'react';

const Todos = (props) => {
    console.log(props.todos)
    return (
        <section>
            {
                props.todos.map((data, index) => {
                    return <div key={index}>
                    <p>{data.id}</p>
                    <p>{data.title}</p>
                    <p>{data.desc}</p>
                    </div>
                })
            }
        </section>
    );
};

export default Todos;