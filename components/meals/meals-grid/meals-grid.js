import MealItem from '../meal-item/meal-item';
import classes from './meals-grid.module.css';

const MealsGrid = (props) => {
    const { meals } = props;
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.slug}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
};

export default MealsGrid;
