import React from 'react'
import Card from '../Cards/Card'
const ForPracticles = () => {

    const object = [
        // {
        //     subj:"python",
        //     link:"https://www.google.com"
        // },
        // {
        //     subj:"OS",
        //     link:"https://drive.google.com/drive/folders/1F8_QipFo4SM80ASghmFCrehhTEW2SuXR?usp=drive_link"
        // },
        {
            subj:"Competitve Programming(CP)",
            link:"https://veiled-tarragon-c59.notion.site/6th-Semester-Practicals-5d5a209a28554f30957640a337ba9b7c"
        },
        

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