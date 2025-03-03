import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskList from '../components/TaskList';

const DailyPlannerApp: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <TaskList />
            </main>
            <Footer />
        </div>
    );
};

export default DailyPlannerApp;