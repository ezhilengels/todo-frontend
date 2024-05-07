
import { Container, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import styles from './signupform.module.scss'
const SignupForm = () => {
    return (
        <>
            <Container>
                <div className={styles.formContainer}>
                    <div className={styles.formTitleContainer}>
                        <label>Email</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' />
                    </div>
                    <div>
                        <Button sx={{marginLeft:'5px'}} size="small" variant="contained">Signup</Button>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default SignupForm;