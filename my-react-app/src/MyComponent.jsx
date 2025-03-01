import React, { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = prompt("Enter food name:");
        if (newFood) {
            setFoods([...foods, newFood]); // Add food to list
        }
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index)); // Remove food from list
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>
                        {food} 
                        <button onClick={() => handleRemoveFood(index)}>❌</button>
                    </li>
                ))}
            </ul>

            <button onClick={handleAddFood}>➕ Add Food</button>
        </div>
    );
}

export default MyComponent;
