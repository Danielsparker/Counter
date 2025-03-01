import React, { useState } from 'react';
import Swal from 'sweetalert2';

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const [newFood, setNewFood] = useState("");

    function handleAddFood() {
        if (newFood.trim() !== "") {
            setFoods([...foods, newFood]); // Add new food to list
            Swal.fire({
                title: "Success!",
                text: `${newFood} added successfully!`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });
            setNewFood(""); // Clear input field
        } else {
            Swal.fire({
                title: "Oops!",
                text: "Please enter a valid food name!",
                icon: "warning",
                timer: 1500,
                showConfirmButton: false
            });
        }
    }

    function handleRemoveFood(index) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setFoods(foods.filter((_, i) => i !== index));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your food has been removed.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    }

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">List of Food</h2>
            <ul className="mb-4">
                {foods.map((food, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        {food} 
                        <button 
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700" 
                            onClick={() => handleRemoveFood(index)}>
                            ❌ Remove
                        </button>
                    </li>
                ))}
            </ul>

            <input 
                type="text" 
                value={newFood} 
                onChange={(e) => setNewFood(e.target.value)} 
                placeholder="Enter food name" 
                className="border p-2 rounded mb-4 w-full"
            />

            <button 
                onClick={handleAddFood} 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                ➕ Add Food
            </button>
        </div>
    );
}

export default MyComponent;
