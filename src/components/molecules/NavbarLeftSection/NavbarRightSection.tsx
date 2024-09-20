import { Avatar, Toolbar, Typography } from "@mui/material"
import { NavigationLinks } from "../../atoms/NavigationLinks"

interface IProps {
  url?: string;
  title?: string;
}


export const NavbarLeftSection =  ({ title, url }: IProps )  => {


  return (
    <Toolbar disableGutters>
          <Avatar alt="Remy Sharp" src={url} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'ubuntu',
              fontWeight: 700,
              fontSize: 16,
              padding: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          <NavigationLinks />
        </Toolbar>
  )
}

