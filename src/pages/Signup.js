import {Container} from '@mui/material'
import SignupForm from '../components/SignupForm';
const Signup = () => {
    return (
        <Container sx={{ bgcolor: 'grey', height: '90vh' }}>
            <SignupForm/>
        </Container> 
    )
}

export default Signup;