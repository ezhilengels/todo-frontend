import {Container} from '@mui/material'
import LoginForm from '../components/LoginForm';
const Login = () => {
    return (
        <Container sx={{ bgcolor: 'grey', height: '90vh' }}>
            <LoginForm/>
        </Container> 
    )
}

export default Login;