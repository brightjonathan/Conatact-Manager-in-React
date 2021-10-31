import {useRef} from 'react'
import ContactListTwo from './ContactListTwo'
import { Link } from  "react-router-dom";

const ContactList = ({data, onDelete,  input, searchkeyword,  editFun1}) => {
    
 const input1 = useRef("")

    const getSearch =()=>{
        searchkeyword(input1.current.value)
    }
    
    return (
        <div>
            <h4>Contact List <Link to="/add"  className="link">Add contact</Link> </h4>
            <div>
                <input ref={input1} type="search" className="searchbar" placeholder="Search contacts..." value={input} onChange={getSearch}/>
            </div>
            {data.map((e)=>{
                 return <ContactListTwo key={e.id} e={e} Delete={onDelete}  editFun2={editFun1}/>
            })}
        </div>
    )
}

export default ContactList
