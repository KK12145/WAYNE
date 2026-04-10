import React from 'react';
import './Wayne.css'; // Assuming there's some CSS file for styling

// Component for button with accessibility improvements
const AccessibleButton: React.FC<{ label: string; onClick: () => void; }> = ({ label, onClick }) => {
    return <button onClick={onClick} aria-label={label}>{label}</button>;
};

// Main component
const Wayne: React.FC = () => {
    const handleButtonClick = () => {
        alert('Button clicked!'); // Example action
    };

    return (
        <div className="wayne-container" role="main">
            <header>
                <h1>Wayne Application</h1>
            </header>
            <main>
                <section>
                    <h2>Welcome to the Wayne Application</h2>
                    <p>This application helps with demonstrating improvements.</p>
                </section>
                <AccessibleButton label="Click Me" onClick={handleButtonClick} />
            </main>
            <footer>
                <p>&copy; 2026 Wayne Application</p>
            </footer>
        </div>
    );
};

export default Wayne;