# Digital Clock using React

This project is a simple digital clock built using React. It displays the current time in a user-friendly format and updates every second.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Code Overview](#code-overview)
- [Contributing](#contributing)
- [License](#license)

## Demo
> <a href="https://arnabyeager.github.io/Digital-Clock-using-React/"><strong>➥ Live Demo</strong></a>

## Features

- Displays the current time in `HH:MM:SS AM/PM` format.
- Automatically updates every second.
- Zero-pads single-digit hours, minutes, and seconds.
- Handles the transition between AM and PM smoothly.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/arnabYeager/Digital-Clock-using-React.git
    cd Digital-Clock-using-React
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```
    The app will run on `http://localhost:3000/` by default.

## Usage

Once the development server is running, you will see the digital clock displayed in your browser. The time will update automatically every second.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: For logic and time management.
- **HTML/CSS**: For basic layout and styling.

## Code Overview

The core of the project is the `DigitalClock` component. Here's a brief overview of how it works:

- **State Management**: The component uses React's `useState` to manage the current time.
- **Side Effects**: The `useEffect` hook is used to set up a timer that updates the time every second.
- **Time Formatting**: The `formatTime` function formats the time into a human-readable `HH:MM:SS AM/PM` format, with zero-padding for single-digit numbers.
- **Cleanup**: The timer is properly cleaned up when the component unmounts to prevent memory leaks.

### Example Code
```javascript
import { useState, useEffect } from "react";

export function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatTime = () => {
        let Hours = time.getHours();
        const Minutes = time.getMinutes();
        const Seconds = time.getSeconds();
        const meridiem = Hours >= 12 ? "PM" : "AM";
        
        return(`${padZero(Hours)}:${padZero(Minutes)}:${padZero(Seconds)} ${meridiem}`);
    }

    const padZero = (number) => {
        return (number < 10 ? "0" : "" + number);
    }

    return(
        <div className="clock-container">
            <div className="clock">{formatTime()}</div>
        </div>
    );
};
```
## Contributing
Contributions are welcome! If you have any ideas, suggestions, or find a bug, feel free to open an issue or submit a pull request.
1. Fork the repository.
2.  **Create a new branch:** `git checkout -b feature-branch-name`
3.  **Commit your changes:** `git commit -m 'Add some feature'`
4.  **Push to the branch:** `git push origin feature-branch-name`
5. **Open a pull request.**

## License 
This project is open-source and available under the MIT License.
