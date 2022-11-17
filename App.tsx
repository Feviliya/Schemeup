import { Uibutton,Numbox,Textbox,Bradio,Dropdown} from './mbutton';
import {Typography} from '@mui/material';
import './App.css';
import './index.css';
function App() {
  return (
    <div className='main'>
      <div className='left'>
        <Typography variant='h4'>General Details</Typography>
        <Textbox name="Fullname" val=''></Textbox>
        <br></br>
        <Bradio name='Gender'></Bradio>
        <br></br>
        <Dropdown val='MaritalStatus' name='Marital Status'></Dropdown>
        <br></br>
        <Dropdown val='CasteList' name='Caste'></Dropdown>
        <br></br>
        <Dropdown name='Religion'></Dropdown>
      </div>
      <div className='right'>
        <Dropdown name='Highest Educational Qualification'></Dropdown>
        <Dropdown name='Employment Status'></Dropdown>
        <Numbox name='Annual Income' val='₹'></Numbox>
        <Uibutton name='Next'></Uibutton>
      </div>
    </div>
  );
}

export default App;
