class MakerMenu {
    private gameObjects = {
        "wall-button": false,
        "v-window-button": false,
        "h-window-button": false,
        "player-button": false,
        "platform-button": false,
        "mine-button": false,
        "square-button": false,
        "door-button": false,
        "box-button": false,
        "portal-button": false,
        "lightsource-button": false,
        "lightreceiver-button": false,
        "lightconnector-button": false
    }

    private htmlMenu: HTMLElement;

    constructor(menuId: string) {
        this.htmlMenu = document.getElementById(menuId);
        this.setUpMenu();
    }

    private setUpMenu() {
        for (let key in this.gameObjects) {
            let button = <HTMLElement>document.getElementById(key);
            button.addEventListener("click", (event: MouseEvent) => {
                for (let key in this.gameObjects) {
                    if (key == event.srcElement.id) {
                        let h = <HTMLElement>event.srcElement;
                        if (this.gameObjects[key]) {
                            h.style.backgroundColor = "";
                        } else {
                            h.style.backgroundColor = "red";
                        }
                        this.gameObjects[key] = !this.gameObjects[key];
                    } else {
                        this.gameObjects[key] = false;
                        let b = <HTMLElement>document.getElementById(key);
                        b.style.backgroundColor = "";
                    }
                }
            });
        }
    }

    getSelected() {
        for (let key in this.gameObjects) {
            if (this.gameObjects[key]) {
                return key;
            }
        }
        return undefined;
    }

    getObjectForSelected(grid: GameGrid) {
        let selected = this.getSelected();
        let player = grid.getPlayer();
        let box = grid.getBox();
        if (player !== undefined && selected === "player-button") {
            return undefined;
        }
        if (box !== undefined && selected === "box-button") {
            return undefined;
        }
        switch (selected) {
            case "wall-button":
                return new Wall(grid);
            case "h-window-button":
                return new WindowWall(grid);
            case "v-window-button":
                return new WindowWallVertical(grid);
            case "player-button":
                return new Player(grid);
            case "platform-button":
                return new Platform(grid);
            case "mine-button":
                return new Mine(grid);
            case "square-button":
                return new Square(grid);
            case "door-button":
                return new Door(grid);
            case "box-button":
                return new Box(grid);
            case "portal-button":
                return new Portal(grid);
            case "lightsource-button":
                return new LightSource(grid);
            case "lightreceiver-button":
                return new LightReceiver(grid);
            case "lightconnector-button":
                return new LightConnector(grid);
            default:
                return undefined;
        }
    }

    anySelected() {
        for (let key in this.gameObjects) {
            if (this.gameObjects[key]) {
                return true;
            }
        }
        return false;
    }

    show() {
        this.htmlMenu.style.display = "";
    }

    hide() {
        this.htmlMenu.style.display = "none";
    }
}
