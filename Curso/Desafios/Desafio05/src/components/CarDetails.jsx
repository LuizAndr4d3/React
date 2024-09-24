import styles from './CarDetails.module.css'

export const CarDetails = ({id, marca, modelo}) => {
    

    return (
        <section>
        <div className={styles.car_Section}>
            <p>Id:{id}</p>
            <p>Marca:{marca}</p>
            <p>Modelo:{modelo}</p>
        </div>
        </section>
    )
}

