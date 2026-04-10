import React from 'react';

// Constants for the component
const CARD_TITLE = 'Wayne Component';
const TIMELINE_ITEMS = [
    { timestamp: '2026-04-10T06:56:45Z', content: 'Component rendered.' },
    { timestamp: '2026-04-10T06:56:45Z', content: 'Improvements applied.' },
];

// TypeScript types for props
interface NavButtonProps {
    label: string;
    onClick: () => void;
}

interface TimelineItemProps {
    timestamp: string;
    content: string;
}

// Reusable NavButton component
const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick} aria-label={label}>{label}</button>;
};

// Reusable TimelineItem component
const TimelineItem: React.FC<TimelineItemProps> = ({ timestamp, content }) => {
    return (
        <li aria-labelledby={timestamp}>
            <time id={timestamp} dateTime={timestamp}>{new Date(timestamp).toLocaleString()}</time>
            <span>{content}</span>
        </li>
    );
};

const Card: React.FC<{ title: string; content: React.ReactNode; }> = ({ title, content }) => {
    return (
        <div role="region" aria-labelledby={title} className="card">
            <h2 id={title}>{title}</h2>
            <div>{content}</div>
        </div>
    );
};

const Wayne: React.FC = () => {
    const handleButtonClick = () => {
        // Handle button click
    };

    return (
        <Card title={CARD_TITLE} content={(
            <div>
                <NavButton label="Click Me" onClick={handleButtonClick} />
                <ul>
                    {TIMELINE_ITEMS.map((item, index) => (
                        <TimelineItem key={index} timestamp={item.timestamp} content={item.content} />
                    ))}
                </ul>
            </div>
        )} />
    );
};

export default Wayne;