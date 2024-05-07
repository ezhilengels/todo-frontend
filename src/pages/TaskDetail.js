import { useParams } from "react-router-dom";
const TaskDetail = () => {
    const {id} = useParams()
    return (
        <div>
            TEST TaskDetail{id}

        </div> 
    )
}

export default TaskDetail;