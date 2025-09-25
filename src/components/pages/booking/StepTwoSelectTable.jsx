
import { useState } from "react";
import './Form.css'

export default function StepTwoSelectTable({formData, setFormData, nextStep, prevStep}) {

  const [selectedTable, setSelectedTable ] = useState(formData.tableId || null);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!selectedTable) return alert("Please select a table");
  setFormData({...formData, tableId: selectedTable});
  nextStep();
}

const availableTables = [
  { id: 1, number: 1, seats: 2 },
  { id: 2, number: 2, seats: 4 },
  { id: 3, number: 3, seats: 6 },
]; // Replace with API data


  return (
  
  <>
  <h4>There are tables available!</h4>
  <span>Please select a table:</span>

  <form className="form" onSubmit="handleSubmit">
    {availableTables.map((table) =>(
      <div key={table.id}>
        <input
        type="radio"
        id={`table-${table.id}`}
        name="table"
        value={table.id}
        checked={selectedTable === table.id}
        onChange={() => setSelectedTable(table.id)}
        />
        <label htmlFor={'table-${table.Id}'}>Table {table.number} - Seats {table.seats}</label>
      </div>
    ))}

    <div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Select Table</button>
    </div>

  </form>



  </>
  
  )
}
