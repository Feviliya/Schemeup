import {Button,TextField,RadioGroup,FormLabel,FormControl,FormControlLabel,Radio,Select,Autocomplete,MenuItem,InputLabel} from '@mui/material';
// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
export const Uibutton=(props:any)=>{
    return(
        <Button variant='contained'>{props.name}</Button>
    )
}
export const Textbox=(props: any)=>{
    return(
        <TextField sx={{ width: 300 }} variant="standard" label={props.name} required></TextField>
    )
}
export const Numbox=(props:any)=>{
    return(
        <TextField required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label={props.name}/>
    )
}
export const Bradio=(props: any)=>{
    return(
    <FormControl>
        <FormLabel required id="demo--group-label">{props.name}</FormLabel>
        <RadioGroup row>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        
    </FormControl>)
}
export const Dropdown=(props: any)=>{
    return(
        <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={props.val}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label={props.name} />}
/>
    )
}
const MaritalStatus = [
    { label: 'Married'},
    { label: 'Unmarried'},
    { label: 'Divorced'}
]
const CasteList = [
    { label: 'General'},
    { label: 'Other Backward Class (OBC)'},
    { label: 'Particularly Vulnerable Tribal Group (PVTG)'},
    { label: 'Scheduled Caste (SC)'},
    { label: 'Scheduled Tribe (ST)'}]
const Religion=[
    { label: 'Chiristian'},
    { label: 'Hindu'},
    { label: 'Muslim'},
    { label: 'Sikh'},
    { label: 'Jain'}
]
const empStatus=[
    { label: 'Employed'},
    { label: 'Unemployed'},
]
const EduQual=[
    { label : 'Primary'},
    { label : 'Higher-Secondary'},
    { label : 'UnderGraduate'},
    { label : 'PostGraduate'},
    { label : 'Doctorate'}
]
