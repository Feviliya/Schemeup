import { Uibutton,Numbox,Textbox,Bradio,Dropdown} from './mbutton';
import {Typography} from '@mui/material';
import './App.css';
import {useState} from 'react';
const initialVal={
  name:'',
  gender:'male',
  marital:'',
  caste:'',
  religion:'',
  eduqual:'',
  emp:'false',
  income:0,
}
const App=()=>{
  const [values,setValues]= useState(initialVal)
  return (   
    <form>
      <div className='main'>
        <div className='left'>  
          <Typography  variant='h4' >General Details</Typography>
          <br></br>
          <Textbox id="name" value={values.name} name="Fullname"></Textbox>
          <br></br>
          <Bradio id="gender" name='Gender' value={values.gender}></Bradio>
          <br></br>
          <Dropdown id="marital" val='MaritalStatus' value={values.marital} name='Marital Status'></Dropdown>
          <br></br>
          <Dropdown id="caste" val='CasteList' value={values.caste} name='Caste'></Dropdown>
          <br></br>
          <Dropdown id="religion" value={values.religion} name='Religion'></Dropdown>
        </div>
        <div className='right'>
          <Dropdown id="eduqual" value={values.eduqual} name='Highest Educational Qualification'></Dropdown>
          <Dropdown id="emp" value={values.emp} name='Employment Status'></Dropdown>
          <Numbox id="income" value={values.income} name='Annual Income' val='₹'></Numbox>
          <Uibutton name='Submit'></Uibutton>
        </div>
      </div>
    </form>
  );
}

export default App;
