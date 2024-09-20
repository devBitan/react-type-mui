import { Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import DownloadIcon from '@mui/icons-material/Download';
import TranslateIcon from '@mui/icons-material/Translate';
import { useNavigate } from 'react-router-dom';


export const NavbarRightSection = () => {
    const navigate = useNavigate()
    const onLogout = () => {
    localStorage.clear()
    navigate('login')
    }
  return (
    <Box
        sx={{display: 'flex',
          justifyContent: 'space-between',
          width: 150,
        }}>
          <DownloadIcon />
          <TranslateIcon />
          <LogoutIcon onClick={onLogout} />
    </Box>
  )
}
