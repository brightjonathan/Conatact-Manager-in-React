import './App.css';
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddContact from './Component/AddContact';
import ContactList from './Component/ContactList';
import Header from './Component/Header';
import ContactDetails from './Component/ContactDetails';
import EditContact from './Component/EditContact'
import contact from './Image/contact.png'
// import  Data from "./Component/Data"

const App = () => {

  //created an empty array for all the data
  const [data, setdate] = useState([])

  //creating a useState for the searching and passing it as props
  const [searchinput, setsearchinput]= useState("")
  const [searchresult, setsearchresult]= useState("")

  //function for the delete
  const deleteContact = (id) => {
    setdate(data.filter((e)=> e.id !== id))
  }

  //function to save contact
  const save_task = (e)=> {

    //creating an id for the new list
    const id = Math.floor(Math.random()* 10000) + 1
    //new list
    const newContact = {id, ...e}
    setdate([...data,  newContact])

  }

  // **** retriving the data from the localStorage **** //
  useEffect(() => {
  const retrive = localStorage.getItem("data")
  const loading = JSON.parse(retrive)

  if(loading){
    setdate(loading)
  }
}, [])

     useEffect(() => {
     const storage =  JSON.stringify(data)
     localStorage.setItem("data", storage)
  }, [data])


  //for the search handler
  const searchHandler = (search)=>{
    setsearchinput(search)

    //writing condtional statement to filter through the data
    if(searchinput !== ""){
      const newcontactlist = data.filter((e)=>{
       return Object.values(e)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
      })
      setsearchresult(newcontactlist)
    }else{
      setsearchresult(data)
    }
  }

  //function for the Edit button 
  //but editing us at once,not properly working 
  // const updateContactHandler = ({name, index})=> {
  //   setdate(data.map((e)=>{
  //       if(e.index === index ){
  //         return {...e, name}
  //         // console.log({...e, name})
  //       }
  //       return e
  //   }))  
  // }

//passing props in router using render method
  return (
    
    <div  className="container">

      <Router>

      <Header/> 

      <Switch>
      <Route 
      path="/" 
      exact 
      render={(e)=>(
        <ContactList {...e} 
        data={searchinput.length < 1 ? data : searchresult}
        onDelete={deleteContact}
        input={searchinput}
        searchkeyword={searchHandler}
        />
      )}/>

      <Route path="/add" 
        render={(e)=>(
          <AddContact {...e}
          save={save_task}
          />
        )}
      />

      {/* <Route path="/edit" 
      render={(e)=>(< EditContact {...e} 
      updateContactHandler={updateContactHandler}
      />)}/> */}

      <Route path="/contact/:id" component={ContactDetails}/>
      
      </Switch>
     
      </Router>
     
    </div>
  );
}

export default App;
