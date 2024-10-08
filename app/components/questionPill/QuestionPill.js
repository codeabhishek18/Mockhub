import styles from './styles.module.css'

const QuestionPill = ({index, activeIndex, setActiveIndex}) =>
{

    return(
        <div className={index === activeIndex ? `${styles.container} ${styles.activePill}` : styles.container }>
            Q. {index+1}
        </div>
    )
} 

export default QuestionPill