import { Container, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import styles from './alltasks.module.scss'
const AllTasks = () => {
    return (
        <>
            <Container sx={{alignItems:'center'}}>
                <div className={styles.allTaskContainer}>
                    <div>
                        <div className={styles.allTaskCard}>
                            <label>Title</label>
                            <div>Descrption  </div>
                        </div>
                        <div className={styles.allTaskDelete}>X</div>
                    </div>
                    <div>
                        <div className={styles.allTaskCard}>
                            <label>Title2 gyvjhnbjhb</label>
                            <div>Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in  </div>
                        </div>
                        <div className={styles.allTaskDelete}>X</div>
                    </div>
                    <div>
                        <div className={styles.allTaskCard}>
                            <label>Title</label>
                            <div>Descrption  </div>
                        </div>
                        <div className={styles.allTaskDelete}>X</div>
                    </div>
                    <div>
                        <div className={styles.allTaskCard}>
                            <label>Title</label>
                            <div>Descrption  </div>
                        </div>
                        <div className={styles.allTaskDelete}>X</div>
                    </div>
                    <div>
                        <div className={styles.allTaskCard}>
                            <label>Title</label>
                            <div>Descrption  </div>
                        </div>
                        <div className={styles.allTaskDelete}>X</div>
                    </div>

                </div>

            </Container>
        </>
    )
}
export default AllTasks