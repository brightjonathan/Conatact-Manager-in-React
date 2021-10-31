import React from 'react'
import { Link } from 'react-router-dom' 
import profile from '../Image/profile.jpg'

const ContactDetails = (props) => {
    //de-structuring the props 
    const {name, number, email} = props.location.state.contact 
    return (
        <div>
             {/* {<img src={profile} alt={profile} style={{height:"100px", width: "100px" }}/>} */}
            
            <div>
                <h3>Contact detail <Link to="/" className="contactdetail">Contact list</Link></h3>
                <div style={{marginTop: "10px", color:"blue"}}>
                <h5>{name}</h5>
                <p>{number}</p>
                <p>{email}</p>
                </div>
               
            </div>
        </div>
    )
}

export default ContactDetails
