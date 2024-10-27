import React, { useState } from 'react';

const AddWorkout = () => {
    const [date, setDate] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');

    const addWorkout = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/addWorkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, exerciseType, caloriesBurned: Number(caloriesBurned) })
        });

        const data = await response.json();
        alert(data.message);
        resetForm();
    };

    const resetForm = () => {
        setDate('');
        setExerciseType('');
        setCaloriesBurned('');
    };

    return (
        <div>
            <h2>Add Workout</h2>
            <form onSubmit={addWorkout}>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <input type="text" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} placeholder="Exercise Type" required />
                <input type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} placeholder="Calories Burned" required />
                <button type="submit">Add Workout</button>
            </form>
        </div>
    );
};

export default AddWorkout;
