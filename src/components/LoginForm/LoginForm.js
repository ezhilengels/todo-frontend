
import { Container, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import styles from './loginform.module.scss'
const AddTaskForm = () => {
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
                        <Button sx={{marginLeft:'5px'}} size="small" variant="contained">Login</Button>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default AddTaskForm;