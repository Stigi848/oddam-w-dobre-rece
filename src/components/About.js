import React from 'react';
import imgPeople from '../assets/assets/People.jpg';
import img2 from '../assets/assets/Decoration.svg';
import imgSignature from '../assets/assets/Signature.svg';

const About = () =>
    <div >
        <div className='about' style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10 }}>
            <div className='aboutLeft' ><h1>O nas</h1> <img src={img2} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius, esse cumque, rem dignissimos voluptates tenetur quaerat accusamus et, optio odio autem odit alias reiciendis molestiae. Necessitatibus perferendis impedit consectetur?</p> <img src={imgSignature} />
            </div>

            <div><img src={imgPeople} alt="people" className='imgpeople' /></div>

        </div>
    </div>
export default About;