import {useState} from 'react'
import { Link } from  "react-router-dom";

const AddContact = ({save}) => {

     const [name, setname] = useState("")
     const [number, setnumber] = useState("")
     const [email, setemail] = useState("")

     //creating a function for the onsubmit 
     const handleEvent = (e) => {
          e.preventDefault()

          //calling the props
          save({name,number,email})

          //clearing the input
          setname("")
          setnumber("")
          setemail("")

     }

    return (
        <form  onSubmit={handleEvent}>

             <h4>Add contact <Link to="/"  className="link" > Contact list</Link> </h4>

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

        <input type="submit" className="btn btn-block" value="save" />
        </form>
       
    )
}

export default AddContact
