var LEVELS = {
    "1": { "155": { "name": "Wall", "loc": [1, 9] }, "156": { "name": "Wall", "loc": [0, 9] }, "157": { "name": "Wall", "loc": [0, 5] }, "158": { "name": "Wall", "loc": [1, 5] }, "159": { "name": "Wall", "loc": [2, 5] }, "160": { "name": "Wall", "loc": [3, 5] }, "161": { "name": "Wall", "loc": [4, 5] }, "162": { "name": "Wall", "loc": [5, 5] }, "163": { "name": "Wall", "loc": [6, 5] }, "164": { "name": "Wall", "loc": [7, 5] }, "165": { "name": "Wall", "loc": [8, 5] }, "166": { "name": "Wall", "loc": [10, 5] }, "167": { "name": "Wall", "loc": [9, 5] }, "168": { "name": "Wall", "loc": [11, 5] }, "169": { "name": "Wall", "loc": [12, 5] }, "170": { "name": "Wall", "loc": [13, 5] }, "171": { "name": "Wall", "loc": [14, 5] }, "172": { "name": "Wall", "loc": [15, 5] }, "173": { "name": "Wall", "loc": [16, 5] }, "174": { "name": "Wall", "loc": [17, 5] }, "175": { "name": "Wall", "loc": [18, 5] }, "176": { "name": "Wall", "loc": [2, 9] }, "177": { "name": "Wall", "loc": [3, 9] }, "178": { "name": "Wall", "loc": [5, 9] }, "179": { "name": "Wall", "loc": [4, 9] }, "180": { "name": "Wall", "loc": [6, 9] }, "181": { "name": "Wall", "loc": [7, 9] }, "182": { "name": "Wall", "loc": [8, 9] }, "183": { "name": "Wall", "loc": [9, 9] }, "184": { "name": "Wall", "loc": [10, 9] }, "185": { "name": "Wall", "loc": [11, 9] }, "186": { "name": "Wall", "loc": [12, 9] }, "187": { "name": "Wall", "loc": [13, 9] }, "188": { "name": "Wall", "loc": [14, 9] }, "189": { "name": "Wall", "loc": [15, 9] }, "190": { "name": "Wall", "loc": [16, 9] }, "191": { "name": "Wall", "loc": [17, 9] }, "192": { "name": "Wall", "loc": [18, 9] }, "195": { "name": "Player", "loc": [1, 7] }, "196": { "name": "Door", "locks": [199], "loc": [15, 6] }, "197": { "name": "Door", "locks": [199], "loc": [15, 7] }, "198": { "name": "Door", "locks": [199], "loc": [15, 8] }, "199": { "name": "Platform", "loc": [13, 7] }, "200": { "name": "Box", "loc": [17, 7] }, "201": { "name": "Square", "loc": [11, 7] }, "202": { "name": "Mine", "path": "[[17,12],[16,12],[15,12],[14,12],[13,12],[12,12],[11,12],[10,12],[9,12],[8,12],[7,12],[6,12],[5,12],[4,12],[3,12],[2,12],[1,12]]", "loc": [17, 12] }, "203": { "name": "Mine", "path": "[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2]]", "loc": [1, 2] } },
    "2": { "67": { "name": "Wall", "loc": [0, 5] }, "68": { "name": "Wall", "loc": [0, 9] }, "69": { "name": "Wall", "loc": [1, 9] }, "70": { "name": "Wall", "loc": [2, 9] }, "71": { "name": "Wall", "loc": [1, 5] }, "72": { "name": "Wall", "loc": [2, 5] }, "73": { "name": "Wall", "loc": [3, 5] }, "74": { "name": "Wall", "loc": [3, 9] }, "75": { "name": "Wall", "loc": [4, 5] }, "76": { "name": "Wall", "loc": [4, 4] }, "77": { "name": "Wall", "loc": [4, 3] }, "78": { "name": "Wall", "loc": [4, 2] }, "79": { "name": "Wall", "loc": [4, 1] }, "80": { "name": "Wall", "loc": [4, 0] }, "81": { "name": "Wall", "loc": [8, 0] }, "82": { "name": "Wall", "loc": [8, 1] }, "83": { "name": "Wall", "loc": [8, 2] }, "84": { "name": "Wall", "loc": [8, 3] }, "85": { "name": "Wall", "loc": [8, 4] }, "86": { "name": "Wall", "loc": [8, 5] }, "87": { "name": "Wall", "loc": [5, 3] }, "88": { "name": "Wall", "loc": [7, 3] }, "89": { "name": "Door", "locks": [91], "loc": [6, 3] }, "90": { "name": "Square", "loc": [6, 1] }, "91": { "name": "Platform", "loc": [6, 5] }, "92": { "name": "Wall", "loc": [4, 9] }, "93": { "name": "Wall", "loc": [5, 9] }, "94": { "name": "Wall", "loc": [6, 9] }, "95": { "name": "Wall", "loc": [7, 9] }, "96": { "name": "Wall", "loc": [8, 9] }, "97": { "name": "Wall", "loc": [18, 0] }, "98": { "name": "Wall", "loc": [18, 1] }, "99": { "name": "Wall", "loc": [18, 2] }, "100": { "name": "Wall", "loc": [18, 3] }, "101": { "name": "Wall", "loc": [18, 4] }, "102": { "name": "Wall", "loc": [18, 5] }, "103": { "name": "Wall", "loc": [14, 0] }, "104": { "name": "Wall", "loc": [14, 1] }, "105": { "name": "Wall", "loc": [14, 2] }, "106": { "name": "Wall", "loc": [14, 3] }, "107": { "name": "Wall", "loc": [14, 4] }, "108": { "name": "Wall", "loc": [14, 5] }, "109": { "name": "Wall", "loc": [15, 3] }, "110": { "name": "Wall", "loc": [17, 3] }, "111": { "name": "Door", "locks": [112], "loc": [16, 3] }, "112": { "name": "Platform", "loc": [16, 5] }, "113": { "name": "Box", "loc": [16, 1] }, "114": { "name": "Square", "loc": [11, 1] }, "116": { "name": "Wall", "loc": [9, 4] }, "117": { "name": "Wall", "loc": [10, 4] }, "118": { "name": "Wall", "loc": [12, 4] }, "119": { "name": "Wall", "loc": [13, 4] }, "120": { "name": "Wall", "loc": [12, 3] }, "121": { "name": "Wall", "loc": [12, 2] }, "122": { "name": "Wall", "loc": [12, 1] }, "123": { "name": "Wall", "loc": [10, 3] }, "124": { "name": "Wall", "loc": [10, 2] }, "125": { "name": "Wall", "loc": [10, 1] }, "126": { "name": "Wall", "loc": [14, 6] }, "127": { "name": "Wall", "loc": [14, 7] }, "128": { "name": "Wall", "loc": [14, 8] }, "129": { "name": "Wall", "loc": [14, 9] }, "130": { "name": "Wall", "loc": [14, 10] }, "131": { "name": "Wall", "loc": [14, 11] }, "132": { "name": "Platform", "loc": [13, 11] }, "133": { "name": "Door", "locks": [132], "loc": [14, 12] }, "134": { "name": "Wall", "loc": [18, 6] }, "135": { "name": "Wall", "loc": [18, 7] }, "136": { "name": "Wall", "loc": [18, 8] }, "137": { "name": "Wall", "loc": [18, 9] }, "139": { "name": "Wall", "loc": [14, 13] }, "140": { "name": "Wall", "loc": [14, 14] }, "141": { "name": "Wall", "loc": [11, 6] }, "142": { "name": "Wall", "loc": [11, 7] }, "143": { "name": "Wall", "loc": [11, 8] }, "144": { "name": "Wall", "loc": [11, 9] }, "145": { "name": "Wall", "loc": [11, 10] }, "146": { "name": "Wall", "loc": [11, 11] }, "147": { "name": "Wall", "loc": [11, 12] }, "148": { "name": "Wall", "loc": [10, 12] }, "149": { "name": "Wall", "loc": [9, 12] }, "150": { "name": "Wall", "loc": [8, 12] }, "151": { "name": "Wall", "loc": [7, 12] }, "152": { "name": "Player", "loc": [1, 7] }, "153": { "name": "Mine", "path": "[[1,12],[2,12],[3,12],[4,12],[5,12],[6,12]]", "loc": [1, 12] }, "154": { "name": "Mine", "path": "[[16,13],[16,12],[16,11],[16,10],[16,9],[16,8],[16,7]]", "loc": [16, 13] } },
    "3": { "0": { "name": "Mine", "path": "[[1,13],[1,12],[1,11],[1,10],[1,9],[1,8],[1,7],[1,6],[1,5],[1,4]]", "loc": [1, 13] }, "1": { "name": "Mine", "path": "[[4,13],[4,12],[4,11],[4,10],[4,9],[4,8],[4,7],[4,6],[4,5],[4,4]]", "loc": [4, 13] }, "2": { "name": "Wall", "loc": [6, 11] }, "3": { "name": "Wall", "loc": [6, 10] }, "4": { "name": "Wall", "loc": [6, 9] }, "5": { "name": "Wall", "loc": [6, 8] }, "6": { "name": "Wall", "loc": [6, 7] }, "7": { "name": "Wall", "loc": [6, 6] }, "8": { "name": "Wall", "loc": [6, 5] }, "9": { "name": "Wall", "loc": [6, 4] }, "10": { "name": "Wall", "loc": [6, 3] }, "11": { "name": "Wall", "loc": [6, 2] }, "12": { "name": "Wall", "loc": [6, 1] }, "13": { "name": "Wall", "loc": [6, 0] }, "14": { "name": "Player", "loc": [2, 1] }, "15": { "name": "Square", "loc": [1, 1] }, "16": { "name": "Platform", "loc": [3, 1] }, "18": { "name": "Portal", "locks": [16], "loc": [3, 2], "target": 19 }, "19": { "name": "Portal", "locks": [], "loc": [9, 2], "target": 18 }, "21": { "name": "Square", "loc": [13, 2] }, "22": { "name": "Mine", "path": "[[17,2],[16,2],[15,2],[14,2],[13,2],[12,2],[11,2]]", "loc": [17, 2] }, "23": { "name": "Wall", "loc": [7, 11] }, "24": { "name": "Wall", "loc": [8, 11] }, "25": { "name": "Wall", "loc": [9, 11] }, "26": { "name": "Wall", "loc": [10, 11] }, "27": { "name": "Wall", "loc": [11, 11] }, "28": { "name": "Wall", "loc": [12, 11] }, "29": { "name": "Wall", "loc": [13, 11] }, "30": { "name": "Wall", "loc": [14, 11] }, "31": { "name": "Wall", "loc": [15, 11] }, "32": { "name": "Wall", "loc": [16, 11] }, "33": { "name": "Wall", "loc": [17, 11] }, "34": { "name": "Wall", "loc": [18, 11] }, "35": { "name": "Box", "loc": [17, 13] }, "36": { "name": "Wall", "loc": [15, 12] }, "37": { "name": "Wall", "loc": [15, 14] }, "38": { "name": "Door", "locks": [39], "loc": [15, 13] }, "39": { "name": "Platform", "loc": [13, 13] }, "40": { "name": "Wall", "loc": [11, 12] }, "41": { "name": "Wall", "loc": [11, 14] }, "42": { "name": "Door", "locks": [43], "loc": [11, 13] }, "43": { "name": "Platform", "loc": [9, 13] }, "44": { "name": "Wall", "loc": [7, 9] }, "45": { "name": "Wall", "loc": [8, 9] }, "46": { "name": "Wall", "loc": [9, 9] }, "47": { "name": "Wall", "loc": [10, 9] }, "48": { "name": "Wall", "loc": [11, 9] }, "49": { "name": "Wall", "loc": [13, 9] }, "50": { "name": "Wall", "loc": [15, 9] }, "51": { "name": "Wall", "loc": [17, 9] }, "52": { "name": "Wall", "loc": [18, 7] }, "53": { "name": "Wall", "loc": [17, 7] }, "54": { "name": "Wall", "loc": [16, 7] }, "55": { "name": "Wall", "loc": [15, 7] }, "56": { "name": "Wall", "loc": [14, 7] }, "57": { "name": "Wall", "loc": [13, 7] }, "58": { "name": "Wall", "loc": [11, 7] }, "59": { "name": "Wall", "loc": [9, 7] }, "60": { "name": "Wall", "loc": [7, 5] }, "61": { "name": "Wall", "loc": [8, 5] }, "62": { "name": "Wall", "loc": [9, 5] }, "63": { "name": "Wall", "loc": [10, 5] }, "64": { "name": "Wall", "loc": [11, 5] }, "65": { "name": "Wall", "loc": [12, 5] }, "66": { "name": "Wall", "loc": [13, 5] }, "67": { "name": "Wall", "loc": [15, 5] }, "68": { "name": "Wall", "loc": [17, 5] } },
    "4": { "0": { "name": "Player", "loc": [1, 7] }, "1": { "name": "Wall", "loc": [4, 14] }, "2": { "name": "Wall", "loc": [4, 13] }, "3": { "name": "Wall", "loc": [4, 12] }, "4": { "name": "Wall", "loc": [4, 11] }, "5": { "name": "Wall", "loc": [14, 14] }, "6": { "name": "Wall", "loc": [14, 13] }, "7": { "name": "Wall", "loc": [14, 12] }, "8": { "name": "Wall", "loc": [14, 11] }, "9": { "name": "Wall", "loc": [13, 11] }, "10": { "name": "Wall", "loc": [5, 11] }, "11": { "name": "Wall", "loc": [9, 11] }, "12": { "name": "Wall", "loc": [8, 11] }, "13": { "name": "Wall", "loc": [10, 11] }, "14": { "name": "Door", "locks": [18, 19], "loc": [6, 11] }, "15": { "name": "Door", "locks": [18, 19], "loc": [7, 11] }, "16": { "name": "Door", "locks": [18, 19], "loc": [11, 11] }, "17": { "name": "Door", "locks": [18, 19], "loc": [12, 11] }, "18": { "name": "LightReceiver", "loc": [8, 10] }, "19": { "name": "LightReceiver", "loc": [10, 10] }, "20": { "name": "Wall", "loc": [4, 0] }, "21": { "name": "Wall", "loc": [4, 1] }, "22": { "name": "Wall", "loc": [4, 2] }, "23": { "name": "Wall", "loc": [4, 3] }, "24": { "name": "Wall", "loc": [5, 3] }, "25": { "name": "Wall", "loc": [14, 0] }, "26": { "name": "Wall", "loc": [14, 1] }, "27": { "name": "Wall", "loc": [14, 2] }, "28": { "name": "Wall", "loc": [14, 3] }, "29": { "name": "Wall", "loc": [13, 3] }, "30": { "name": "WindowWall", "loc": [6, 3] }, "31": { "name": "WindowWall", "loc": [7, 3] }, "32": { "name": "WindowWall", "loc": [8, 3] }, "33": { "name": "WindowWall", "loc": [9, 3] }, "34": { "name": "WindowWall", "loc": [10, 3] }, "35": { "name": "WindowWall", "loc": [11, 3] }, "36": { "name": "WindowWall", "loc": [12, 3] }, "37": { "name": "LightSource", "loc": [9, 0] }, "38": { "name": "Box", "loc": [9, 14] }, "39": { "name": "LightConnector", "loc": [9, 6] } },
    "5": { "0": { "name": "Wall", "loc": [3, 14] }, "1": { "name": "Wall", "loc": [3, 13] }, "2": { "name": "Wall", "loc": [3, 12] }, "3": { "name": "Wall", "loc": [3, 0] }, "4": { "name": "Wall", "loc": [3, 1] }, "5": { "name": "Wall", "loc": [3, 2] }, "6": { "name": "Wall", "loc": [3, 6] }, "7": { "name": "Wall", "loc": [3, 7] }, "8": { "name": "Wall", "loc": [3, 8] }, "9": { "name": "Wall", "loc": [3, 3] }, "10": { "name": "Wall", "loc": [3, 11] }, "11": { "name": "Door", "locks": [17], "loc": [1, 11] }, "12": { "name": "Wall", "loc": [2, 11] }, "13": { "name": "Wall", "loc": [0, 11] }, "14": { "name": "Wall", "loc": [2, 3] }, "15": { "name": "Wall", "loc": [0, 3] }, "16": { "name": "Door", "locks": [22], "loc": [1, 3] }, "17": { "name": "LightReceiver", "loc": [4, 13] }, "18": { "name": "LightSource", "loc": [0, 7] }, "19": { "name": "Square", "loc": [1, 13] }, "20": { "name": "Portal", "locks": [21], "loc": [2, 1], "target": 32 }, "21": { "name": "Platform", "loc": [1, 1] }, "22": { "name": "LightReceiver", "loc": [4, 3] }, "23": { "name": "LightConnector", "loc": [8, 0] }, "24": { "name": "Wall", "loc": [6, 14] }, "25": { "name": "Wall", "loc": [6, 13] }, "26": { "name": "Wall", "loc": [6, 12] }, "27": { "name": "LightConnector", "loc": [9, 13] }, "28": { "name": "Wall", "loc": [6, 2] }, "29": { "name": "Wall", "loc": [6, 1] }, "30": { "name": "Wall", "loc": [6, 0] }, "31": { "name": "Player", "loc": [2, 7] }, "32": { "name": "Portal", "locks": [], "loc": [17, 1], "target": 20 }, "33": { "name": "Wall", "loc": [15, 0] }, "34": { "name": "Wall", "loc": [15, 1] }, "35": { "name": "Wall", "loc": [15, 2] }, "36": { "name": "Wall", "loc": [10, 0] }, "37": { "name": "Wall", "loc": [10, 1] }, "38": { "name": "Wall", "loc": [10, 2] }, "39": { "name": "Wall", "loc": [10, 3] }, "40": { "name": "Wall", "loc": [10, 6] }, "41": { "name": "Wall", "loc": [10, 7] }, "42": { "name": "Wall", "loc": [10, 8] }, "43": { "name": "Wall", "loc": [10, 9] }, "44": { "name": "Wall", "loc": [10, 10] }, "45": { "name": "Wall", "loc": [10, 11] }, "46": { "name": "Wall", "loc": [10, 12] }, "47": { "name": "Wall", "loc": [10, 13] }, "48": { "name": "Wall", "loc": [10, 14] }, "49": { "name": "Portal", "locks": [], "loc": [7, 7], "target": 50 }, "50": { "name": "Portal", "locks": [51], "loc": [13, 7], "target": 49 }, "51": { "name": "Platform", "loc": [13, 8] }, "52": { "name": "Box", "loc": [18, 13] }, "53": { "name": "Wall", "loc": [19, 11] }, "54": { "name": "Wall", "loc": [18, 11] }, "55": { "name": "Wall", "loc": [17, 11] }, "56": { "name": "Wall", "loc": [16, 11] }, "57": { "name": "Wall", "loc": [16, 12] }, "58": { "name": "Wall", "loc": [16, 14] }, "59": { "name": "Wall", "loc": [15, 11] }, "60": { "name": "Wall", "loc": [14, 11] }, "61": { "name": "Wall", "loc": [13, 11] }, "62": { "name": "Wall", "loc": [13, 12] }, "63": { "name": "Wall", "loc": [13, 14] }, "64": { "name": "Door", "locks": [67], "loc": [16, 13] }, "65": { "name": "Door", "locks": [68], "loc": [13, 13] }, "66": { "name": "Square", "loc": [13, 1] }, "67": { "name": "Platform", "loc": [15, 12] }, "68": { "name": "LightReceiver", "loc": [12, 12] }, "69": { "name": "LightConnector", "loc": [12, 4] }, "70": { "name": "WindowWall", "loc": [11, 6] }, "71": { "name": "WindowWall", "loc": [12, 6] }, "72": { "name": "WindowWall", "loc": [11, 3] }, "73": { "name": "WindowWall", "loc": [12, 3] }, "74": { "name": "Wall", "loc": [13, 3] }, "75": { "name": "Wall", "loc": [13, 6] }, "77": { "name": "WindowWallVertical", "loc": [3, 4] }, "78": { "name": "WindowWallVertical", "loc": [3, 5] }, "79": { "name": "WindowWallVertical", "loc": [3, 9] }, "80": { "name": "WindowWallVertical", "loc": [3, 10] }, "81": { "name": "WindowWallVertical", "loc": [10, 5] }, "82": { "name": "WindowWallVertical", "loc": [10, 4] }, "83": { "name": "WindowWallVertical", "loc": [13, 4] }, "84": { "name": "WindowWallVertical", "loc": [13, 5] }, "85": { "name": "Mine", "path": "[[17,9],[17,8],[17,7],[17,6],[17,5],[17,4]]", "loc": [17, 9] } }
}
