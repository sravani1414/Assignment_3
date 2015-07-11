﻿module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class spaceship extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "cloud";
            this.sound = "thunder";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.x > 640 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start cloud at random location
            this.x = -this.width; // start cloud off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        }
    }
}  