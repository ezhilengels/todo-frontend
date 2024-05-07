import {Container} from '@mui/material'
import AddTaskForm from '../components/AddTaskForm'
const AddTask = () => {
    return (
        <Container sx={{ bgcolor: 'grey', height: '90vh' }}>
            <AddTaskForm/>
        </Container> 
    )
}

export default AddTask;