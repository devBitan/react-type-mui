import {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox, FormControl, formHelperTextClasses, InputLabel, MenuItem, Select } from '@mui/material';
import CollapsedMenu from '../../atoms/CollapsedMenu';
import { useAxios } from '../../../api/hooks/useAxios';
import { json } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface Data {
  id: Number,
  name: String,
  cohort: String,
  urlImage: String,
  coins: Number
}

let cohortes = ['cohorte 1', 'cohorte 2' ];
let clans = ['gates','bezos' , 'dell' ]

export default function PrimarySearchAppBar() {
  const {content} = useAxios<Data>('https://codigo-r-0-0-1.onrender.com/api/v1/ricoin/users/11111111-2222-3333-4444-555555555555', {})

  return (
    <Box  sx={{
      boxShadow: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1 }}>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Filtro</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Filtro"
          sx={{width: 200}}
          onChange={(e) => handleOnchange(e.target)}
        >
          <MenuItem >
            <em>General</em>
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      <CollapsedMenu  cohortes={cohortes} clans={clans}/>


        <Toolbar>
          <Search
          sx={{
          boxShadow: 3,
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
    </Box>
  );
}
