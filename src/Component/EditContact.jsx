import {useState} from 'react'
import { Link } from  "react-router-dom";

const EditContact = ({ updateContactHandler}) => {

     const [name, setname] = useState("")
     const [number, setnumber] = useState("")
     const [email, setemail] = useState("")

     //creating a function for the onsubmit 
     const update = (e) => {
          e.preventDefault()

          //calling the props
          updateContactHandler({name,number,email})

          //clearing the input
          setname("")
          setnumber("")
          setemail("")

     }

    return (
        <form  onSubmit={update}>

             <h4>Edit contact <Link to="/" className="link"> Contact list</Link> </h4>

       <div className="form-control">
             <label>Name</label>
             <input 
             type="text" 
             required placeholder="Name..." 
             value={name}
             onChange={(e)=> setname(e.target.value)}
             />
            
        </div>

        <div className="form-control" >
             <label>Phone Number</label>
             <input 
             type="text" 
             required placeholder="Number..."
             value={number}
             onChange={(e)=> setnumber(e.target.value)}/>
            
        </div>

        <div className="form-control" >
             <label>Email</label>
             <input 
             type="email" 
             required placeholder="Email..." 
             value={email}
             onChange={(e)=> setemail(e.target.value)}/>
            
        </div>

        <input type="submit" className="btn btn-block" value="Update" />
        </form>
       
    )
}

export default EditContact
