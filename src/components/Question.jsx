import React, { useState } from 'react'
import { questions } from '../faq'
import { useNavigate } from 'react-router-dom'

export const Question = () => {

    const [plus, setPlus] = useState(0)
    const navigate=useNavigate()

   
  return (
    
    <div>
        {questions.map((obj)=>
        <div key={obj.id} className='shadow p-3 mb-3 bg-body rounded'>
            <div className='d-flex justify-content-between'>
                <p className='fw-bolder'>{obj.title}</p>
                <i class="fa-solid fa-plus" id={obj.id} onClick={(event)=>setPlus(event.target.id)}></i>
            </div>
            {plus==obj.id && <div>
                <p>{obj.info}</p>
            </div>}
            
        </div>
        )}
        <button onClick={()=>navigate('/')}>Go back to homepage</button>
    </div>
  )
}
