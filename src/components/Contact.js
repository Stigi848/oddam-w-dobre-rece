import React from 'react';
import imgblanket from '../assets/assets/Background-Contact-Form.jpg';
import img2 from '../assets/assets/Decoration.svg'
const Contact = () => {
    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 5 }}>
                <div className='imgblanket'><img src={imgblanket} /></div>
                <div className='contact'>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={img2} />
                    <form className='form'>
                        <label htmlFor="">Wpisz swoje imię: 
                            <input type="text" name='name' placeholder='Krzysztof' /></label>

                        <label htmlFor="">Wpisz swój e-mail:
                            <input type="email" name='name' placeholder='Krzysztof@IcantCode.com' />   </label>

                        <br />
                        <label>Wpisz swoją wiadomość: <br /><textarea name="write" id="" cols="30" rows="10" placeholder='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit vero rerum magnam amet dolorem corporis facere placeat.'></textarea>
                        </label>
                        <br/>
                        <input type="submit" value="Wyślij" />
                    </form>
                </div>
            </div>
        </div>);
}

export default Contact;
