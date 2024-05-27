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
        {
            subj:"Machine Learning(ML)",
            link:"https://veiled-tarragon-c59.notion.site/ML-49c6786fb14b49d9b9f77bd5dd561398"
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