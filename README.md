# MAQE Bot

A command-line tool to simulate the movement of a MAQE Bot based on a series of directional commands. The bot starts at position `(0, 0)` facing North and can turn right or left and walk straight.

## Getting Started

These instructions will help you set up and run the MAQE Bot CLI tool on your local machine.

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. **Clone the Repository:**

   ```
   git clone https://github.com/yourusername/maqebot.git
   cd maqebot
   ```

2. **Install Dependencies:**

    ```
    npm install
    ```

## Usage

You can run the CLI tool to execute commands and get the final position and direction of the MAQE Bot.

### Command Syntax

- R - Turn 90 degrees to the right (clockwise)
- L - Turn 90 degrees to the left (counterclockwise)
- WN - Walk straight for N points where N is a positive integer

### Example

To simulate the following commands:

- RW15 - Turn right and walk straight for 15 points
- RW1 - Turn right again and walk straight for 1 point

Use the command:

  ```
  npm run cli RW15RW1
  ```

This will output:

  ```
  X: 15 Y: -1 Direction: South
  ```
