import { useAxios } from "../../../api/hooks/useAxios"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import './styles.css'

import { NavbarLeftSection, NavbarRightSection } from "../../molecules";


interface Role {
  id: number;
  name: string;
}

interface Data {
  id: string;
  totalCoins: number;
  email: string;
  name: string;
  phoneNumber: string;
  urlImage: string;
  role: Role;
}


export function NavBar() {


  const {content} = useAxios<Data>('https://codigo-r-0-0-1.onrender.com/api/v1/ricoin/users/11111111-2222-3333-4444-555555555555', {})

  return (
    <AppBar position="static">
      <Box color='primary' sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginInline: 3
      }}>
        <NavbarLeftSection  title={content?.name} url={content?.urlImage}/>

        <NavbarRightSection />
      </Box>
    </AppBar>
  );
}

