import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import {Container, Typography} from '@mui/material'
const Root = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </> 
    )
}

export default Root;