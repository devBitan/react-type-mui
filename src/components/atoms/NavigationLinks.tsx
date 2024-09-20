import { NavLink } from 'react-router-dom'
const pages = ['dashboard', 'users'];

export const NavigationLinks = () => {
  return (
    <>
        {pages.map((page) => {
        return <NavLink className={'nav-links'} key={page} to={`/${page}`}>{ page[0].toUpperCase() + page.substring(1)}</NavLink>})}
    </>
  )
}
