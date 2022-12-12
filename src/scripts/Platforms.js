import * as PIXI from "pixi.js";
import { Platform } from "./Platform";

export class Platforms {
    constructor() {
        this.platforms = [];
        this.container = new PIXI.Container();
        this.range = {
            rows: {
                min:2,
                max:6
            },
            cols:{
                min : 3,
                max:9
            },
            offset:{
                min : 60,
                max:200
            }
        };

        this.createPlatform({
            rows: 4,
            cols: 6,
            x: 200
        });
    }

    get randomData() {
        let data = {rows:0, cols:0, x:0};
        const offset = this.range.offset.min + Math.round((Math.random() * (this.range.offset.max - this.range.offset.min)));
        data.x = this.current.right + offset;
        data.rows    = this.range.rows.min + Math.round((Math.random() * (this.range.rows.max - this.range.rows.min)));
        data.cols   = this.range.cols.min + Math.round((Math.random() * (this.range.cols.max - this.range.cols.min)));
        return data;
    }

    createPlatform(data) {
        const platform = new Platform(data.rows, data.cols, data.x);
        this.container.addChild(platform.container);
        this.platforms.push(platform);
        this.current = platform;

        platform.container.once("hidden", ()=> {
            this.platforms = this.platforms.filter(item => item !== platform);
            platform.container.destroy(); // freeup memory once hidden
        })
    }

    update(dt) {
        if(this.current.right < window.innerWidth) {
            this.createPlatform(this.randomData);
        }
        this.platforms.forEach(platform => {
            platform.move();
        });
    }

    checkCollisions(hero) {
        this.platforms.forEach(platform => {
            platform.checkCollisions(hero);
        });
    }
}