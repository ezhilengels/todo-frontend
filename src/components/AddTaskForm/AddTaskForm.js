
import { Container, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import styles from './addtaskform.module.scss'
const AddTaskForm = () => {
    return (
        <>
            <Container>
                <div className={styles.formContainer}>
                    <div className={styles.formTitleContainer}>
                        <label>Title</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea type='text' rows={3}/>
                    </div>
                    <div>
                        <Button sx={{marginLeft:'5px'}} size="small" variant="contained">Add Task</Button>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default AddTaskForm;