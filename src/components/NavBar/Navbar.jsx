
import { Container, Typography } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import Button from '@mui/material/Button';
import styles from './navbar.module.scss'
const NavBar = () => {
    return (
        <>
            <Container sx={{ bgcolor: 'tomato', height: '10vh' }}>
                <div className={styles.navBar}>
                    <div className={styles.applogo}><Typography variant='h5'>Todo App</Typography></div>
                    <div className={styles.buttonContainer}>
                        <Link to="/addtask"><Button sx={{marginLeft:'5px'}} size="small" variant="contained">Add Task</Button></Link>
                        <Link to="/task"><Button sx={{marginLeft:'5px'}} size="small" variant="contained">Your Tasks</Button></Link>
                        <Button sx={{marginLeft:'5px'}} size="small" variant="contained">Profile</Button>
                        <Link to="/login"><Button sx={{marginLeft:'5px'}} size="small" variant="contained">Login</Button></Link>
                        <Link to="/signup"><Button sx={{marginLeft:'5px'}} size="small" variant="contained">Sign Up</Button></Link>
                        <Typography sx={{marginLeft:'5px'}} size="small" variant="contained">Ezhil</Typography>
                        <Button sx={{marginLeft:'5px'}} size="small" variant="contained">Logout</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default NavBar;