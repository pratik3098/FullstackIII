import React from 'react'
import './App.css'
const useNameState = () => {
 const [value, setValue] = React.useState('')
 const onChange = event => {
   setValue(event.target.value)
 }
 return {
   value,
   onChange,
 }
}

export default function App() {
 const firstNameState = useNameState()
 const lastNameState = useNameState()
 const isAbove19State = useNameState()
 const dietState = useNameState()
 const [dietType, setDietType] = React.useState({
   type: ['banana', 'vegan', 'halal-kosher', 'none'],
 })
 const onClickSubmit = () => {
   console.log('Form submitted!')
 }
 return (
   <div className='App'>
     <div className='App-Content'>
       <h1 className='App-Title'>Registration Form</h1>
       <InputField nameType='First Name' nameState={{ ...firstNameState }} />
       <InputField nameType='Last Name' nameState={{ ...lastNameState }} />
       <DietField
         dietType={dietType}
         diet={dietState.value}
         change={dietState.onChange}
       />
       <div className='FormField'>
         <label className='FormField-Label'>
           <span className='FormField-LabelText'>
             <input
               className='FormField-Input FormField-Input__Checkbox'
               type='checkbox'
               checked={isAbove19State.value}
               onChange={isAbove19State.onChange}
             />
             Above 19?
           </span>
         </label>
       </div>
       <div className='FormSubmit'>
         <button className='FormSubmit-Button' onClick={onClickSubmit}>
           Register
         </button>
       </div>
     </div>
   </div>
 )
}





const InputField = props => {
  return (
    <div className='FormField'>
      <label className='FormField-Label'>
        <span className='FormField-LabelText'>{props.nameType}</span>
        <input
          className='FormField-Input FormField-Input__Text'
          type='text'
          placeholder='Enter your first name'
          value={props.nameState.value}
          onChange={props.nameState.onChange}
        />
      </label>
    </div>
  )
 }
 const RadioChoice = props => {
  return (
    <label className='FormField-Label FormField-Label__Radio'>
      <span className='FormField-LabelText FormField-LabelText__Radio'>
        <input
          className='FormField-Input FormField-Input__Radio'
          type='radio'
          value={props.dietType}
          checked={props.currentDiet === props.dietType}
          onChange={props.onChangeDiet}
        />
        {props.dietType}
      </span>
    </label>
  )
 }
 
 
 
 const DietField = props => {
  return (
    <div className='FormField'>
      <div className='FormField-Heading'>Diet Restriction</div>
      {props.dietType.type.map((type, index) => {
        return (
          <RadioChoice
            dietType={type}
            currentDiet={props.diet}
            onChangeDiet={props.change}
            key={index}
          />
        )
      })}
    </div>
  )
 }