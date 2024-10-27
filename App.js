import React from 'react';
import AddWorkout from './components/AddWorkout';
import WorkoutList from './components/WorkoutList';
import About from './components/About';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <div className="logo">Fitness Tracker</div>
                    <ul>
                        <li><a href="#add-workout">Add Workout</a></li>
                        <li><a href="#workouts">Workouts</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="add-workout">
                    <AddWorkout />
                </section>
                <section id="workouts">
                    <WorkoutList />
                </section>
                <section id="about">
                    <About />
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Fitness Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
