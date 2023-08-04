import styles from './CategoryElement.module.css'

interface CategoryProp {
  category: string
}

export const CategoryElement = ({ category }: CategoryProp) => {
  return (
    <div className={styles.categoryChip}>{category}</div>
  )
}
