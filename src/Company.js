import React from 'react'

const Company = ({company, order, index, setIndex}) => {    
    return (
        <button            
            onClick={() => setIndex(order)}
            className={order === index ? 'active' : ''}>
                {console.log(index)}
                {console.log(order)}

                <h1>{company}</h1>
            </button>
    )
}

export default Company