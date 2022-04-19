import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'

const Job = (job) => {
    const {company, dates, duties, title} = job

    return (        
        <article>            
            <h1>{title}</h1>
            <p className='dates'>{dates}</p>
            {duties.map((duty, index) => {
                return (
                    <div key={index} className='duties'>
                        <FaAngleDoubleRight className='icon'/>
                        <p key={index}>{duty}</p>
                    </div>
                )
            })}
            
        </article>
    )
}

export default Job