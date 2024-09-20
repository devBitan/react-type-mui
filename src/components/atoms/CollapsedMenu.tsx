import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import CustomButtonWithLoader from './CustomButton';
import { useState } from 'react';

interface IProps {
  cohortes?: Array<string>;
  clans?: Array<string>
}




export default function CollapsedMenu({cohortes = ['cohorte 1'], clans = ['dell']}:IProps) {

  const [cohort, setCohort] = useState('');
  const [clan, setClan] = useState('');
  const [completa, setCompleta] = useState('');


  const handleOnChange = (value: any) => {
    console.log(value);

    return setCompleta(value)
  };

  const handleCohorts = ({target}: any) => {
    return setCohort(target.getAttribute('data-value'))
  };

  const handleClans = ({target}: any) => {
    return setClan(target.getAttribute('data-value'))
  };



  return (
    <div>
      <Accordion
      sx={{
        marginInline: 2,
      }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        <Typography>Filtro</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          position: 'static',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CustomButtonWithLoader
          type="submit"
          variant="contained"
          sx={{
            color: 'black',
            background: 'background',
            '&:hover': {
            backgroundColor: '#5944D9'
          },
          marginBottom: 1
          }}
          fullWidth
          onClick={() => handleOnChange('completa')}
          >
            Lista completa
          </CustomButtonWithLoader>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-label">Cohortes</InputLabel>
            <Select
              labelId="demo-label"
              label="Cohortes"
              sx={{width: 200}}
              value={cohort}
            >
              {cohortes?.map((ele) => {
                return <MenuItem  key={ele} value={ele} onClick={handleCohorts}>{ele}</MenuItem>
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo1-label">Clanes</InputLabel>
            <Select
              labelId="demo1-label"
              label='Clanes'
              sx={{width: 200}}
              value={clan}
            >
              {clans?.map((ele) => {
                return <MenuItem key={ele} value={ele} onClick={handleClans}>{ele}</MenuItem>
              })}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
