let LEVELID: string;
let GAME = new GameGrid(20, 15, 40);
GAME.render();

function getGameClickHandler() {
    return function(event: MouseEvent) {
        let pos = GAME.getPosition(event);
        let clicked = GAME.getObjectsAt(pos)[0];

        // clicked on existing object
        if (clicked !== undefined) {
            let lastClicked = GAME.getSelected()[0];
            if (lastClicked === undefined &&
                !(clicked instanceof LightConnector)) {
                return;
            }
            clicked.selected = true;
            if (clicked === lastClicked) {
                GAME.unselectAll();
                GAME.resetHighlight();
                return;
            }
            if (lastClicked === undefined) {
                clicked.highlightLevel = Highlight.Basic;
                highlightLinks(clicked);
                return;
            }
            if (lastClicked !== undefined) {
                makeLink(lastClicked, clicked);
                highlightLinks(lastClicked);
                clicked.selected = false;
            }
        }
    }
}

function getEditorClickHandler() {
    let makerMenu = new MakerMenu("maker-menu");

    return function(event: MouseEvent) {
        //console.log(g.getSelected());
        let pos = GAME.getPosition(event);
        let clicked = GAME.getObjectsAt(pos)[0];

        // create new object on clicked grid square if empty
        if (makerMenu.getSelected() !== undefined && clicked === undefined) {
            let obj = makerMenu.getObjectForSelected(GAME);
            if (obj !== undefined) {
                GAME.move(obj, pos);
                return;
            }
        }

        // clicked on existing object
        if (clicked !== undefined) {
            let lastClicked = GAME.getSelected()[0];
            clicked.selected = true;
            if (clicked === lastClicked) {
                GAME.unselectAll();
                GAME.resetHighlight();
                return;
            }
            if (lastClicked === undefined) {
                clicked.highlightLevel = Highlight.Basic;
                highlightLinks(clicked);
                return;
            }
            if (lastClicked !== undefined) {
                makeLink(lastClicked, clicked);
                highlightLinks(lastClicked);
                clicked.selected = false;
            }
        }
        if (clicked === undefined) {
            let lastClicked = GAME.getSelected()[0];
            if (lastClicked instanceof Mine) {
                let dest = lastClicked.destination();
                if (dest !== undefined && dest.equals(pos)) {
                    lastClicked.clearPath();
                } else {
                    lastClicked.makePath(pos);
                }
            }
        }
    }
}

function makeLink(from: GameObject, target: GameObject) {
    if (isLock(from)) {
        if (isLockable(target)) {
            if (target.lockedBy(from)) {
                target.removeLock(from);
            } else {
                target.addLock(from);
            }
        }
    }
    if (from instanceof Portal && target instanceof Portal) {
        from
        if (from.target !== target) {
            from.target = target;
            target.target = from;
        } else {
            from.target = undefined;
            target.target = undefined;
        }
    }
    if (from instanceof LightConnector) {
        if (isLight(target)) {
            if (GAME.lg.graph.links(from).indexOf(target) === -1) {
                GAME.lg.connect(from, target);
            } else {
                GAME.lg.disconnect(from, target);
            }
        }
    }
}

function highlightLinks(obj: GameObject) {
    if (isLock(obj)) {
        console.log(obj, "WAT");
        let all = GAME.allObjects();
        obj.highlightLevel = Highlight.Basic;
        for (let item of all) {
            if (isLockable(item)) {
                if (item.lockedBy(obj)) {
                    item.highlightLevel = Highlight.Linked;
                    obj.highlightLevel = Highlight.Linked;
                } else {
                    item.highlightLevel = Highlight.Basic;
                }
            }
        }
    }
    if (obj instanceof Portal) {
        let all = GAME.allObjects();
        for (let item of all) {
            if (item instanceof Portal) {
                item.highlightLevel = Highlight.Basic;
            }
        }
        if (obj.target !== undefined) {
            obj.target.highlightLevel = Highlight.Linked;
            obj.highlightLevel = Highlight.Linked;
        }
    }
    if (obj instanceof LightConnector) {
        let all = GAME.allObjects();
        for (let item of all) {
            if (isLight(item)) {
                if (GAME.lg.graph.links(item).indexOf(obj) !== -1) {
                    item.highlightLevel = Highlight.Linked;
                } else {
                    item.highlightLevel = Highlight.Basic;
                }
            }
        }
    }
    if (obj instanceof Mine) {
        obj.highlightPath = true;
    }
}

let play = getGameClickHandler();
let edit = getEditorClickHandler();
let playButton = document.getElementById("play-button");
playButton.addEventListener("click", function(event: MouseEvent) {
    if (GAME.gameState !== GameState.Editor) {
        GAME.gameState = GameState.Editor;
        GAME.restore();
        CANVAS.removeEventListener("click", play);
        CANVAS.addEventListener("click", edit);
        playButton.style.backgroundColor = "";
    } else {
        GAME.gameState = GameState.Testing;
        GAME.unselectAll();
        GAME.resetHighlight();
        GAME.snapshot();
        CANVAS.removeEventListener("click", edit);
        CANVAS.addEventListener("click", play);
        playButton.style.backgroundColor = "red";
    }
});

let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", function() {
    var json = JSON.stringify(serialize(GAME));
    document.getElementById("overlay").style.display = "block";
    document.getElementById("container").style.display = "block";
    document.getElementById("json-container").style.display = "block";
    document.getElementById("json-message").innerText = json;
});

document.addEventListener("keydown", function(event: KeyboardEvent) {
    let gs = GAME.gameState;
    if (gs === GameState.Completed || gs === GameState.Over) {
        if (event.keyCode === KeyCodes.Space) {
            showMenu();
        }
        return;
    }
    let player = GAME.getPlayer();
    if (player !== undefined) {
        let loc = player.location();
        if (event.keyCode === KeyCodes.A) {
            player.moveTo(new Point(loc.x - 1, loc.y));
        } else if (event.keyCode === KeyCodes.W) {
            player.moveTo(new Point(loc.x, loc.y - 1));
        } else if (event.keyCode === KeyCodes.D) {
            player.moveTo(new Point(loc.x + 1, loc.y));
        } else if (event.keyCode === KeyCodes.S) {
            player.moveTo(new Point(loc.x, loc.y + 1));
        } else if (event.keyCode === KeyCodes.E) {
            player.grab();
        }
        GAME.update();
        //g.render();
    }
    if (event.keyCode == KeyCodes.Esc) {
        GAME.unselectAll();
        GAME.resetHighlight();
    } else if (event.keyCode == KeyCodes.Del) {
        if (GAME.gameState === GameState.Editor) {
            let selected = GAME.getSelected()[0];
            if (selected !== undefined) {
                GAME.remove(selected);
                GAME.resetHighlight();
            }
        }
    }
});

setInterval(function() {
    GAME.update();
    GAME.render();
}, 1000 / 24);

loadLevels();
showMenu();

function loadLevels() {
    let menu = document.getElementById("game-levels");
    let lvlNumbers = Object.keys(LEVELS)
    for (let key of lvlNumbers) {
        (function(key) {
            let lvl = document.createElement("span");
            let txt = document.createTextNode(key);
            lvl.appendChild(txt);
            lvl.className = "level level-" + key;
            var level = LEVELS[key];
            let clickHandler = function(event: MouseEvent) {
                GAME.clear();
                deserialize(level, GAME);
                LEVELID = key;
                showGame();
            }
            lvl.addEventListener("click", clickHandler);
            menu.appendChild(lvl);
        } (key));
    }
    if (lvlNumbers.length < 20) {
        for (let i = 0; i < 20 - lvlNumbers.length; ++i) {
            let lvl = document.createElement("span");
            lvl.className = "dummy-level";
            menu.appendChild(lvl);
        }
    }
}

function showGame() {
    let gameArea = document.getElementById("game-area");
    gameArea.style.display = "block";
    let gameLevels = document.getElementById("game-levels");
    gameLevels.style.display = "none";
    let editor = document.getElementById("maker-menu");
    editor.style.display = "none";
    GAME.gameState = GameState.Live;
    CANVAS.removeEventListener("click", edit);
    CANVAS.addEventListener("click", play);
}

function showMenu() {
    checkHistory();
    let gameArea = document.getElementById("game-area");
    gameArea.style.display = "none";
    let gameLevels = document.getElementById("game-levels");
    gameLevels.style.display = "block";
    GAME.clear();
}

let menuButton = document.querySelector(".octicon-three-bars");
menuButton.addEventListener("click", showMenu);

let editorButton = document.querySelector(".octicon-pencil");
editorButton.addEventListener("click", function() {
    let gameArea = document.getElementById("game-area");
    gameArea.style.display = "block";
    let gameLevels = document.getElementById("game-levels");
    gameLevels.style.display = "none";
    let editor = document.getElementById("maker-menu");
    editor.style.display = "block";
    GAME.gameState = GameState.Editor;
    CANVAS.removeEventListener("click", play);
    CANVAS.addEventListener("click", edit);
});

let helpButton = document.querySelector(".octicon-info");
helpButton.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("container").style.display = "block";
    document.getElementById("help-container").style.display = "block";
});

let muteButton = document.getElementById("sound-button");
muteButton.addEventListener("click", function(e: MouseEvent) {
    if (Howler.volume() === 0) {
        e.srcElement.classList.remove("octicon-mute");
        e.srcElement.classList.add("octicon-unmute");
        Howler.unmute();
    } else {
        e.srcElement.classList.remove("octicon-unmute");
        e.srcElement.classList.add("octicon-mute");
        Howler.mute();
    }
})

let closeButton = document.getElementById("close-container");
closeButton.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("help-container").style.display = "none";
    document.getElementById("json-container").style.display = "none";
});

function checkHistory() {
    let completed = JSON.parse(localStorage.getItem("completed"));
    if (completed !== null) {
        for (let level of completed) {
            let lvlSpan = document.querySelector(".level-" + level);
            if (!lvlSpan.classList.contains("completed")) {
                lvlSpan.classList.add("completed");
            }
        }
    }
}

function updateHistory() {
    if (LEVELID === undefined) {
        return;
    }
    let completed = JSON.parse(localStorage.getItem("completed"));
    if (completed === null) {
        completed = [LEVELID];
    } else if (completed.indexOf(LEVELID) === -1) {
        completed.push(LEVELID);
    }
    localStorage.setItem("completed", JSON.stringify(completed));
}