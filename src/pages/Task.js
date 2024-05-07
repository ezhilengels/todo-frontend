import {Container} from '@mui/material'
import AllTasks from '../components/AllTasks';
const Task = () => {
    return (
        <Container sx={{ bgcolor: 'grey', height: '90vh' }}>
            <AllTasks/>
        </Container> 
    )
}

export default Task;