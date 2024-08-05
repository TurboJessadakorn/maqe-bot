import { Injectable } from '@nestjs/common';

type Position = {
    x: number;
    y: number;
}

type Direction = 'North' | 'West' | 'East' | 'South'

@Injectable()
export class CliService {
    private position: Position = { x: 0, y: 0 }; //current position
    private direction: Direction = 'North'; //current direction
    private directions: Direction[] = ['North', 'East', 'South', 'West']; //define the next direction

    executeCommands(commands: string): { x: number; y: number; direction: Direction } {
        const commandList = commands.match(/[RLW]\d*/g) || [];

        commandList.forEach((command) => {
            this.executeCommand(command);
        });

        return {
            x: this.position.x,
            y: this.position.y,
            direction: this.direction,
        };
    }

    private executeCommand(command: string) {
        const action = command[0];
        const value = parseInt(command.slice(1)) || 0;

        switch (action) {
            case 'R':
                this.turnRight();
                break;
            case 'L':
                this.turnLeft();
                break;
            case 'W':
                this.walk(value);
                break;
            default:
                console.log(`${command} is not a valid command.`);
        }
    }

    private turnRight() {
        const currentIndex = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndex + 1) % 4];
    }

    private turnLeft() {
        const currentIndex = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndex + 3) % 4];
    }

    private walk(value: number) {
        switch (this.direction) {
            case 'North':
                this.position.y += value;
                break;
            case 'West':
                this.position.x -= value;
                break;
            case 'East':
                this.position.x += value;
                break;
            case 'South':
                this.position.y -= value;
                break;
        }
    }
}
