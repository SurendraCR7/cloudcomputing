import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        getWorkouts();
    }, []);

    const getWorkouts = async () => {
        const response = await fetch('http://localhost:3000/workouts');
        const data = await response.json();
        setWorkouts(data);
        displayChart(data);
    };

    const displayChart = (workouts) => {
        const ctx = document.getElementById('chart').getContext('2d');

        const labels = workouts.map(workout => new Date(workout.date).toLocaleDateString());
        const dataValues = workouts.map(workout => workout.caloriesBurned);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Calories Burned',
                    data: dataValues,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div>
            <h2>Your Workouts</h2>
            <ul id="workoutList">
                {workouts.map((workout, index) => (
                    <li key={index}>
                        Date: {new Date(workout.date).toLocaleDateString()}, Exercise: {workout.exerciseType}, Calories: {workout.caloriesBurned}
                    </li>
                ))}
            </ul>
            <h3>Workout Chart</h3>
            <canvas id="chart" width="400" height="200"></canvas>
        </div>
    );
};

export default WorkoutList;
