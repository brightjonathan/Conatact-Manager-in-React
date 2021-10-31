import React from 'react'
import { Link } from  "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import profile from '../Image/profile.jpg'

const ContactListTwo = ({e, Delete, editFun2}) => {
    return (
        <div className="task">
            
             {/* <img src={profile} alt={profile} style={{height:"50px", width: "50px" }}/> */}
            <Link to={{pathname:`/contact/${e.id}`, state:{contact: e}}} className="link3" >
                <h3>
                {e. name}
                <DeleteIcon onClick={()=>Delete(e.id)} />
                </h3>
                  
                <p>{e. number}
                <Link to="/edit">
                {/* <button onClick={()=> (e.id)} style={{marginLeft: "150px"}}>Edit</button> */}
                </Link>
                 </p>
                </Link>
              
           
           
        </div>
    )
}

export default ContactListTwo
