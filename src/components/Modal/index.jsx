
import styles from './styles.module.scss';

function Modal ({text, isVisible}) {
    
    return(
        <> 

        {isVisible && (
         <div className={styles.Modal} >
          <p className={styles.Modal__paragraph}> {text} </p> 
         </div>
        )}

        </>
    );


}

export default Modal 