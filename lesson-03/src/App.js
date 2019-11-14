import React, {useState} from 'react'
import './App.css'

export default function App() {

  const [firstName, setFirstName] = useState("Pratik");
  const [lastName, setLastName] = useState("Patil");
  const [isAbove19, setAbove19] = useState(false);
  const [dietRestriction, setDietRestriction] = useState('None');
  const [currentYear, setCurrentYear] = useState(null);

  function handleFirstNameChange (e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange (e) {
    setLastName(e.target.value)
  }

  function handleAbove19CheckboxClick(e) {
    setAbove19(e.target.checked)
  }

  function handleRadioClick(e) {
    setDietRestriction(e.target.value)
  }

  function handleCurrentYear(e){
    const nextYear = Number(e.target.value);
    if (Number.isFinite(nextYear)) {
      setCurrentYear(nextYear)
    }
  }

  return (
    <div className='App'>
      <div className='App-content'>
        <h1>Registration Form</h1>
        {/*=== Your content goes here 👇 ===*/}
        
        <form>
          <label>
            First Name:
            <input type="text" onChange={e =>  handleFirstNameChange(e)} value={firstName}></input>
            {firstName}
          </label>
          <br></br>
          <label>
            Last Name:
            <input type="text" onChange={handleLastNameChange} value={lastName}></input>
            {lastName}
          </label>
          <br></br>
          <input type='checkbox'></input>
          <label>Above 19</label>

          <div class='Container_Section Container_Section__Column'>
            <p class='Container_Headline mdc-typography--headline6'>
              Diet restrictions
            </p>
            <div>
              <label>
                <input type='radio' name="diet" value="vegetarian" onClick={handleRadioClick}></input>
                Vegetarian
                
              </label>
              <label>
                <input type='radio' name="diet" value="vegan" onClick={handleRadioClick}></input>
                Vegan
                
              </label>
              <label>
                 <input type='radio' name="diet" value="halal/koshar" onClick={handleRadioClick}></input>
                Halal/Kosher
               
              </label>
              <label>
                 <input type='radio' name="diet" value="None" onClick={handleRadioClick}></input>
                None
                
              </label>
            </div>
          </div>
          <br></br>
          <label>
            Current Year
            <input type='text' onChange={handleCurrentYear} value={currentYear}></input>
          </label>
        </form>
      </div>
    </div>
  )
}