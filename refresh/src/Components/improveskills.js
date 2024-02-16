import React from 'react';
import { Link } from 'react-router-dom';
export default function ImproveSkills(){
    const list = [
        "Learn new recipes.",
        "Learn new recipes.",
        "Learn new recipes.",
        "Learn new recipes.",
        "Learn new recipes.",
        "Learn new recipes."
    ]

    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/gallery-10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">title1</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>
                        {item}
                    </p>
                ))}
                <Link to= "./login">
                <button className="btn">signup</button>
                </Link>
            </div>
        </div>
    )
}