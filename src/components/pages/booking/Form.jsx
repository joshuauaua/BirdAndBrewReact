import './Form.css'
import { useState } from 'react'
import Availability from './Availability'
import GuestInfo from './GuestInfo'
import SelectTable from './SelectTable'
import Confirmation from './Confirmation'




export default function Form(){

const [page, setPage] = useState(0)

const FormTitles = ["Availability", "Select Table", "Personal Info", "Confirmation"]

const PageDisplay = () => {

    if (page === 0){return <Availability/>}
    else if (page === 1){return <SelectTable/>}
    else if (page === 2){return <GuestInfo/>}
    else {return <Confirmation/>}
    
}


  return (
  <>
  <div className="form">
    
    <div className="progressBar">
      <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"} }></div>
    </div>

    <div className="form-container">

      <div className="form-header">
        <h1>{FormTitles[page]}</h1>
      </div>

      <div className="form-body">
        {PageDisplay()}
        </div> 

      <div className="form-footer">


      <button   
      disabled={page == 0}
      onClick={() => {
        setPage((currPage) => currPage -1)}
        }> Prev</button>

      <button  
      disabled={page == FormTitles.length - 1}
      onClick={() => {
        setPage((currPage) => currPage + 1)}
        }> Next</button>
      </div>

    </div>
  </div>
  
  </>
  )

}

 