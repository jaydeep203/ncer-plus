import React from 'react'
import Card from '../Cards/Card'
const ForPracticles = () => {

    const object = [
        {
            subj:"python",
            link:"https://www.google.com"
        },
        {
            subj:"OS",
            link:"https://drive.google.com/drive/folders/1F8_QipFo4SM80ASghmFCrehhTEW2SuXR?usp=drive_link"
        }

    ];

  return (
    <div className='cardBody practicles'>
        {
            object.map((item)=>(
                <Card subj={item.subj} link={item.link} />
            ))
        }
    </div>
  )
}

export default ForPracticles