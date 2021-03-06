var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LEVELS = {
    "1": { "155": { "name": "Wall", "loc": [1, 9] }, "156": { "name": "Wall", "loc": [0, 9] }, "157": { "name": "Wall", "loc": [0, 5] }, "158": { "name": "Wall", "loc": [1, 5] }, "159": { "name": "Wall", "loc": [2, 5] }, "160": { "name": "Wall", "loc": [3, 5] }, "161": { "name": "Wall", "loc": [4, 5] }, "162": { "name": "Wall", "loc": [5, 5] }, "163": { "name": "Wall", "loc": [6, 5] }, "164": { "name": "Wall", "loc": [7, 5] }, "165": { "name": "Wall", "loc": [8, 5] }, "166": { "name": "Wall", "loc": [10, 5] }, "167": { "name": "Wall", "loc": [9, 5] }, "168": { "name": "Wall", "loc": [11, 5] }, "169": { "name": "Wall", "loc": [12, 5] }, "170": { "name": "Wall", "loc": [13, 5] }, "171": { "name": "Wall", "loc": [14, 5] }, "172": { "name": "Wall", "loc": [15, 5] }, "173": { "name": "Wall", "loc": [16, 5] }, "174": { "name": "Wall", "loc": [17, 5] }, "175": { "name": "Wall", "loc": [18, 5] }, "176": { "name": "Wall", "loc": [2, 9] }, "177": { "name": "Wall", "loc": [3, 9] }, "178": { "name": "Wall", "loc": [5, 9] }, "179": { "name": "Wall", "loc": [4, 9] }, "180": { "name": "Wall", "loc": [6, 9] }, "181": { "name": "Wall", "loc": [7, 9] }, "182": { "name": "Wall", "loc": [8, 9] }, "183": { "name": "Wall", "loc": [9, 9] }, "184": { "name": "Wall", "loc": [10, 9] }, "185": { "name": "Wall", "loc": [11, 9] }, "186": { "name": "Wall", "loc": [12, 9] }, "187": { "name": "Wall", "loc": [13, 9] }, "188": { "name": "Wall", "loc": [14, 9] }, "189": { "name": "Wall", "loc": [15, 9] }, "190": { "name": "Wall", "loc": [16, 9] }, "191": { "name": "Wall", "loc": [17, 9] }, "192": { "name": "Wall", "loc": [18, 9] }, "195": { "name": "Player", "loc": [1, 7] }, "196": { "name": "Door", "locks": [199], "loc": [15, 6] }, "197": { "name": "Door", "locks": [199], "loc": [15, 7] }, "198": { "name": "Door", "locks": [199], "loc": [15, 8] }, "199": { "name": "Platform", "loc": [13, 7] }, "200": { "name": "Box", "loc": [17, 7] }, "201": { "name": "Square", "loc": [11, 7] }, "202": { "name": "Mine", "path": "[[17,12],[16,12],[15,12],[14,12],[13,12],[12,12],[11,12],[10,12],[9,12],[8,12],[7,12],[6,12],[5,12],[4,12],[3,12],[2,12],[1,12]]", "loc": [17, 12] }, "203": { "name": "Mine", "path": "[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2]]", "loc": [1, 2] } },
    "2": { "67": { "name": "Wall", "loc": [0, 5] }, "68": { "name": "Wall", "loc": [0, 9] }, "69": { "name": "Wall", "loc": [1, 9] }, "70": { "name": "Wall", "loc": [2, 9] }, "71": { "name": "Wall", "loc": [1, 5] }, "72": { "name": "Wall", "loc": [2, 5] }, "73": { "name": "Wall", "loc": [3, 5] }, "74": { "name": "Wall", "loc": [3, 9] }, "75": { "name": "Wall", "loc": [4, 5] }, "76": { "name": "Wall", "loc": [4, 4] }, "77": { "name": "Wall", "loc": [4, 3] }, "78": { "name": "Wall", "loc": [4, 2] }, "79": { "name": "Wall", "loc": [4, 1] }, "80": { "name": "Wall", "loc": [4, 0] }, "81": { "name": "Wall", "loc": [8, 0] }, "82": { "name": "Wall", "loc": [8, 1] }, "83": { "name": "Wall", "loc": [8, 2] }, "84": { "name": "Wall", "loc": [8, 3] }, "85": { "name": "Wall", "loc": [8, 4] }, "86": { "name": "Wall", "loc": [8, 5] }, "87": { "name": "Wall", "loc": [5, 3] }, "88": { "name": "Wall", "loc": [7, 3] }, "89": { "name": "Door", "locks": [91], "loc": [6, 3] }, "90": { "name": "Square", "loc": [6, 1] }, "91": { "name": "Platform", "loc": [6, 5] }, "92": { "name": "Wall", "loc": [4, 9] }, "93": { "name": "Wall", "loc": [5, 9] }, "94": { "name": "Wall", "loc": [6, 9] }, "95": { "name": "Wall", "loc": [7, 9] }, "96": { "name": "Wall", "loc": [8, 9] }, "97": { "name": "Wall", "loc": [18, 0] }, "98": { "name": "Wall", "loc": [18, 1] }, "99": { "name": "Wall", "loc": [18, 2] }, "100": { "name": "Wall", "loc": [18, 3] }, "101": { "name": "Wall", "loc": [18, 4] }, "102": { "name": "Wall", "loc": [18, 5] }, "103": { "name": "Wall", "loc": [14, 0] }, "104": { "name": "Wall", "loc": [14, 1] }, "105": { "name": "Wall", "loc": [14, 2] }, "106": { "name": "Wall", "loc": [14, 3] }, "107": { "name": "Wall", "loc": [14, 4] }, "108": { "name": "Wall", "loc": [14, 5] }, "109": { "name": "Wall", "loc": [15, 3] }, "110": { "name": "Wall", "loc": [17, 3] }, "111": { "name": "Door", "locks": [112], "loc": [16, 3] }, "112": { "name": "Platform", "loc": [16, 5] }, "113": { "name": "Box", "loc": [16, 1] }, "114": { "name": "Square", "loc": [11, 1] }, "116": { "name": "Wall", "loc": [9, 4] }, "117": { "name": "Wall", "loc": [10, 4] }, "118": { "name": "Wall", "loc": [12, 4] }, "119": { "name": "Wall", "loc": [13, 4] }, "120": { "name": "Wall", "loc": [12, 3] }, "121": { "name": "Wall", "loc": [12, 2] }, "122": { "name": "Wall", "loc": [12, 1] }, "123": { "name": "Wall", "loc": [10, 3] }, "124": { "name": "Wall", "loc": [10, 2] }, "125": { "name": "Wall", "loc": [10, 1] }, "126": { "name": "Wall", "loc": [14, 6] }, "127": { "name": "Wall", "loc": [14, 7] }, "128": { "name": "Wall", "loc": [14, 8] }, "129": { "name": "Wall", "loc": [14, 9] }, "130": { "name": "Wall", "loc": [14, 10] }, "131": { "name": "Wall", "loc": [14, 11] }, "132": { "name": "Platform", "loc": [13, 11] }, "133": { "name": "Door", "locks": [132], "loc": [14, 12] }, "134": { "name": "Wall", "loc": [18, 6] }, "135": { "name": "Wall", "loc": [18, 7] }, "136": { "name": "Wall", "loc": [18, 8] }, "137": { "name": "Wall", "loc": [18, 9] }, "139": { "name": "Wall", "loc": [14, 13] }, "140": { "name": "Wall", "loc": [14, 14] }, "141": { "name": "Wall", "loc": [11, 6] }, "142": { "name": "Wall", "loc": [11, 7] }, "143": { "name": "Wall", "loc": [11, 8] }, "144": { "name": "Wall", "loc": [11, 9] }, "145": { "name": "Wall", "loc": [11, 10] }, "146": { "name": "Wall", "loc": [11, 11] }, "147": { "name": "Wall", "loc": [11, 12] }, "148": { "name": "Wall", "loc": [10, 12] }, "149": { "name": "Wall", "loc": [9, 12] }, "150": { "name": "Wall", "loc": [8, 12] }, "151": { "name": "Wall", "loc": [7, 12] }, "152": { "name": "Player", "loc": [1, 7] }, "153": { "name": "Mine", "path": "[[1,12],[2,12],[3,12],[4,12],[5,12],[6,12]]", "loc": [1, 12] }, "154": { "name": "Mine", "path": "[[16,13],[16,12],[16,11],[16,10],[16,9],[16,8],[16,7]]", "loc": [16, 13] } },
    "3": { "0": { "name": "Mine", "path": "[[1,13],[1,12],[1,11],[1,10],[1,9],[1,8],[1,7],[1,6],[1,5],[1,4]]", "loc": [1, 13] }, "1": { "name": "Mine", "path": "[[4,13],[4,12],[4,11],[4,10],[4,9],[4,8],[4,7],[4,6],[4,5],[4,4]]", "loc": [4, 13] }, "2": { "name": "Wall", "loc": [6, 11] }, "3": { "name": "Wall", "loc": [6, 10] }, "4": { "name": "Wall", "loc": [6, 9] }, "5": { "name": "Wall", "loc": [6, 8] }, "6": { "name": "Wall", "loc": [6, 7] }, "7": { "name": "Wall", "loc": [6, 6] }, "8": { "name": "Wall", "loc": [6, 5] }, "9": { "name": "Wall", "loc": [6, 4] }, "10": { "name": "Wall", "loc": [6, 3] }, "11": { "name": "Wall", "loc": [6, 2] }, "12": { "name": "Wall", "loc": [6, 1] }, "13": { "name": "Wall", "loc": [6, 0] }, "14": { "name": "Player", "loc": [2, 1] }, "15": { "name": "Square", "loc": [1, 1] }, "16": { "name": "Platform", "loc": [3, 1] }, "18": { "name": "Portal", "locks": [16], "loc": [3, 2], "target": 19 }, "19": { "name": "Portal", "locks": [], "loc": [9, 2], "target": 18 }, "21": { "name": "Square", "loc": [13, 2] }, "22": { "name": "Mine", "path": "[[17,2],[16,2],[15,2],[14,2],[13,2],[12,2],[11,2]]", "loc": [17, 2] }, "23": { "name": "Wall", "loc": [7, 11] }, "24": { "name": "Wall", "loc": [8, 11] }, "25": { "name": "Wall", "loc": [9, 11] }, "26": { "name": "Wall", "loc": [10, 11] }, "27": { "name": "Wall", "loc": [11, 11] }, "28": { "name": "Wall", "loc": [12, 11] }, "29": { "name": "Wall", "loc": [13, 11] }, "30": { "name": "Wall", "loc": [14, 11] }, "31": { "name": "Wall", "loc": [15, 11] }, "32": { "name": "Wall", "loc": [16, 11] }, "33": { "name": "Wall", "loc": [17, 11] }, "34": { "name": "Wall", "loc": [18, 11] }, "35": { "name": "Box", "loc": [17, 13] }, "36": { "name": "Wall", "loc": [15, 12] }, "37": { "name": "Wall", "loc": [15, 14] }, "38": { "name": "Door", "locks": [39], "loc": [15, 13] }, "39": { "name": "Platform", "loc": [13, 13] }, "40": { "name": "Wall", "loc": [11, 12] }, "41": { "name": "Wall", "loc": [11, 14] }, "42": { "name": "Door", "locks": [43], "loc": [11, 13] }, "43": { "name": "Platform", "loc": [9, 13] }, "44": { "name": "Wall", "loc": [7, 9] }, "45": { "name": "Wall", "loc": [8, 9] }, "46": { "name": "Wall", "loc": [9, 9] }, "47": { "name": "Wall", "loc": [10, 9] }, "48": { "name": "Wall", "loc": [11, 9] }, "49": { "name": "Wall", "loc": [13, 9] }, "50": { "name": "Wall", "loc": [15, 9] }, "51": { "name": "Wall", "loc": [17, 9] }, "52": { "name": "Wall", "loc": [18, 7] }, "53": { "name": "Wall", "loc": [17, 7] }, "54": { "name": "Wall", "loc": [16, 7] }, "55": { "name": "Wall", "loc": [15, 7] }, "56": { "name": "Wall", "loc": [14, 7] }, "57": { "name": "Wall", "loc": [13, 7] }, "58": { "name": "Wall", "loc": [11, 7] }, "59": { "name": "Wall", "loc": [9, 7] }, "60": { "name": "Wall", "loc": [7, 5] }, "61": { "name": "Wall", "loc": [8, 5] }, "62": { "name": "Wall", "loc": [9, 5] }, "63": { "name": "Wall", "loc": [10, 5] }, "64": { "name": "Wall", "loc": [11, 5] }, "65": { "name": "Wall", "loc": [12, 5] }, "66": { "name": "Wall", "loc": [13, 5] }, "67": { "name": "Wall", "loc": [15, 5] }, "68": { "name": "Wall", "loc": [17, 5] } },
    "4": { "0": { "name": "Player", "loc": [1, 7] }, "1": { "name": "Wall", "loc": [4, 14] }, "2": { "name": "Wall", "loc": [4, 13] }, "3": { "name": "Wall", "loc": [4, 12] }, "4": { "name": "Wall", "loc": [4, 11] }, "5": { "name": "Wall", "loc": [14, 14] }, "6": { "name": "Wall", "loc": [14, 13] }, "7": { "name": "Wall", "loc": [14, 12] }, "8": { "name": "Wall", "loc": [14, 11] }, "9": { "name": "Wall", "loc": [13, 11] }, "10": { "name": "Wall", "loc": [5, 11] }, "11": { "name": "Wall", "loc": [9, 11] }, "12": { "name": "Wall", "loc": [8, 11] }, "13": { "name": "Wall", "loc": [10, 11] }, "14": { "name": "Door", "locks": [18, 19], "loc": [6, 11] }, "15": { "name": "Door", "locks": [18, 19], "loc": [7, 11] }, "16": { "name": "Door", "locks": [18, 19], "loc": [11, 11] }, "17": { "name": "Door", "locks": [18, 19], "loc": [12, 11] }, "18": { "name": "LightReceiver", "loc": [8, 10] }, "19": { "name": "LightReceiver", "loc": [10, 10] }, "20": { "name": "Wall", "loc": [4, 0] }, "21": { "name": "Wall", "loc": [4, 1] }, "22": { "name": "Wall", "loc": [4, 2] }, "23": { "name": "Wall", "loc": [4, 3] }, "24": { "name": "Wall", "loc": [5, 3] }, "25": { "name": "Wall", "loc": [14, 0] }, "26": { "name": "Wall", "loc": [14, 1] }, "27": { "name": "Wall", "loc": [14, 2] }, "28": { "name": "Wall", "loc": [14, 3] }, "29": { "name": "Wall", "loc": [13, 3] }, "30": { "name": "WindowWall", "loc": [6, 3] }, "31": { "name": "WindowWall", "loc": [7, 3] }, "32": { "name": "WindowWall", "loc": [8, 3] }, "33": { "name": "WindowWall", "loc": [9, 3] }, "34": { "name": "WindowWall", "loc": [10, 3] }, "35": { "name": "WindowWall", "loc": [11, 3] }, "36": { "name": "WindowWall", "loc": [12, 3] }, "37": { "name": "LightSource", "loc": [9, 0] }, "38": { "name": "Box", "loc": [9, 14] }, "39": { "name": "LightConnector", "loc": [9, 6] } },
    "5": { "0": { "name": "Wall", "loc": [3, 14] }, "1": { "name": "Wall", "loc": [3, 13] }, "2": { "name": "Wall", "loc": [3, 12] }, "3": { "name": "Wall", "loc": [3, 0] }, "4": { "name": "Wall", "loc": [3, 1] }, "5": { "name": "Wall", "loc": [3, 2] }, "6": { "name": "Wall", "loc": [3, 6] }, "7": { "name": "Wall", "loc": [3, 7] }, "8": { "name": "Wall", "loc": [3, 8] }, "9": { "name": "Wall", "loc": [3, 3] }, "10": { "name": "Wall", "loc": [3, 11] }, "11": { "name": "Door", "locks": [17], "loc": [1, 11] }, "12": { "name": "Wall", "loc": [2, 11] }, "13": { "name": "Wall", "loc": [0, 11] }, "14": { "name": "Wall", "loc": [2, 3] }, "15": { "name": "Wall", "loc": [0, 3] }, "16": { "name": "Door", "locks": [22], "loc": [1, 3] }, "17": { "name": "LightReceiver", "loc": [4, 13] }, "18": { "name": "LightSource", "loc": [0, 7] }, "19": { "name": "Square", "loc": [1, 13] }, "20": { "name": "Portal", "locks": [21], "loc": [2, 1], "target": 32 }, "21": { "name": "Platform", "loc": [1, 1] }, "22": { "name": "LightReceiver", "loc": [4, 3] }, "23": { "name": "LightConnector", "loc": [8, 0] }, "24": { "name": "Wall", "loc": [6, 14] }, "25": { "name": "Wall", "loc": [6, 13] }, "26": { "name": "Wall", "loc": [6, 12] }, "27": { "name": "LightConnector", "loc": [9, 13] }, "28": { "name": "Wall", "loc": [6, 2] }, "29": { "name": "Wall", "loc": [6, 1] }, "30": { "name": "Wall", "loc": [6, 0] }, "31": { "name": "Player", "loc": [2, 7] }, "32": { "name": "Portal", "locks": [], "loc": [17, 1], "target": 20 }, "33": { "name": "Wall", "loc": [15, 0] }, "34": { "name": "Wall", "loc": [15, 1] }, "35": { "name": "Wall", "loc": [15, 2] }, "36": { "name": "Wall", "loc": [10, 0] }, "37": { "name": "Wall", "loc": [10, 1] }, "38": { "name": "Wall", "loc": [10, 2] }, "39": { "name": "Wall", "loc": [10, 3] }, "40": { "name": "Wall", "loc": [10, 6] }, "41": { "name": "Wall", "loc": [10, 7] }, "42": { "name": "Wall", "loc": [10, 8] }, "43": { "name": "Wall", "loc": [10, 9] }, "44": { "name": "Wall", "loc": [10, 10] }, "45": { "name": "Wall", "loc": [10, 11] }, "46": { "name": "Wall", "loc": [10, 12] }, "47": { "name": "Wall", "loc": [10, 13] }, "48": { "name": "Wall", "loc": [10, 14] }, "49": { "name": "Portal", "locks": [], "loc": [7, 7], "target": 50 }, "50": { "name": "Portal", "locks": [51], "loc": [13, 7], "target": 49 }, "51": { "name": "Platform", "loc": [13, 8] }, "52": { "name": "Box", "loc": [18, 13] }, "53": { "name": "Wall", "loc": [19, 11] }, "54": { "name": "Wall", "loc": [18, 11] }, "55": { "name": "Wall", "loc": [17, 11] }, "56": { "name": "Wall", "loc": [16, 11] }, "57": { "name": "Wall", "loc": [16, 12] }, "58": { "name": "Wall", "loc": [16, 14] }, "59": { "name": "Wall", "loc": [15, 11] }, "60": { "name": "Wall", "loc": [14, 11] }, "61": { "name": "Wall", "loc": [13, 11] }, "62": { "name": "Wall", "loc": [13, 12] }, "63": { "name": "Wall", "loc": [13, 14] }, "64": { "name": "Door", "locks": [67], "loc": [16, 13] }, "65": { "name": "Door", "locks": [68], "loc": [13, 13] }, "66": { "name": "Square", "loc": [13, 1] }, "67": { "name": "Platform", "loc": [15, 12] }, "68": { "name": "LightReceiver", "loc": [12, 12] }, "69": { "name": "LightConnector", "loc": [12, 4] }, "70": { "name": "WindowWall", "loc": [11, 6] }, "71": { "name": "WindowWall", "loc": [12, 6] }, "72": { "name": "WindowWall", "loc": [11, 3] }, "73": { "name": "WindowWall", "loc": [12, 3] }, "74": { "name": "Wall", "loc": [13, 3] }, "75": { "name": "Wall", "loc": [13, 6] }, "77": { "name": "WindowWallVertical", "loc": [3, 4] }, "78": { "name": "WindowWallVertical", "loc": [3, 5] }, "79": { "name": "WindowWallVertical", "loc": [3, 9] }, "80": { "name": "WindowWallVertical", "loc": [3, 10] }, "81": { "name": "WindowWallVertical", "loc": [10, 5] }, "82": { "name": "WindowWallVertical", "loc": [10, 4] }, "83": { "name": "WindowWallVertical", "loc": [13, 4] }, "84": { "name": "WindowWallVertical", "loc": [13, 5] }, "85": { "name": "Mine", "path": "[[17,9],[17,8],[17,7],[17,6],[17,5],[17,4]]", "loc": [17, 9] } },
    "6": { "444": { "name": "Player", "loc": [1, 9] }, "447": { "name": "Box", "loc": [19, 7] }, "453": { "name": "Door", "locks": [465], "loc": [19, 6] }, "454": { "name": "Door", "locks": [465], "loc": [18, 6] }, "455": { "name": "Door", "locks": [465], "loc": [18, 7] }, "456": { "name": "Door", "locks": [465], "loc": [18, 8] }, "457": { "name": "Door", "locks": [465], "loc": [19, 8] }, "463": { "name": "LightSource", "loc": [0, 7] }, "465": { "name": "LightReceiver", "loc": [17, 7] }, "466": { "name": "Wall", "loc": [3, 5] }, "467": { "name": "Wall", "loc": [3, 6] }, "468": { "name": "Wall", "loc": [3, 7] }, "469": { "name": "Wall", "loc": [3, 8] }, "470": { "name": "Wall", "loc": [3, 9] }, "472": { "name": "Mine", "path": "[[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7],[14,7]]", "loc": [5, 7] }, "473": { "name": "Wall", "loc": [16, 5] }, "474": { "name": "Wall", "loc": [16, 6] }, "475": { "name": "Wall", "loc": [16, 7] }, "476": { "name": "Wall", "loc": [16, 8] }, "477": { "name": "Wall", "loc": [16, 9] }, "478": { "name": "Wall", "loc": [4, 5] }, "479": { "name": "Wall", "loc": [5, 5] }, "480": { "name": "Wall", "loc": [6, 5] }, "481": { "name": "Wall", "loc": [7, 5] }, "482": { "name": "Wall", "loc": [8, 5] }, "485": { "name": "Wall", "loc": [11, 5] }, "486": { "name": "Wall", "loc": [12, 5] }, "487": { "name": "Wall", "loc": [13, 5] }, "488": { "name": "Wall", "loc": [14, 5] }, "489": { "name": "Wall", "loc": [15, 5] }, "490": { "name": "Wall", "loc": [15, 9] }, "491": { "name": "Wall", "loc": [14, 9] }, "492": { "name": "Wall", "loc": [13, 9] }, "493": { "name": "Wall", "loc": [12, 9] }, "494": { "name": "Wall", "loc": [11, 9] }, "497": { "name": "Wall", "loc": [8, 9] }, "498": { "name": "Wall", "loc": [7, 9] }, "499": { "name": "Wall", "loc": [6, 9] }, "500": { "name": "Wall", "loc": [5, 9] }, "501": { "name": "Wall", "loc": [4, 9] }, "502": { "name": "WindowWall", "loc": [9, 5] }, "503": { "name": "WindowWall", "loc": [10, 5] }, "504": { "name": "WindowWall", "loc": [9, 9] }, "505": { "name": "WindowWall", "loc": [10, 9] }, "506": { "name": "Wall", "loc": [4, 4] }, "507": { "name": "Wall", "loc": [4, 3] }, "508": { "name": "Wall", "loc": [4, 1] }, "510": { "name": "Wall", "loc": [7, 4] }, "511": { "name": "Wall", "loc": [7, 3] }, "512": { "name": "Wall", "loc": [7, 1] }, "515": { "name": "Wall", "loc": [12, 4] }, "516": { "name": "Wall", "loc": [12, 3] }, "517": { "name": "Wall", "loc": [12, 1] }, "518": { "name": "Wall", "loc": [12, 0] }, "519": { "name": "Wall", "loc": [15, 4] }, "520": { "name": "Wall", "loc": [15, 3] }, "521": { "name": "Wall", "loc": [15, 1] }, "522": { "name": "Wall", "loc": [15, 0] }, "523": { "name": "Door", "locks": [549], "loc": [4, 2] }, "524": { "name": "Door", "locks": [544], "loc": [7, 2] }, "525": { "name": "Door", "locks": [545], "loc": [12, 2] }, "526": { "name": "Door", "locks": [546], "loc": [15, 2] }, "527": { "name": "Wall", "loc": [4, 10] }, "528": { "name": "Wall", "loc": [4, 11] }, "529": { "name": "Wall", "loc": [4, 12] }, "530": { "name": "Wall", "loc": [4, 14] }, "531": { "name": "Wall", "loc": [7, 10] }, "532": { "name": "Wall", "loc": [7, 11] }, "533": { "name": "Wall", "loc": [7, 12] }, "534": { "name": "Wall", "loc": [7, 14] }, "536": { "name": "Wall", "loc": [12, 10] }, "537": { "name": "Wall", "loc": [12, 11] }, "538": { "name": "Wall", "loc": [12, 12] }, "539": { "name": "Wall", "loc": [15, 10] }, "540": { "name": "Wall", "loc": [15, 11] }, "541": { "name": "Wall", "loc": [15, 12] }, "542": { "name": "Wall", "loc": [15, 14] }, "543": { "name": "Wall", "loc": [12, 14] }, "544": { "name": "LightReceiver", "loc": [6, 3] }, "545": { "name": "LightReceiver", "loc": [11, 3] }, "546": { "name": "LightReceiver", "loc": [14, 3] }, "549": { "name": "LightReceiver", "loc": [3, 3] }, "551": { "name": "Door", "locks": [555], "loc": [4, 13] }, "552": { "name": "Door", "locks": [556], "loc": [7, 13] }, "553": { "name": "Door", "locks": [557], "loc": [12, 13] }, "554": { "name": "Door", "locks": [558], "loc": [15, 13] }, "555": { "name": "LightReceiver", "loc": [3, 12] }, "556": { "name": "LightReceiver", "loc": [6, 12] }, "557": { "name": "LightReceiver", "loc": [11, 12] }, "558": { "name": "LightReceiver", "loc": [14, 12] }, "559": { "name": "Wall", "loc": [8, 1] }, "560": { "name": "Wall", "loc": [11, 1] }, "561": { "name": "WindowWall", "loc": [9, 1] }, "562": { "name": "WindowWall", "loc": [10, 1] }, "563": { "name": "LightConnector", "loc": [9, 0] }, "564": { "name": "LightConnector", "loc": [10, 0] }, "567": { "name": "Wall", "loc": [16, 11] }, "568": { "name": "Wall", "loc": [17, 11] }, "569": { "name": "Wall", "loc": [19, 11] }, "570": { "name": "Door", "locks": [584], "loc": [18, 11] }, "572": { "name": "Wall", "loc": [16, 3] }, "573": { "name": "Wall", "loc": [17, 3] }, "574": { "name": "Wall", "loc": [18, 3] }, "575": { "name": "Wall", "loc": [19, 3] }, "576": { "name": "Square", "loc": [18, 2] }, "577": { "name": "WindowWallVertical", "loc": [7, 0] }, "578": { "name": "WindowWallVertical", "loc": [4, 0] }, "580": { "name": "LightConnector", "loc": [1, 5] }, "581": { "name": "LightConnector", "loc": [5, 0] }, "582": { "name": "LightConnector", "loc": [5, 10] }, "583": { "name": "LightConnector", "loc": [18, 0] }, "584": { "name": "Platform", "loc": [19, 12] } },
    "7": { "0": { "name": "Wall", "loc": [4, 0] }, "1": { "name": "Wall", "loc": [4, 1] }, "2": { "name": "Wall", "loc": [4, 3] }, "4": { "name": "Mine", "path": "[[8,2],[7,2],[6,2],[5,2],[4,2],[3,2],[2,2],[1,2]]", "loc": [8, 2] }, "5": { "name": "Player", "loc": [1, 1] }, "6": { "name": "Door", "locks": [8], "loc": [4, 2] }, "8": { "name": "Platform", "loc": [3, 1] }, "9": { "name": "Square", "loc": [3, 3] }, "10": { "name": "Wall", "loc": [0, 4] }, "11": { "name": "Wall", "loc": [1, 4] }, "12": { "name": "Wall", "loc": [2, 4] }, "13": { "name": "Wall", "loc": [3, 4] }, "14": { "name": "Wall", "loc": [4, 4] }, "15": { "name": "Wall", "loc": [5, 4] }, "16": { "name": "Wall", "loc": [6, 4] }, "17": { "name": "Wall", "loc": [7, 4] }, "18": { "name": "Wall", "loc": [8, 4] }, "19": { "name": "Wall", "loc": [9, 4] }, "20": { "name": "Wall", "loc": [10, 4] }, "21": { "name": "Wall", "loc": [11, 4] }, "23": { "name": "Wall", "loc": [11, 1] }, "24": { "name": "Wall", "loc": [11, 0] }, "25": { "name": "Mine", "path": "[[17,2],[16,2],[15,2],[14,2],[13,2],[12,2],[11,2],[10,2],[9,2],[8,2],[7,2],[6,2]]", "loc": [17, 2] }, "26": { "name": "Door", "locks": [27], "loc": [11, 2] }, "27": { "name": "Platform", "loc": [10, 1] }, "28": { "name": "Square", "loc": [5, 1] }, "29": { "name": "Platform", "loc": [12, 1] }, "30": { "name": "Wall", "loc": [12, 4] }, "31": { "name": "Wall", "loc": [13, 4] }, "32": { "name": "Wall", "loc": [14, 4] }, "33": { "name": "Wall", "loc": [15, 4] }, "34": { "name": "Platform", "loc": [16, 3] }, "36": { "name": "Wall", "loc": [16, 4] }, "38": { "name": "Wall", "loc": [19, 4] }, "39": { "name": "Door", "locks": [34], "loc": [17, 4] }, "40": { "name": "Wall", "loc": [15, 5] }, "41": { "name": "Wall", "loc": [15, 6] }, "42": { "name": "Wall", "loc": [15, 7] }, "43": { "name": "Door", "locks": [29], "loc": [11, 3] }, "44": { "name": "Mine", "path": "[[17,6],[17,7],[17,8],[17,9],[17,10],[17,11],[17,12],[17,13]]", "loc": [17, 6] }, "45": { "name": "LightSource", "loc": [19, 9] }, "46": { "name": "WindowWallVertical", "loc": [15, 8] }, "47": { "name": "WindowWallVertical", "loc": [15, 9] }, "48": { "name": "WindowWallVertical", "loc": [15, 10] }, "49": { "name": "Wall", "loc": [15, 11] }, "50": { "name": "Wall", "loc": [15, 12] }, "51": { "name": "Door", "locks": [53], "loc": [15, 13] }, "52": { "name": "Wall", "loc": [15, 14] }, "53": { "name": "Platform", "loc": [16, 12] }, "58": { "name": "Mine", "path": "[[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[13,13]]", "loc": [13, 6] }, "59": { "name": "Mine", "path": "[[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,13]]", "loc": [10, 6] }, "60": { "name": "LightConnector", "loc": [13, 10] }, "61": { "name": "LightConnector", "loc": [10, 10] }, "63": { "name": "Wall", "loc": [8, 6] }, "64": { "name": "Wall", "loc": [8, 7] }, "65": { "name": "Wall", "loc": [8, 8] }, "66": { "name": "Wall", "loc": [8, 9] }, "67": { "name": "Wall", "loc": [8, 10] }, "68": { "name": "Wall", "loc": [8, 11] }, "69": { "name": "Wall", "loc": [8, 12] }, "70": { "name": "Wall", "loc": [8, 13] }, "72": { "name": "WindowWallVertical", "loc": [8, 14] }, "73": { "name": "LightReceiver", "loc": [4, 14] }, "74": { "name": "Wall", "loc": [3, 14] }, "75": { "name": "Wall", "loc": [3, 12] }, "76": { "name": "Wall", "loc": [3, 11] }, "77": { "name": "Wall", "loc": [3, 10] }, "78": { "name": "Wall", "loc": [3, 9] }, "79": { "name": "Wall", "loc": [3, 8] }, "80": { "name": "Wall", "loc": [3, 7] }, "81": { "name": "Wall", "loc": [3, 6] }, "82": { "name": "Wall", "loc": [3, 5] }, "83": { "name": "Door", "locks": [73], "loc": [3, 13] }, "85": { "name": "Wall", "loc": [4, 9] }, "86": { "name": "Mine", "path": "[[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13]]", "loc": [6, 6] }, "87": { "name": "Square", "loc": [19, 3] }, "88": { "name": "Door", "locks": [89], "loc": [18, 4] }, "89": { "name": "Platform", "loc": [19, 5] }, "90": { "name": "Wall", "loc": [2, 11] }, "91": { "name": "Wall", "loc": [0, 11] }, "92": { "name": "Platform", "loc": [0, 12] }, "93": { "name": "Door", "locks": [92], "loc": [1, 11] }, "94": { "name": "Box", "loc": [1, 7] } },
    "8": { "194": { "name": "Box", "loc": [9, 8] }, "195": { "name": "Wall", "loc": [10, 7] }, "196": { "name": "Wall", "loc": [9, 7] }, "197": { "name": "Wall", "loc": [8, 7] }, "198": { "name": "Wall", "loc": [8, 8] }, "199": { "name": "Wall", "loc": [8, 9] }, "200": { "name": "Wall", "loc": [9, 9] }, "201": { "name": "Wall", "loc": [10, 9] }, "202": { "name": "Wall", "loc": [11, 9] }, "203": { "name": "Wall", "loc": [12, 9] }, "204": { "name": "Wall", "loc": [13, 9] }, "205": { "name": "Wall", "loc": [13, 8] }, "206": { "name": "Wall", "loc": [13, 7] }, "207": { "name": "Wall", "loc": [13, 6] }, "208": { "name": "Wall", "loc": [13, 5] }, "209": { "name": "Door", "locks": [210], "loc": [10, 8] }, "210": { "name": "LightReceiver", "loc": [12, 8] }, "211": { "name": "Wall", "loc": [12, 5] }, "212": { "name": "Wall", "loc": [11, 5] }, "213": { "name": "Wall", "loc": [10, 5] }, "214": { "name": "Wall", "loc": [9, 5] }, "215": { "name": "Wall", "loc": [8, 5] }, "216": { "name": "Wall", "loc": [7, 5] }, "217": { "name": "Wall", "loc": [6, 5] }, "218": { "name": "Wall", "loc": [6, 7] }, "219": { "name": "Wall", "loc": [6, 6] }, "220": { "name": "Wall", "loc": [6, 8] }, "221": { "name": "Wall", "loc": [6, 9] }, "222": { "name": "Wall", "loc": [6, 10] }, "223": { "name": "Wall", "loc": [6, 11] }, "224": { "name": "Wall", "loc": [7, 11] }, "225": { "name": "Wall", "loc": [8, 11] }, "226": { "name": "Wall", "loc": [9, 11] }, "227": { "name": "Wall", "loc": [10, 11] }, "228": { "name": "Wall", "loc": [11, 11] }, "229": { "name": "Platform", "loc": [7, 10] }, "230": { "name": "Player", "loc": [11, 8] }, "231": { "name": "LightConnector", "loc": [7, 6] }, "232": { "name": "LightConnector", "loc": [12, 6] }, "233": { "name": "LightSource", "loc": [0, 7] }, "234": { "name": "Square", "loc": [7, 9] }, "235": { "name": "Wall", "loc": [12, 11] }, "236": { "name": "Wall", "loc": [13, 11] }, "237": { "name": "LightConnector", "loc": [0, 0] }, "238": { "name": "LightConnector", "loc": [0, 14] }, "239": { "name": "Mine", "path": "[[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1]]", "loc": [4, 1] }, "240": { "name": "Mine", "path": "[[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[11,3],[12,3],[13,3],[14,3],[15,3]]", "loc": [4, 3] }, "241": { "name": "WindowWall", "loc": [0, 13] }, "242": { "name": "WindowWallVertical", "loc": [1, 14] }, "243": { "name": "Wall", "loc": [1, 13] }, "244": { "name": "WindowWall", "loc": [0, 1] }, "245": { "name": "WindowWallVertical", "loc": [1, 0] }, "246": { "name": "Wall", "loc": [1, 1] }, "247": { "name": "Wall", "loc": [13, 12] }, "248": { "name": "Wall", "loc": [13, 13] }, "249": { "name": "WindowWallVertical", "loc": [13, 14] }, "250": { "name": "Wall", "loc": [6, 13] }, "251": { "name": "Wall", "loc": [6, 12] }, "252": { "name": "Door", "locks": [253], "loc": [6, 14] }, "253": { "name": "Platform", "loc": [5, 13] }, "254": { "name": "Door", "locks": [258], "loc": [19, 1] }, "255": { "name": "Wall", "loc": [18, 1] }, "256": { "name": "Door", "locks": [257], "loc": [18, 0] }, "257": { "name": "Platform", "loc": [17, 1] }, "258": { "name": "LightReceiver", "loc": [18, 2] }, "259": { "name": "LightConnector", "loc": [19, 0] }, "260": { "name": "Wall", "loc": [14, 5] }, "261": { "name": "Wall", "loc": [15, 5] }, "262": { "name": "Wall", "loc": [16, 5] }, "263": { "name": "Platform", "loc": [16, 6] }, "264": { "name": "Door", "locks": [263], "loc": [17, 5] }, "265": { "name": "Door", "locks": [267], "loc": [19, 5] }, "266": { "name": "Wall", "loc": [18, 5] }, "267": { "name": "Platform", "loc": [18, 4] }, "268": { "name": "LightConnector", "loc": [10, 12] }, "269": { "name": "Wall", "loc": [14, 12] }, "270": { "name": "Wall", "loc": [16, 12] }, "271": { "name": "Wall", "loc": [17, 12] }, "272": { "name": "Wall", "loc": [18, 12] }, "273": { "name": "Door", "locks": [274], "loc": [19, 12] }, "274": { "name": "LightReceiver", "loc": [18, 13] }, "275": { "name": "Door", "locks": [276], "loc": [15, 12] }, "276": { "name": "Platform", "loc": [16, 11] }, "277": { "name": "Wall", "loc": [10, 2] }, "278": { "name": "Wall", "loc": [10, 0] }, "279": { "name": "Wall", "loc": [10, 4] }, "280": { "name": "Wall", "loc": [5, 7] }, "281": { "name": "Wall", "loc": [5, 9] }, "282": { "name": "Platform", "loc": [3, 7] }, "283": { "name": "Platform", "loc": [3, 9] }, "284": { "name": "Door", "locks": [282, 283], "loc": [4, 8] }, "285": { "name": "Wall", "loc": [4, 7] }, "286": { "name": "Wall", "loc": [4, 9] }, "287": { "name": "LightConnector", "loc": [5, 8] }, "288": { "name": "Door", "locks": [229], "loc": [9, 10] }, "291": { "name": "Mine", "path": "[[18,11],[18,10],[18,9],[18,8],[18,7],[18,6]]", "loc": [18, 11] }, "295": { "name": "Wall", "loc": [16, 9] }, "296": { "name": "Wall", "loc": [16, 8] } },
    "9": { "117": { "name": "Player", "loc": [19, 7] }, "118": { "name": "Box", "loc": [0, 7] }, "119": { "name": "Wall", "loc": [0, 5] }, "120": { "name": "Wall", "loc": [1, 5] }, "121": { "name": "Wall", "loc": [0, 9] }, "122": { "name": "Wall", "loc": [1, 9] }, "123": { "name": "Wall", "loc": [2, 9] }, "124": { "name": "Wall", "loc": [2, 5] }, "125": { "name": "Wall", "loc": [2, 6] }, "126": { "name": "Wall", "loc": [2, 8] }, "127": { "name": "Door", "locks": [128, 129, 143, 142, 192, 193], "loc": [2, 7] }, "128": { "name": "Platform", "loc": [19, 8] }, "129": { "name": "Platform", "loc": [19, 6] }, "130": { "name": "Wall", "loc": [10, 3] }, "131": { "name": "Wall", "loc": [10, 4] }, "132": { "name": "Wall", "loc": [10, 5] }, "133": { "name": "Wall", "loc": [10, 6] }, "134": { "name": "Wall", "loc": [10, 7] }, "135": { "name": "Wall", "loc": [10, 8] }, "136": { "name": "Wall", "loc": [10, 9] }, "137": { "name": "Wall", "loc": [10, 11] }, "138": { "name": "Wall", "loc": [10, 10] }, "139": { "name": "Wall", "loc": [2, 10] }, "140": { "name": "Wall", "loc": [2, 11] }, "141": { "name": "Wall", "loc": [2, 12] }, "142": { "name": "Platform", "loc": [19, 5] }, "143": { "name": "Platform", "loc": [19, 9] }, "144": { "name": "Door", "locks": [146], "loc": [2, 13] }, "145": { "name": "Wall", "loc": [2, 14] }, "146": { "name": "Platform", "loc": [3, 12] }, "147": { "name": "Square", "loc": [11, 6] }, "148": { "name": "Square", "loc": [11, 8] }, "149": { "name": "Square", "loc": [0, 10] }, "150": { "name": "Wall", "loc": [2, 4] }, "151": { "name": "Wall", "loc": [2, 3] }, "152": { "name": "Wall", "loc": [13, 12] }, "153": { "name": "Wall", "loc": [13, 10] }, "154": { "name": "Wall", "loc": [13, 11] }, "155": { "name": "Wall", "loc": [17, 10] }, "156": { "name": "Wall", "loc": [17, 11] }, "157": { "name": "Wall", "loc": [17, 12] }, "158": { "name": "Wall", "loc": [17, 13] }, "159": { "name": "Wall", "loc": [13, 13] }, "160": { "name": "Wall", "loc": [14, 13] }, "161": { "name": "Wall", "loc": [16, 13] }, "162": { "name": "Door", "locks": [164, 163], "loc": [15, 13] }, "163": { "name": "Platform", "loc": [14, 14] }, "164": { "name": "Platform", "loc": [16, 14] }, "165": { "name": "Portal", "locks": [190], "loc": [15, 12], "target": 218 }, "166": { "name": "Wall", "loc": [13, 9] }, "167": { "name": "Wall", "loc": [14, 9] }, "168": { "name": "Wall", "loc": [15, 9] }, "169": { "name": "Wall", "loc": [16, 9] }, "170": { "name": "Wall", "loc": [17, 9] }, "171": { "name": "Wall", "loc": [13, 1] }, "172": { "name": "Wall", "loc": [14, 1] }, "173": { "name": "Wall", "loc": [16, 1] }, "174": { "name": "Wall", "loc": [17, 1] }, "175": { "name": "Wall", "loc": [17, 2] }, "176": { "name": "Wall", "loc": [17, 4] }, "177": { "name": "Wall", "loc": [17, 3] }, "178": { "name": "Wall", "loc": [17, 5] }, "179": { "name": "Wall", "loc": [16, 5] }, "180": { "name": "Wall", "loc": [15, 5] }, "181": { "name": "Wall", "loc": [14, 5] }, "182": { "name": "Wall", "loc": [13, 5] }, "183": { "name": "Wall", "loc": [13, 4] }, "184": { "name": "Wall", "loc": [13, 3] }, "185": { "name": "Wall", "loc": [13, 2] }, "186": { "name": "Door", "locks": [188, 187], "loc": [15, 1] }, "187": { "name": "Platform", "loc": [14, 0] }, "188": { "name": "Platform", "loc": [16, 0] }, "189": { "name": "Square", "loc": [15, 4] }, "190": { "name": "Platform", "loc": [15, 10] }, "191": { "name": "Mine", "path": "[[17,7],[16,7],[15,7],[14,7],[13,7]]", "loc": [17, 7] }, "192": { "name": "Platform", "loc": [19, 10] }, "193": { "name": "Platform", "loc": [19, 4] }, "194": { "name": "LightConnector", "loc": [0, 3] }, "195": { "name": "LightSource", "loc": [0, 13] }, "196": { "name": "Mine", "path": "[[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1]]", "loc": [1, 1] }, "197": { "name": "Wall", "loc": [4, 3] }, "198": { "name": "Wall", "loc": [4, 2] }, "199": { "name": "Wall", "loc": [4, 0] }, "200": { "name": "Door", "locks": [224], "loc": [4, 1] }, "201": { "name": "WindowWall", "loc": [3, 9] }, "202": { "name": "WindowWall", "loc": [4, 9] }, "203": { "name": "WindowWall", "loc": [5, 9] }, "204": { "name": "WindowWall", "loc": [6, 9] }, "205": { "name": "WindowWall", "loc": [7, 9] }, "206": { "name": "WindowWall", "loc": [8, 9] }, "207": { "name": "WindowWall", "loc": [9, 9] }, "208": { "name": "WindowWall", "loc": [3, 5] }, "209": { "name": "WindowWall", "loc": [4, 5] }, "210": { "name": "WindowWall", "loc": [5, 5] }, "211": { "name": "WindowWall", "loc": [6, 5] }, "212": { "name": "WindowWall", "loc": [7, 5] }, "213": { "name": "WindowWall", "loc": [8, 5] }, "214": { "name": "WindowWall", "loc": [9, 5] }, "215": { "name": "Portal", "locks": [217], "loc": [8, 10], "target": 216 }, "216": { "name": "Portal", "locks": [], "loc": [8, 4], "target": 215 }, "217": { "name": "Platform", "loc": [7, 10] }, "218": { "name": "Portal", "locks": [], "loc": [8, 12], "target": 165 }, "219": { "name": "LightConnector", "loc": [8, 14] }, "220": { "name": "Portal", "locks": [221], "loc": [11, 7], "target": 222 }, "221": { "name": "Platform", "loc": [12, 7] }, "222": { "name": "Portal", "locks": [], "loc": [9, 7], "target": 220 }, "223": { "name": "Square", "loc": [6, 7] }, "224": { "name": "LightReceiver", "loc": [5, 2] }, "225": { "name": "Wall", "loc": [3, 3] }, "226": { "name": "Wall", "loc": [10, 2] }, "227": { "name": "Wall", "loc": [11, 2] }, "228": { "name": "Wall", "loc": [11, 1] }, "229": { "name": "Wall", "loc": [11, 0] }, "230": { "name": "Wall", "loc": [10, 12] }, "231": { "name": "Wall", "loc": [11, 12] }, "232": { "name": "Wall", "loc": [11, 13] }, "233": { "name": "Wall", "loc": [11, 14] } },
    "10": { "404": { "name": "Player", "loc": [18, 1] }, "406": { "name": "Wall", "loc": [16, 0] }, "407": { "name": "Wall", "loc": [16, 1] }, "408": { "name": "Wall", "loc": [16, 2] }, "409": { "name": "Wall", "loc": [16, 3] }, "410": { "name": "Mine", "path": "[[18,4],[18,5],[18,6],[18,7],[18,8],[18,9],[18,10],[18,11],[18,12]]", "loc": [18, 4] }, "411": { "name": "Wall", "loc": [16, 4] }, "412": { "name": "Wall", "loc": [16, 14] }, "413": { "name": "Wall", "loc": [16, 13] }, "414": { "name": "Wall", "loc": [16, 12] }, "415": { "name": "Wall", "loc": [16, 11] }, "416": { "name": "Wall", "loc": [16, 7] }, "417": { "name": "Wall", "loc": [16, 9] }, "418": { "name": "Square", "loc": [18, 13] }, "419": { "name": "Wall", "loc": [16, 5] }, "420": { "name": "Door", "locks": [421], "loc": [16, 8] }, "421": { "name": "Platform", "loc": [17, 7] }, "422": { "name": "Wall", "loc": [15, 5] }, "423": { "name": "Wall", "loc": [15, 6] }, "424": { "name": "Wall", "loc": [15, 7] }, "425": { "name": "Wall", "loc": [15, 9] }, "426": { "name": "Wall", "loc": [15, 10] }, "427": { "name": "Wall", "loc": [15, 11] }, "428": { "name": "Mine", "path": "[[14,8],[13,8],[12,8],[11,8],[10,8],[9,8],[8,8],[7,8],[6,8],[5,8]]", "loc": [14, 8] }, "429": { "name": "Wall", "loc": [14, 6] }, "430": { "name": "Wall", "loc": [13, 6] }, "431": { "name": "Wall", "loc": [12, 6] }, "432": { "name": "Wall", "loc": [14, 10] }, "433": { "name": "Wall", "loc": [12, 10] }, "434": { "name": "Wall", "loc": [11, 6] }, "435": { "name": "Wall", "loc": [11, 10] }, "436": { "name": "Wall", "loc": [10, 6] }, "437": { "name": "Wall", "loc": [10, 10] }, "438": { "name": "Wall", "loc": [12, 11] }, "439": { "name": "Wall", "loc": [12, 12] }, "440": { "name": "Wall", "loc": [13, 12] }, "441": { "name": "Wall", "loc": [13, 13] }, "442": { "name": "Wall", "loc": [14, 13] }, "443": { "name": "LightSource", "loc": [3, 0] }, "444": { "name": "LightConnector", "loc": [15, 12] }, "445": { "name": "LightReceiver", "loc": [3, 14] }, "446": { "name": "Wall", "loc": [2, 14] }, "447": { "name": "Wall", "loc": [2, 12] }, "448": { "name": "Wall", "loc": [1, 12] }, "449": { "name": "Wall", "loc": [0, 12] }, "450": { "name": "LightConnector", "loc": [0, 14] }, "451": { "name": "Door", "locks": [445], "loc": [2, 13] }, "452": { "name": "Mine", "path": "[[11,13],[10,13],[9,13],[8,13],[7,13],[6,13],[5,13],[4,13]]", "loc": [11, 13] }, "453": { "name": "Wall", "loc": [9, 10] }, "454": { "name": "Wall", "loc": [8, 10] }, "455": { "name": "Wall", "loc": [7, 10] }, "456": { "name": "Wall", "loc": [6, 10] }, "457": { "name": "Wall", "loc": [5, 10] }, "458": { "name": "Wall", "loc": [4, 10] }, "459": { "name": "WindowWall", "loc": [9, 6] }, "460": { "name": "WindowWall", "loc": [8, 6] }, "461": { "name": "WindowWall", "loc": [7, 6] }, "462": { "name": "WindowWall", "loc": [6, 6] }, "463": { "name": "WindowWall", "loc": [5, 6] }, "464": { "name": "WindowWall", "loc": [4, 6] }, "465": { "name": "Wall", "loc": [3, 6] }, "466": { "name": "Wall", "loc": [3, 10] }, "467": { "name": "Wall", "loc": [3, 9] }, "468": { "name": "Wall", "loc": [3, 7] }, "469": { "name": "Door", "locks": [470], "loc": [3, 8] }, "470": { "name": "Platform", "loc": [2, 7] }, "471": { "name": "Wall", "loc": [3, 5] }, "472": { "name": "Wall", "loc": [3, 4] }, "473": { "name": "Platform", "loc": [2, 3] }, "474": { "name": "Door", "locks": [473], "loc": [3, 2] }, "475": { "name": "Wall", "loc": [3, 3] }, "476": { "name": "Wall", "loc": [3, 1] }, "477": { "name": "Mine", "path": "[[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1]]", "loc": [5, 1] }, "478": { "name": "Mine", "path": "[[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],[12,4]]", "loc": [5, 4] }, "489": { "name": "LightConnector", "loc": [9, 8] }, "491": { "name": "Mine", "path": "[[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11]]", "loc": [1, 2] }, "493": { "name": "Wall", "loc": [14, 0] }, "494": { "name": "Wall", "loc": [14, 1] }, "495": { "name": "Wall", "loc": [14, 2] }, "496": { "name": "Wall", "loc": [14, 3] }, "497": { "name": "Door", "locks": [499], "loc": [15, 2] }, "498": { "name": "Box", "loc": [15, 0] }, "499": { "name": "Platform", "loc": [15, 4] }, "500": { "name": "Door", "locks": [502], "loc": [14, 4] }, "501": { "name": "Wall", "loc": [14, 5] }, "502": { "name": "Platform", "loc": [13, 3] } },
    "11": { "3": { "name": "Wall", "loc": [0, 7] }, "6": { "name": "WindowWall", "loc": [1, 7] }, "7": { "name": "WindowWall", "loc": [2, 7] }, "8": { "name": "Wall", "loc": [3, 7] }, "9": { "name": "Wall", "loc": [0, 11] }, "10": { "name": "Wall", "loc": [3, 11] }, "11": { "name": "WindowWall", "loc": [1, 11] }, "12": { "name": "WindowWall", "loc": [2, 11] }, "14": { "name": "LightReceiver", "loc": [1, 13] }, "15": { "name": "Door", "locks": [14, 160], "loc": [3, 9] }, "16": { "name": "Wall", "loc": [3, 8] }, "17": { "name": "Wall", "loc": [3, 10] }, "20": { "name": "Box", "loc": [0, 9] }, "24": { "name": "Wall", "loc": [4, 8] }, "26": { "name": "Wall", "loc": [6, 8] }, "28": { "name": "Wall", "loc": [3, 6] }, "29": { "name": "Wall", "loc": [3, 5] }, "32": { "name": "Wall", "loc": [3, 2] }, "33": { "name": "Wall", "loc": [3, 1] }, "34": { "name": "Door", "locks": [56], "loc": [7, 3] }, "35": { "name": "Square", "loc": [1, 5] }, "36": { "name": "Player", "loc": [1, 3] }, "38": { "name": "Wall", "loc": [1, 0] }, "40": { "name": "LightConnector", "loc": [0, 0] }, "45": { "name": "WindowWallVertical", "loc": [7, 1] }, "46": { "name": "WindowWallVertical", "loc": [7, 0] }, "47": { "name": "Wall", "loc": [7, 2] }, "50": { "name": "WindowWallVertical", "loc": [7, 5] }, "51": { "name": "Wall", "loc": [7, 4] }, "52": { "name": "WindowWallVertical", "loc": [7, 6] }, "53": { "name": "Wall", "loc": [7, 7] }, "54": { "name": "Wall", "loc": [7, 8] }, "55": { "name": "LightSource", "loc": [9, 0] }, "56": { "name": "LightReceiver", "loc": [5, 0] }, "58": { "name": "LightConnector", "loc": [8, 7] }, "59": { "name": "Wall", "loc": [8, 8] }, "60": { "name": "Wall", "loc": [9, 8] }, "61": { "name": "Wall", "loc": [9, 7] }, "62": { "name": "WindowWallVertical", "loc": [9, 6] }, "63": { "name": "WindowWallVertical", "loc": [9, 5] }, "64": { "name": "Wall", "loc": [9, 4] }, "65": { "name": "Wall", "loc": [10, 4] }, "66": { "name": "Wall", "loc": [11, 4] }, "67": { "name": "Wall", "loc": [9, 1] }, "68": { "name": "Wall", "loc": [9, 2] }, "69": { "name": "Wall", "loc": [10, 2] }, "70": { "name": "Wall", "loc": [11, 2] }, "71": { "name": "Wall", "loc": [13, 3] }, "72": { "name": "Wall", "loc": [14, 3] }, "73": { "name": "Wall", "loc": [15, 3] }, "75": { "name": "LightSource", "loc": [12, 0] }, "76": { "name": "LightSource", "loc": [12, 6] }, "77": { "name": "Door", "locks": [82, 81], "loc": [16, 3] }, "78": { "name": "Door", "locks": [82, 81], "loc": [17, 3] }, "79": { "name": "Door", "locks": [82, 81], "loc": [18, 3] }, "80": { "name": "Wall", "loc": [19, 3] }, "81": { "name": "LightReceiver", "loc": [15, 2] }, "82": { "name": "LightReceiver", "loc": [15, 4] }, "84": { "name": "Wall", "loc": [15, 1] }, "85": { "name": "Wall", "loc": [15, 0] }, "86": { "name": "Wall", "loc": [15, 5] }, "87": { "name": "Wall", "loc": [15, 6] }, "88": { "name": "Square", "loc": [13, 1] }, "91": { "name": "Wall", "loc": [10, 8] }, "92": { "name": "Wall", "loc": [11, 8] }, "93": { "name": "Wall", "loc": [12, 8] }, "94": { "name": "Wall", "loc": [13, 8] }, "95": { "name": "Wall", "loc": [14, 8] }, "96": { "name": "Wall", "loc": [15, 8] }, "97": { "name": "Wall", "loc": [16, 8] }, "98": { "name": "Wall", "loc": [17, 8] }, "99": { "name": "Wall", "loc": [18, 8] }, "100": { "name": "Wall", "loc": [19, 8] }, "104": { "name": "Mine", "path": "[[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8]]", "loc": [5, 1] }, "108": { "name": "Portal", "locks": [], "loc": [17, 9], "target": 112 }, "111": { "name": "Platform", "loc": [17, 0] }, "112": { "name": "Portal", "locks": [111], "loc": [17, 1], "target": 108 }, "114": { "name": "Portal", "locks": [], "loc": [1, 1], "target": 129 }, "117": { "name": "Platform", "loc": [9, 9] }, "118": { "name": "Wall", "loc": [4, 11] }, "119": { "name": "Wall", "loc": [6, 11] }, "120": { "name": "Wall", "loc": [7, 11] }, "121": { "name": "Wall", "loc": [8, 11] }, "122": { "name": "Wall", "loc": [9, 11] }, "123": { "name": "Wall", "loc": [15, 9] }, "126": { "name": "Wall", "loc": [10, 11] }, "127": { "name": "Wall", "loc": [10, 9] }, "128": { "name": "Wall", "loc": [10, 10] }, "129": { "name": "Portal", "locks": [117], "loc": [11, 9], "target": 114 }, "131": { "name": "LightConnector", "loc": [8, 9] }, "132": { "name": "Mine", "path": "[[12,11],[13,11],[14,11],[15,11],[16,11],[17,11],[18,11]]", "loc": [12, 11] }, "133": { "name": "Wall", "loc": [15, 13] }, "134": { "name": "Wall", "loc": [15, 10] }, "135": { "name": "Wall", "loc": [15, 12] }, "136": { "name": "Wall", "loc": [16, 12] }, "137": { "name": "Wall", "loc": [16, 10] }, "138": { "name": "Wall", "loc": [19, 10] }, "139": { "name": "Wall", "loc": [19, 12] }, "140": { "name": "Wall", "loc": [19, 13] }, "141": { "name": "Wall", "loc": [19, 14] }, "142": { "name": "Wall", "loc": [18, 14] }, "143": { "name": "Wall", "loc": [19, 9] }, "144": { "name": "Wall", "loc": [14, 13] }, "145": { "name": "Wall", "loc": [12, 13] }, "146": { "name": "Wall", "loc": [11, 13] }, "147": { "name": "Wall", "loc": [10, 13] }, "148": { "name": "Wall", "loc": [9, 13] }, "149": { "name": "Wall", "loc": [3, 12] }, "150": { "name": "Wall", "loc": [3, 13] }, "151": { "name": "WindowWall", "loc": [8, 13] }, "152": { "name": "WindowWall", "loc": [7, 13] }, "153": { "name": "WindowWall", "loc": [6, 13] }, "154": { "name": "Wall", "loc": [5, 13] }, "155": { "name": "Wall", "loc": [17, 5] }, "156": { "name": "Wall", "loc": [17, 6] }, "157": { "name": "Wall", "loc": [19, 5] }, "158": { "name": "Wall", "loc": [19, 6] }, "160": { "name": "Platform", "loc": [1, 14] }, "161": { "name": "WindowWallVertical", "loc": [3, 3] }, "162": { "name": "WindowWallVertical", "loc": [3, 4] } }
};
/**
 * Simple silly way of generating unique hashcodes for objects
 * during the lifetime of the application
 */
var HashCoder = /** @class */ (function () {
    function HashCoder() {
    }
    HashCoder.nextHash = function () {
        return HashCoder.hash++;
    };
    HashCoder.hash = 0;
    return HashCoder;
}());
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.data = {};
    }
    Dictionary.prototype.put = function (k, v) {
        this.data[k.hashCode()] = [k, v];
    };
    Dictionary.prototype.get = function (k) {
        var kv = this.data[k.hashCode()];
        return kv !== undefined ? kv[1] : undefined;
    };
    Dictionary.prototype.remove = function (k) {
        delete this.data[k.hashCode()];
    };
    Dictionary.prototype.contains = function (k) {
        if (this.data[k.hashCode()] !== undefined) {
            return true;
        }
        return false;
    };
    Dictionary.prototype.keys = function () {
        var keys = new Array();
        for (var _i = 0, _a = Object.keys(this.data); _i < _a.length; _i++) {
            var key = _a[_i];
            keys.push(this.data[key][0]);
        }
        return keys;
    };
    Dictionary.prototype.values = function () {
        var values = new Array();
        for (var key in Object.keys(this.data)) {
            values.push(this.data[key][1]);
        }
        return values;
    };
    Dictionary.prototype.clone = function () {
        var copy = new Dictionary();
        for (var _i = 0, _a = this.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            copy.put(key, this.get(key));
        }
        return copy;
    };
    return Dictionary;
}());
/**
 * Like a regular dictionary but get calls return
 * a default object rather than undefined for keys not
 * in the collection
 */
var DefaultDict = /** @class */ (function (_super) {
    __extends(DefaultDict, _super);
    function DefaultDict(defCreator) {
        var _this = _super.call(this) || this;
        _this.defCreator = defCreator;
        return _this;
    }
    DefaultDict.prototype.get = function (k) {
        var v;
        var kv = this.data[k.hashCode()];
        if (kv === undefined) {
            var defVal = new this.defCreator();
            this.put(k, defVal);
            return defVal;
        }
        return kv[1];
    };
    return DefaultDict;
}(Dictionary));
var Set = /** @class */ (function () {
    function Set() {
        this.data = {};
    }
    Set.prototype.put = function (v) {
        this.data[v.hashCode()] = v;
    };
    Set.prototype.contains = function (v) {
        return this.data[v.hashCode()] !== undefined;
    };
    Set.prototype.remove = function (v) {
        delete this.data[v.hashCode()];
    };
    Set.prototype.values = function () {
        var values = new Array();
        for (var key in this.data) {
            values.push(this.data[key]);
        }
        return values;
    };
    return Set;
}());
var Queue = /** @class */ (function () {
    function Queue(data) {
        if (data === void 0) { data = new Array(); }
        this.first = 0;
        this.count = data.length;
        this.data = data;
    }
    Queue.prototype.enqueue = function (item) {
        this.data.push(item);
        this.count += 1;
    };
    Queue.prototype.dequeue = function () {
        var item = this.data[this.first];
        if (item === undefined) {
            return undefined;
        }
        this.first += 1;
        if (this.first * 2 >= this.data.length) {
            this.data = this.data.splice(this.first);
            this.first = 0;
        }
        this.count -= 1;
        return item;
    };
    Queue.prototype.peek = function () {
        return this.data[this.first];
    };
    Queue.prototype.size = function () {
        return this.count;
    };
    Queue.prototype.empty = function () {
        return this.count === 0;
    };
    return Queue;
}());
var UndirGraph = /** @class */ (function () {
    function UndirGraph() {
        this.graph = new DefaultDict(Set);
    }
    UndirGraph.prototype.connect = function (one, another) {
        this.graph.get(one).put(another);
        this.graph.get(another).put(one);
    };
    UndirGraph.prototype.disconnect = function (one, another) {
        this.graph.get(one).remove(another);
        this.graph.get(another).remove(one);
    };
    UndirGraph.prototype.links = function (node) {
        return this.graph.get(node).values();
    };
    UndirGraph.prototype.remove = function (node) {
        var links = this.links(node);
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            this.disconnect(node, link);
        }
        this.graph.remove(node);
    };
    UndirGraph.prototype.vertices = function () {
        return this.graph.keys();
    };
    return UndirGraph;
}());
var PriorityItem = /** @class */ (function () {
    function PriorityItem(item, priority) {
        this.item = item;
        this.priority = priority;
    }
    return PriorityItem;
}());
/**
 * Naive priority queue
 */
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.data = new Array();
    }
    PriorityQueue.prototype.push = function (item, priority) {
        this.data.push(new PriorityItem(item, priority));
        this.data.sort(function (a, b) { return b.priority - a.priority; });
    };
    PriorityQueue.prototype.remove = function (item) {
        for (var i = 0; i < this.data.length; ++i) {
            if (this.data[i].item === item) {
                this.data.splice(i, 1);
                break;
            }
        }
    };
    PriorityQueue.prototype.pop = function () {
        return this.data.pop().item;
    };
    return PriorityQueue;
}());
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["A"] = 65] = "A";
    KeyCodes[KeyCodes["W"] = 87] = "W";
    KeyCodes[KeyCodes["D"] = 68] = "D";
    KeyCodes[KeyCodes["S"] = 83] = "S";
    KeyCodes[KeyCodes["E"] = 69] = "E";
    KeyCodes[KeyCodes["Esc"] = 27] = "Esc";
    KeyCodes[KeyCodes["Del"] = 46] = "Del";
    KeyCodes[KeyCodes["Space"] = 32] = "Space";
})(KeyCodes || (KeyCodes = {}));
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.equals = function (that) {
        return this.x === that.x && this.y == that.y;
    };
    return Point;
}());
var Line = /** @class */ (function () {
    function Line(a, b) {
        this.vertical = false;
        if (b.x === a.x) {
            this.vertical = true;
            this.slope = undefined;
            this.intercept = undefined;
            this.x = a.x;
        }
        else {
            var slope = (b.y - a.y) / (b.x - a.x);
            var intercept = -slope * a.x + a.y;
            this.slope = slope;
            this.intercept = intercept;
        }
    }
    Line.prototype.intersect = function (that) {
        if (this.vertical) {
            return new Point(this.x, that.slope * this.x + that.intercept);
        }
        if (that.vertical) {
            return new Point(that.x, this.slope * that.x + this.intercept);
        }
        var x = (that.intercept - this.intercept) / (this.slope - that.slope);
        var y = this.slope * x + this.intercept;
        return new Point(x, y);
    };
    return Line;
}());
/**
 * Assuming a grid of squares of side equal to 1 this function takes
 * the coordinates of two points and returns the coordinates of the
 * grid squares crossed by a ray cast between the two given points.
 *
 * Note that while the function can take points like (1.5, 1.5) it will
 * return points of form (1, 1), (2, 2) etc
 */
function rayCast(source, dest) {
    var dx = Math.abs(source.x - dest.x);
    var dy = Math.abs(source.y - dest.y);
    var xStep = (dest.x > source.x) ? 1 : -1;
    var yStep = (dest.y > source.y) ? 1 : -1;
    var error = dx - dy;
    var x = source.x;
    var y = source.y;
    var path = new Array();
    dx *= 2;
    dy *= 2;
    while (true) {
        path.push(new Point(Math.floor(x), Math.floor(y)));
        if (x === dest.x && y === dest.y) {
            break;
        }
        if (error > 0) {
            x += xStep;
            error -= dy;
        }
        else if (error < 0) {
            y += yStep;
            error += dx;
        }
        else {
            // move diagonally
            x += xStep;
            y += yStep;
            error += dx;
            error -= dy;
        }
    }
    return path;
}
/**
 * Takes two grid square coordinates and returns the side of the
 * destination square which gets crossed moving from source to dest
 * @param {Point} source
 * @param {Point} dest
 */
function getCrossedLine(source, dest) {
    // left of the dest square
    if (source.x < dest.x) {
        return new Line(dest, new Point(dest.x, dest.y + 1));
    }
    // right of the dest square
    if (source.x > dest.x) {
        var p1 = new Point(dest.x + 1, dest.y);
        var p2 = new Point(dest.x + 1, dest.y + 1);
        return new Line(p1, p2);
    }
    // above
    if (source.x === dest.x && source.y < dest.y) {
        return new Line(dest, new Point(dest.x + 1, dest.y));
    }
    // below
    if (source.x === dest.x && source.y > dest.y) {
        var p1 = new Point(dest.x, dest.y + 1);
        var p2 = new Point(dest.x + 1, dest.y + 1);
        return new Line(p1, p2);
    }
    // identical coordinates
    return undefined;
}
/**
 * Serializes a GameGrid object into a javascript "level" object
 * which can be used to update an empty grid
 * @param {GameGrid} g [description]
 */
function serialize(g) {
    var all = g.allObjects();
    var level = {};
    for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
        var obj = all_1[_i];
        if (obj instanceof Mine) {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "path": JSON.stringify(obj.path.map(function (p) { return [p.x, p.y]; })),
                "loc": [obj.location().x, obj.location().y]
            };
        }
        else if (obj instanceof Door) {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "locks": obj.getLocks().map(function (l) { return l.hashCode(); }),
                "loc": [obj.location().x, obj.location().y]
            };
        }
        else if (obj instanceof Portal) {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "locks": obj.getLocks().map(function (l) { return l.hashCode(); }),
                "loc": [obj.location().x, obj.location().y],
                "target": obj.target.hashCode()
            };
        }
        else {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "loc": [obj.location().x, obj.location().y],
            };
        }
    }
    return level;
}
/**
 * Uses the given level object to update the given game
 * grid with the saved level objects
 * @param {{}}     level [description]
 * @param {GameGrid} g     [description]
 */
function deserialize(level, g) {
    var objMap = {};
    for (var key in level) {
        var props = level[key];
        objMap[key] = nameToGameObject(props.name, g);
        objMap[key].move(new Point(props.loc[0], props.loc[1]));
    }
    for (var key in objMap) {
        var obj = objMap[key];
        var props = level[key];
        if (isLockable(obj)) {
            for (var i = 0; i < props.locks.length; ++i) {
                var l = objMap[props.locks[i]];
                if (isLock(l)) {
                    obj.addLock(l);
                }
            }
            if (obj instanceof Portal) {
                obj.target = objMap[props.target];
            }
        }
        if (obj instanceof Mine) {
            obj.path = JSON.parse(props.path).map(function (p) { return new Point(p[0], p[1]); });
        }
    }
}
function objToClassName(obj) {
    return obj.constructor.name;
}
function nameToGameObject(name, grid) {
    switch (name) {
        case "Wall":
            return new Wall(grid);
        case "WindowWall":
            return new WindowWall(grid);
        case "WindowWallVertical":
            return new WindowWallVertical(grid);
        case "Player":
            return new Player(grid);
        case "Platform":
            return new Platform(grid);
        case "Mine":
            return new Mine(grid);
        case "Square":
            return new Square(grid);
        case "Door":
            return new Door(grid);
        case "Box":
            return new Box(grid);
        case "Portal":
            return new Portal(grid);
        case "LightSource":
            return new LightSource(grid);
        case "LightReceiver":
            return new LightReceiver(grid);
        case "LightConnector":
            return new LightConnector(grid);
        default:
            return undefined;
    }
}
var CANVAS = document.getElementById("game-canvas");
var CTX = CANVAS.getContext("2d");
/**
 * A graph connecting game objects able to ray cast
 * and draw light ray links between nodes on a given
 * game grid
 */
var LightGraph = /** @class */ (function () {
    function LightGraph() {
        this.graph = new UndirGraph();
    }
    LightGraph.prototype.connect = function (one, another) {
        this.graph.connect(one, another);
    };
    LightGraph.prototype.disconnect = function (one, another) {
        this.graph.disconnect(one, another);
    };
    LightGraph.prototype.clear = function () {
        this.graph = new UndirGraph();
    };
    LightGraph.prototype.remove = function (node) {
        this.graph.remove(node);
    };
    LightGraph.prototype.rayCast = function (g) {
        var lights = this.graph.vertices();
        lights.forEach(function (l) {
            if (l.isOn()) {
                l.toggle();
            }
        });
        var sources = lights.filter(function (l) { return l instanceof LightSource; });
        if (sources.length === 0) {
            return;
        }
        var nodeQueue = new Queue(sources);
        var visited = new Set();
        while (!nodeQueue.empty()) {
            var source = nodeQueue.dequeue();
            visited.put(source);
            var from = source.location();
            from = new Point(from.x + 0.5, from.y + 0.5);
            var conns = this.graph.links(source);
            for (var j = 0; j < conns.length; ++j) {
                if (visited.contains(conns[j])) {
                    continue;
                }
                var to = conns[j].location();
                to = new Point(to.x + 0.5, to.y + 0.5);
                var path = rayCast(from, to);
                var turnOn = true;
                for (var k = 1; k < path.length - 1; ++k) {
                    var loc = path[k];
                    var objects = g.getObjectsAt(loc);
                    if (!canLightPass(objects)) {
                        var l1 = new Line(from, to);
                        var l2 = getCrossedLine(path[k - 1], path[k]);
                        var inter = l1.intersect(l2);
                        var fromCoord = gridPixelLoc(g.size, from);
                        var interCoord = gridPixelLoc(g.size, inter);
                        drawLightRay(g.scheme, fromCoord, interCoord);
                        turnOn = false;
                        break;
                    }
                }
                if (turnOn) {
                    if (!conns[j].isOn()) {
                        conns[j].toggle();
                    }
                    var fromCoord = gridPixelLoc(g.size, from);
                    var interCoord = gridPixelLoc(g.size, to);
                    drawLightRay(g.scheme, fromCoord, interCoord);
                    if (!visited.contains(conns[j])) {
                        if (!(conns[j] instanceof LightReceiver)) {
                            nodeQueue.enqueue(conns[j]);
                        }
                    }
                }
            }
        }
    };
    return LightGraph;
}());
function drawLightRay(scheme, source, dest) {
    CTX.beginPath();
    CTX.save();
    CTX.moveTo(source.x, source.y);
    CTX.lineTo(dest.x, dest.y);
    CTX.lineWidth = 3;
    CTX.strokeStyle = scheme.colorFor("LightOn");
    CTX.stroke();
    CTX.lineWidth = 1;
    CTX.strokeStyle = scheme.colorFor("Background");
    CTX.stroke();
    CTX.restore();
}
function canLightPass(objects) {
    if (objects.length === 0) {
        return true;
    }
    if (objects.length === 1 && objects[0].bodyType() === BodyType.Window) {
        return true;
    }
    if (objects.length >= 1) {
        var invi = objects.filter(function (o) { return o.bodyType() === BodyType.Invisible; });
        if (invi.length === objects.length) {
            return true;
        }
    }
    return false;
}
function gridPixelLoc(gridSize, loc) {
    return new Point(loc.x * gridSize, loc.y * gridSize);
}
/// <reference path="../lib/howler.d.ts" />
var BodyType;
(function (BodyType) {
    BodyType[BodyType["Solid"] = 0] = "Solid";
    BodyType[BodyType["Transparent"] = 1] = "Transparent";
    BodyType[BodyType["Window"] = 2] = "Window";
    BodyType[BodyType["Invisible"] = 3] = "Invisible";
})(BodyType || (BodyType = {}));
var Highlight;
(function (Highlight) {
    Highlight[Highlight["None"] = 0] = "None";
    Highlight[Highlight["Basic"] = 1] = "Basic";
    Highlight[Highlight["Linked"] = 2] = "Linked";
    Highlight[Highlight["Selected"] = 3] = "Selected";
})(Highlight || (Highlight = {}));
function isLockable(o) {
    if (o.__implements.indexOf("Lockable,") >= 0) {
        return true;
    }
    return false;
}
function isLock(o) {
    if (o.__implements.indexOf("Lock,") >= 0) {
        return true;
    }
    return false;
}
function isLight(o) {
    if (o.__implements.indexOf("Light,") >= 0) {
        return true;
    }
    return false;
}
var GameObject = /** @class */ (function () {
    function GameObject(grid) {
        this.__implements = "";
        this.highlightLevel = Highlight.None;
        this.selected = false;
        this.grid = grid;
        this.code = HashCoder.nextHash();
        this.grid.register(this);
    }
    GameObject.prototype.hashCode = function () {
        return this.code;
    };
    GameObject.prototype.location = function () {
        return this.grid.locate(this);
    };
    GameObject.prototype.move = function (loc) {
        this.grid.move(this, loc);
    };
    GameObject.prototype.update = function () {
    };
    GameObject.prototype.renderPriority = function () {
        return 0;
    };
    GameObject.prototype.highlight = function (scheme) {
        if (this.highlightLevel === Highlight.None) {
            return;
        }
        var x = this.location().x * this.grid.size - this.grid.size * 0.05;
        var y = this.location().y * this.grid.size - this.grid.size * 0.05;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size * 1.1, this.grid.size * 1.1);
        var color;
        if (this.highlightLevel === Highlight.Basic) {
            color = scheme.colorFor("HighlightBasic");
        }
        else if (this.highlightLevel === Highlight.Linked) {
            color = scheme.colorFor("HighlightLinked");
        }
        else if (this.highlightLevel === Highlight.Selected) {
            color = scheme.colorFor("HighlightSelected");
        }
        CTX.strokeStyle = color;
        CTX.lineWidth = 3;
        CTX.stroke();
        CTX.restore();
    };
    return GameObject;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.bodyType = function () {
        return BodyType.Transparent;
    };
    Square.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size + this.grid.size * 0.15;
        var y = this.location().y * this.grid.size + this.grid.size * 0.15;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size * 0.7, this.grid.size * 0.7);
        CTX.fillStyle = scheme.colorFor("Box");
        CTX.fill();
        CTX.restore();
    };
    return Square;
}(GameObject));
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.bodyType = function () {
        return BodyType.Transparent;
    };
    Box.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size + this.grid.size * 0.15;
        var y = this.location().y * this.grid.size + this.grid.size * 0.15;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size * 0.7, this.grid.size * 0.7);
        CTX.fillStyle = scheme.colorFor("WhiteBox");
        CTX.fill();
        CTX.restore();
    };
    return Box;
}(GameObject));
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__implements = "Lockable,";
        _this.open = false;
        _this.locks = new Array();
        return _this;
    }
    Door.prototype.addLock = function (lock) {
        this.locks.push(lock);
    };
    Door.prototype.removeLock = function (lock) {
        for (var i = 0; i < this.locks.length; ++i) {
            if (this.locks[i] === lock) {
                this.locks.splice(i, 1);
                break;
            }
        }
    };
    Door.prototype.lockedBy = function (lock) {
        return this.locks.indexOf(lock) != -1;
    };
    Door.prototype.getLocks = function () {
        return this.locks;
    };
    Door.prototype.bodyType = function () {
        return !this.open ? BodyType.Solid : BodyType.Invisible;
    };
    Door.prototype.update = function () {
        var prevState = this.open;
        this.open = false;
        var lockCount = this.locks.length;
        if (lockCount > 0) {
            if (this.locks.filter(function (s) { return s.isOpen(); }).length == lockCount) {
                this.open = true;
            }
        }
        if (!prevState && this.open) {
            var sound = new Howl({
                urls: ['sounds/door-open.wav']
            }).play();
        }
    };
    Door.prototype.render = function (scheme) {
        this.highlight(scheme);
        if (this.open) {
            return;
        }
        for (var j = 0; j < 2; ++j) {
            var w = this.grid.size;
            var h = this.grid.size;
            var x = this.location().x * this.grid.size;
            var y = this.location().y * this.grid.size;
            if (j == 0) {
                w = this.grid.size * 0.1;
                x += this.grid.size * 0.15;
            }
            else {
                h = this.grid.size * 0.1;
                y += this.grid.size * 0.15;
            }
            for (var i = 0; i < 4; ++i) {
                CTX.beginPath();
                CTX.rect(x, y, w, h);
                CTX.fillStyle = scheme.colorFor("Door");
                CTX.fill();
                if (j == 0) {
                    x += this.grid.size * 0.2;
                }
                else {
                    y += this.grid.size * 0.2;
                }
            }
        }
    };
    return Door;
}(GameObject));
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__implements = "Lockable,";
        _this.open = false;
        _this.locks = new Array();
        return _this;
    }
    Portal.prototype.addLock = function (lock) {
        this.locks.push(lock);
    };
    Portal.prototype.removeLock = function (lock) {
        for (var i = 0; i < this.locks.length; ++i) {
            if (this.locks[i] === lock) {
                this.locks.splice(i, 1);
                break;
            }
        }
    };
    Portal.prototype.lockedBy = function (lock) {
        return this.locks.indexOf(lock) != -1;
    };
    Portal.prototype.getLocks = function () {
        return this.locks;
    };
    Portal.prototype.isUnlocked = function () {
        var lockCount = this.locks.length;
        if (lockCount > 0) {
            if (this.locks.filter(function (s) { return s.isOpen(); }).length == lockCount) {
                return true;
            }
        }
        return false;
    };
    Portal.prototype.bodyType = function () {
        return BodyType.Transparent;
    };
    Portal.prototype.update = function () {
        var prevState = this.open;
        var unlocked = this.isUnlocked();
        this.open = false;
        if (unlocked || (this.target && this.target.isUnlocked())) {
            this.open = true;
        }
        if (!prevState && unlocked && this.open) {
            var sound = new Howl({
                urls: ['sounds/portal-open.wav']
            }).play();
        }
        if (this.open && this.target !== undefined) {
            var player = this.grid.getPlayer();
            if (player.location().equals(this.location())) {
                if (player.lastPosition !== undefined
                    && !player.lastPosition.equals(this.target.location())) {
                    player.moveTo(this.target.location(), true);
                }
            }
        }
    };
    Portal.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size + this.grid.size * 0.5;
        var y = this.location().y * this.grid.size + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.save();
        CTX.arc(x, y, this.grid.size * 0.5, 0, 2 * Math.PI);
        var openColor = scheme.colorFor("PortalOn");
        var closedColor = scheme.colorFor("PortalOff");
        CTX.lineWidth = 5;
        CTX.strokeStyle = this.open ? openColor : closedColor;
        CTX.stroke();
        CTX.restore();
    };
    return Portal;
}(GameObject));
var LightSource = /** @class */ (function (_super) {
    __extends(LightSource, _super);
    function LightSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__implements = "Light,";
        return _this;
    }
    LightSource.prototype.isOn = function () {
        return true;
    };
    LightSource.prototype.toggle = function () {
    };
    LightSource.prototype.bodyType = function () {
        return BodyType.Solid;
    };
    LightSource.prototype.renderPriority = function () {
        return -20;
    };
    LightSource.prototype.render = function (scheme) {
        this.highlight(scheme);
        var cornerX = this.location().x * this.grid.size;
        var cornerY = this.location().y * this.grid.size;
        var x = cornerX + this.grid.size * 0.5;
        var y = cornerY + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.rect(cornerX, cornerY, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Platform");
        CTX.fill();
        CTX.beginPath();
        CTX.arc(x, y, this.grid.size * 0.5, 0, 2 * Math.PI);
        CTX.fillStyle = scheme.colorFor("LightOn");
        CTX.fill();
    };
    return LightSource;
}(GameObject));
var LightReceiver = /** @class */ (function (_super) {
    __extends(LightReceiver, _super);
    function LightReceiver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__implements = "Lock,Light,";
        _this.links = new Array();
        _this.on = false;
        return _this;
    }
    LightReceiver.prototype.isOn = function () {
        return this.on;
    };
    LightReceiver.prototype.toggle = function () {
        this.on = !this.on;
    };
    LightReceiver.prototype.isOpen = function () {
        return this.isOn();
    };
    LightReceiver.prototype.bodyType = function () {
        return BodyType.Solid;
    };
    LightReceiver.prototype.renderPriority = function () {
        return -20;
    };
    LightReceiver.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size + this.grid.size * 0.5;
        var y = this.location().y * this.grid.size + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.arc(x, y, this.grid.size * 0.5, 0, 2 * Math.PI);
        // asdasdasdasdasd
        if (this.isOpen()) {
            CTX.fillStyle = scheme.colorFor("LightOn");
        }
        else {
            CTX.fillStyle = scheme.colorFor("LightOff");
        }
        CTX.fill();
    };
    return LightReceiver;
}(GameObject));
var LightConnector = /** @class */ (function (_super) {
    __extends(LightConnector, _super);
    function LightConnector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__implements = "Light,";
        _this.on = false;
        return _this;
    }
    LightConnector.prototype.isOn = function () {
        return this.on;
    };
    LightConnector.prototype.toggle = function () {
        this.on = !this.on;
    };
    LightConnector.prototype.bodyType = function () {
        return BodyType.Transparent;
    };
    LightConnector.prototype.renderPriority = function () {
        return -20;
    };
    LightConnector.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size + this.grid.size * 0.5;
        var y = this.location().y * this.grid.size + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.arc(x, y, this.grid.size * 0.3, 0, 2 * Math.PI);
        if (this.isOn()) {
            CTX.fillStyle = scheme.colorFor("LightOn");
        }
        else {
            CTX.fillStyle = scheme.colorFor("LightOff");
        }
        CTX.fill();
    };
    return LightConnector;
}(GameObject));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.bodyType = function () {
        return BodyType.Solid;
    };
    Player.prototype.renderPriority = function () {
        return -100;
    };
    Player.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size;
        var y = this.location().y * this.grid.size;
        CTX.beginPath();
        // top left corner
        CTX.moveTo(x, y + this.grid.size * 0.33);
        CTX.lineTo(x, y);
        CTX.lineTo(x + this.grid.size * 0.33, y);
        // top right corner
        CTX.moveTo(x + this.grid.size * 0.66, y);
        CTX.lineTo(x + this.grid.size, y);
        CTX.lineTo(x + this.grid.size, y + this.grid.size * 0.33);
        // bot right corner
        CTX.moveTo(x + this.grid.size, y + this.grid.size * 0.66);
        CTX.lineTo(x + this.grid.size, y + this.grid.size);
        CTX.lineTo(x + this.grid.size * 0.66, y + this.grid.size);
        // bot left corner
        CTX.moveTo(x + this.grid.size * 0.33, y + this.grid.size);
        CTX.lineTo(x, y + this.grid.size);
        CTX.lineTo(x, y + this.grid.size * 0.66);
        CTX.save();
        CTX.lineWidth = 5;
        CTX.strokeStyle = scheme.colorFor("Player");
        CTX.stroke();
        CTX.restore();
    };
    Player.prototype.moveTo = function (loc, teleport) {
        if (teleport === void 0) { teleport = false; }
        var canMove = true;
        if (loc.x >= this.grid.width || loc.y >= this.grid.height
            || loc.x < 0 || loc.y < 0) {
            return;
        }
        var objects = this.grid.getObjectsAt(loc);
        if (this.grabbed && objects.length > 1) {
            return;
        }
        if (this.grabbed && objects.length == 1) {
            var obj = objects[0];
            if (!(obj instanceof Platform)
                && !(obj instanceof Door)
                && !(obj instanceof Portal)) {
                return;
            }
        }
        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
            var obj = objects_1[_i];
            var bType = obj.bodyType();
            if (bType == BodyType.Solid || bType == BodyType.Window) {
                return;
            }
        }
        if (canMove) {
            this.lastPosition = this.location();
            this.grid.move(this, loc);
            if (teleport) {
                var sound = new Howl({
                    urls: ['sounds/teleport.wav']
                }).play();
            }
            else {
                var sound = new Howl({
                    urls: ['sounds/player-move.wav'],
                    volume: 0.5
                }).play();
            }
            if (this.grabbed) {
                this.grid.move(this.grabbedObject, loc);
            }
        }
    };
    Player.prototype.grab = function () {
        if (this.grabbed) {
            var loc = this.location();
            var objects = this.grid.getObjectsAt(loc);
            if (objects.filter(function (o) { return o instanceof Door; }).length === 0) {
                this.grabbed = false;
                this.grabbedObject = undefined;
                var sound = new Howl({
                    urls: ['sounds/grab.wav']
                }).play();
            }
        }
        else {
            var objects = this.grid.getObjectsAt(this.location());
            for (var i = 0; i < objects.length; ++i) {
                if (objects[i] instanceof Square ||
                    objects[i] instanceof LightConnector) {
                    this.grabbedObject = objects[i];
                    this.grabbed = true;
                    var sound = new Howl({
                        urls: ['sounds/grab.wav']
                    }).play();
                }
            }
        }
    };
    return Player;
}(GameObject));
var Wall = /** @class */ (function (_super) {
    __extends(Wall, _super);
    function Wall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wall.prototype.bodyType = function () {
        return BodyType.Solid;
    };
    Wall.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size;
        var y = this.location().y * this.grid.size;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Wall");
        CTX.fill();
        CTX.restore();
    };
    return Wall;
}(GameObject));
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__implements = "Lock,";
        return _this;
    }
    Platform.prototype.isOpen = function () {
        var stuff = this.grid.getObjectsAt(this.location());
        if (stuff.length > 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Platform.prototype.bodyType = function () {
        return BodyType.Transparent;
    };
    Platform.prototype.renderPriority = function () {
        return 10;
    };
    Platform.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size + 0.05 * this.grid.size;
        var y = this.location().y * this.grid.size + 0.05 * this.grid.size;
        CTX.beginPath();
        CTX.rect(x, y, this.grid.size * 0.9, this.grid.size * 0.9);
        CTX.fillStyle = scheme.colorFor("Platform");
        CTX.fill();
    };
    return Platform;
}(GameObject));
var WindowWall = /** @class */ (function (_super) {
    __extends(WindowWall, _super);
    function WindowWall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowWall.prototype.bodyType = function () {
        return BodyType.Window;
    };
    WindowWall.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size;
        var y = this.location().y * this.grid.size;
        CTX.beginPath();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Wall");
        CTX.fill();
        CTX.beginPath();
        y = this.location().y * this.grid.size + this.grid.size * 0.33;
        CTX.rect(x, y, this.grid.size, 0.33 * this.grid.size);
        CTX.fillStyle = scheme.colorFor("Background");
        CTX.fill();
    };
    return WindowWall;
}(GameObject));
var WindowWallVertical = /** @class */ (function (_super) {
    __extends(WindowWallVertical, _super);
    function WindowWallVertical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowWallVertical.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size;
        var y = this.location().y * this.grid.size;
        CTX.beginPath();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Wall");
        CTX.fill();
        CTX.beginPath();
        x = this.location().x * this.grid.size + this.grid.size * 0.33;
        CTX.rect(x, y, 0.33 * this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Background");
        CTX.fill();
    };
    return WindowWallVertical;
}(WindowWall));
var Mine = /** @class */ (function (_super) {
    __extends(Mine, _super);
    function Mine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = new Array();
        _this.curPos = 0;
        _this.direction = 1;
        _this.lastUpdate = -1;
        _this.highlightPath = false;
        return _this;
    }
    Mine.prototype.bodyType = function () {
        return BodyType.Solid;
    };
    Mine.prototype.destination = function () {
        return this.path[this.path.length - 1];
    };
    Mine.prototype.makePath = function (target) {
        this.resetPatrol();
        var path = rayCast(this.location(), target);
        if (path.length > 1) {
            this.path = path;
        }
    };
    Mine.prototype.clearPath = function () {
        this.resetPatrol();
        this.path = new Array();
    };
    Mine.prototype.resetPatrol = function () {
        if (this.path[0] !== undefined) {
            this.move(this.path[0]);
        }
        this.curPos = 0;
        this.direction = 1;
        this.lastUpdate = -1;
    };
    Mine.prototype.highlight = function (scheme) {
        _super.prototype.highlight.call(this, scheme);
        if (this.highlightPath) {
            for (var _i = 0, _a = this.path; _i < _a.length; _i++) {
                var loc = _a[_i];
                var x = loc.x * this.grid.size - this.grid.size * 0.05;
                var y = loc.y * this.grid.size - this.grid.size * 0.05;
                CTX.beginPath();
                CTX.save();
                CTX.rect(x, y, this.grid.size * 1.1, this.grid.size * 1.1);
                CTX.strokeStyle = scheme.colorFor("HighlightBasic");
                CTX.lineWidth = 3;
                CTX.stroke();
                CTX.restore();
            }
        }
    };
    Mine.prototype.render = function (scheme) {
        this.highlight(scheme);
        var x = this.location().x * this.grid.size;
        var y = this.location().y * this.grid.size;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Mine");
        CTX.fill();
        var s = this.grid.size;
        var area = [
            new Point(x - s, y - s), new Point(x, y - s),
            new Point(x + s, y - s), new Point(x - s, y),
            new Point(x + s, y), new Point(x - s, y + s),
            new Point(x, y + s), new Point(x + s, y + s),
        ];
        CTX.globalAlpha = 0.1;
        for (var _i = 0, area_1 = area; _i < area_1.length; _i++) {
            var p = area_1[_i];
            CTX.beginPath();
            CTX.rect(p.x, p.y, this.grid.size, this.grid.size);
            CTX.fill();
            CTX.fillStyle = scheme.colorFor("Mine");
        }
        CTX.restore();
    };
    Mine.prototype.update = function () {
        if (this.grid.gameState !== GameState.Live
            && this.grid.gameState !== GameState.Testing) {
            return;
        }
        var speed = 1000 / 3;
        if (this.lastUpdate == -1) {
            this.patrol();
            this.lastUpdate = (new Date()).getTime();
        }
        else {
            var curTime = (new Date()).getTime();
            if (curTime - this.lastUpdate > speed) {
                this.patrol();
                this.lastUpdate = curTime;
            }
        }
    };
    Mine.prototype.patrol = function () {
        if (this.path.length < 1) {
            return;
        }
        if (this.curPos === this.path.length - 1) {
            this.direction = -1;
        }
        if (this.curPos === 0) {
            this.direction = 1;
        }
        this.curPos += this.direction;
        var next_pos = this.path[this.curPos];
        var targets = this.grid.getObjectsAt(next_pos);
        if (!this.canWalkThrough(targets)) {
            this.direction = -this.direction;
            this.curPos += this.direction * 2;
            next_pos = this.path[this.curPos];
            if (next_pos !== undefined) {
                targets = this.grid.getObjectsAt(next_pos);
                if (!this.canWalkThrough(targets)) {
                    this.curPos += -this.direction;
                    next_pos = this.location();
                }
            }
            else {
                next_pos = this.location();
            }
        }
        this.grid.move(this, next_pos);
    };
    Mine.prototype.canWalkThrough = function (objects) {
        if (objects.length === 0) {
            return true;
        }
        if (objects.every(function (o) { return o.bodyType() === BodyType.Invisible; })) {
            return true;
        }
        return false;
    };
    return Mine;
}(GameObject));
var GameState;
(function (GameState) {
    GameState[GameState["Live"] = 0] = "Live";
    GameState[GameState["Testing"] = 1] = "Testing";
    GameState[GameState["Editor"] = 2] = "Editor";
    GameState[GameState["Over"] = 3] = "Over";
    GameState[GameState["Completed"] = 4] = "Completed";
})(GameState || (GameState = {}));
var ColorScheme = /** @class */ (function () {
    function ColorScheme(colorMap) {
        this.colorMap = {
            "Background": "#ffffff",
            "Player": "black",
            "Wall": "#1E1E20",
            "Box": "#703030",
            "Mine": "#8A0917",
            "WhiteBox": "black",
            "Door": "#17607D",
            "Platform": "#2F343B",
            "Default": "black",
            "PortalOn": "#FF6138",
            "PortalOff": "#6B6B6B",
            "LightOn": "#105B63",
            "LightOff": "#6B6B6B",
            "HighlightBasic": "#1E1E20",
            "HighlightLinked": "#FF6138",
            "HighlightSelected": "#8A0917"
        };
        if (colorMap !== undefined) {
            this.colorMap = colorMap;
        }
    }
    ColorScheme.prototype.colorFor = function (name) {
        var color = this.colorMap[name];
        if (color !== undefined) {
            return color;
        }
        return this.defaultColor();
    };
    ColorScheme.prototype.defaultColor = function () {
        return this.colorMap["Default"] || "#000000";
    };
    ColorScheme.prototype.updateColor = function (name, color) {
        this.colorMap[name] = color;
    };
    return ColorScheme;
}());
/**
 * A GameGrid holds all game objects for a level in multiple data sets and
 * is the only one acting on the objects. All game objects must register
 * with a grid before they can do any useful work. Game objects hold
 * a reference to their game grid and expose various game grid related
 * methods but these are nothing but abstractions on top of game grid
 * methods. A game grid always controls everything.
 *
 * Game objects are held in a bidimensional array as well as a location
 * map which maps objects to their location for quick access. A render
 * queue controls the order in which the objects render (this is so boxes
 * render on top of platform and not under and so on). A light graph
 * controls the light beam aspects of the game.
 */
var GameGrid = /** @class */ (function () {
    function GameGrid(w, h, size) {
        this.gameState = GameState.Live;
        this.width = w;
        this.height = h;
        this.size = size;
        this.scheme = new ColorScheme();
        this.grid = new Array();
        for (var i = 0; i < w; ++i) {
            var col = new Array();
            for (var j = 0; j < h; ++j) {
                col.push(new Array());
            }
            this.grid.push(col);
        }
        this.renderQueue = new PriorityQueue();
        this.locationMap = new Dictionary();
        this.lg = new LightGraph();
    }
    GameGrid.prototype.locate = function (obj) {
        return this.locationMap.get(obj);
    };
    GameGrid.prototype.register = function (obj) {
        if (obj instanceof Player) {
            this.player = obj;
        }
        if (obj instanceof Box) {
            this.box = obj;
        }
        if (this.locationMap.contains(obj) || obj.grid !== this) {
            return;
        }
        this.grid[0][0].push(obj);
        this.locationMap.put(obj, new Point(0, 0));
        this.renderQueue.push(obj, obj.renderPriority());
    };
    GameGrid.prototype.move = function (obj, dest) {
        if (!this.locationMap.contains(obj)) {
            return;
        }
        var from = obj.location();
        this.locationMap.put(obj, dest);
        var objects = this.grid[from.x][from.y];
        for (var i = 0; i < objects.length; ++i) {
            if (objects[i] === obj) {
                objects.splice(i, 1);
                this.grid[dest.x][dest.y].push(obj);
                break;
            }
        }
    };
    /**
     * Saves the current location of all objects.
     */
    GameGrid.prototype.snapshot = function () {
        this.lastLocMap = this.locationMap.clone();
    };
    /**
     * Moves all objects back to where they were when
     * the last snapshot was taken. Once restored the last
     * snapshot is destroyed and further restore calls do nothing
     * until another snapshot is taken.
     */
    GameGrid.prototype.restore = function () {
        if (this.lastLocMap !== undefined) {
            for (var _i = 0, _a = this.lastLocMap.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                this.move(key, this.lastLocMap.get(key));
                if (key instanceof Mine) {
                    key.resetPatrol();
                }
            }
            this.lastLocMap = undefined;
        }
    };
    /**
     * Returns all game obejects on the current game grid
     */
    GameGrid.prototype.allObjects = function () {
        return this.locationMap.keys();
    };
    /**
     * Returns an array containing all objects
     * at the given grid coordinate
     */
    GameGrid.prototype.getObjectsAt = function (pos) {
        return this.grid[pos.x][pos.y];
    };
    /**
     * Returns the coordinates of the grid square the mouse is in
     * @param  {MouseEvent} mouseEvent
     * @return {Point}
     */
    GameGrid.prototype.getPosition = function (mouseEvent) {
        var x = mouseEvent.offsetX;
        var y = mouseEvent.offsetY;
        return new Point(Math.floor(x / this.size), Math.floor(y / this.size));
    };
    GameGrid.prototype.getPlayer = function () {
        return this.player;
    };
    GameGrid.prototype.getBox = function () {
        return this.box;
    };
    GameGrid.prototype.update = function () {
        if (this.gameState === GameState.Completed
            || this.gameState === GameState.Over) {
            return;
        }
        if (this.gameState === GameState.Live) {
            this.checkGameStatus();
        }
        for (var _i = 0, _a = this.locationMap.keys(); _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.update();
        }
    };
    GameGrid.prototype.render = function () {
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
        CTX.beginPath();
        CTX.fillStyle = this.scheme.colorFor("Background");
        CTX.rect(0, 0, CANVAS.width, CANVAS.height);
        CTX.fill();
        if (this.gameState === GameState.Editor) {
            CTX.save();
            CTX.strokeStyle = this.scheme.colorFor("HighlightBasic");
            var s = this.size;
            for (var line = 0; line < this.grid.length; ++line) {
                for (var col = 0; col < this.grid[line].length; col++) {
                    CTX.beginPath();
                    CTX.rect(line * s, col * s, s, s);
                    CTX.stroke();
                }
            }
            CTX.restore();
        }
        for (var _i = 0, _a = this.renderQueue.data; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.item.render(this.scheme);
        }
        this.lg.rayCast(this);
        var gs = this.gameState;
        if (gs === GameState.Completed || gs === GameState.Over) {
            CTX.beginPath();
            CTX.save();
            CTX.globalAlpha = 0.7;
            CTX.fillStyle = this.scheme.colorFor("HighlightBasic");
            CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
            CTX.restore();
            CTX.beginPath();
            CTX.save();
            CTX.fillStyle = this.scheme.colorFor("Background");
            var msg = void 0, shift = void 0, hShift = void 0, helpMsg = void 0;
            if (this.gameState === GameState.Completed) {
                msg = "LEVEL COMPLETE";
                shift = 150;
                hShift = 135;
                helpMsg = "hit space to go back to the menu";
            }
            else {
                msg = "GAME OVER";
                shift = 100;
                hShift = 135;
                helpMsg = "hit space to retry the same level";
            }
            var textX = CANVAS.width / 2 - shift;
            var textY = CANVAS.height / 2;
            CTX.font = "bold 40px Roboto";
            CTX.fillText(msg, textX, textY);
            var x = CANVAS.width / 2 - hShift;
            var y = CANVAS.height / 2 + 25;
            CTX.font = "20px Roboto";
            CTX.fillText(helpMsg, x, y);
        }
    };
    GameGrid.prototype.remove = function (obj) {
        var loc = obj.location();
        var targetObjects = this.grid[loc.x][loc.y];
        for (var i = 0; i < targetObjects.length; ++i) {
            if (targetObjects[i] === obj) {
                targetObjects.splice(i, 1);
                break;
            }
        }
        if (this.player === obj) {
            this.player = undefined;
        }
        if (this.box === obj) {
            this.box = undefined;
        }
        this.locationMap.remove(obj);
        this.renderQueue.remove(obj);
        if (isLight(obj)) {
            this.lg.remove(obj);
        }
        if (isLock(obj)) {
            for (var _i = 0, _a = this.locationMap.keys(); _i < _a.length; _i++) {
                var target = _a[_i];
                if (isLockable(target)) {
                    target.removeLock(obj);
                }
            }
        }
    };
    GameGrid.prototype.getSelected = function () {
        var selected = new Array();
        for (var _i = 0, _a = this.locationMap.keys(); _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.selected) {
                selected.push(obj);
            }
        }
        return selected;
    };
    GameGrid.prototype.unselectAll = function () {
        for (var _i = 0, _a = this.locationMap.keys(); _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.selected) {
                obj.selected = false;
            }
        }
    };
    GameGrid.prototype.resetHighlight = function () {
        for (var _i = 0, _a = this.locationMap.keys(); _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.highlightLevel = Highlight.None;
            if (obj instanceof Mine) {
                obj.highlightPath = false;
            }
        }
    };
    GameGrid.prototype.checkGameStatus = function () {
        if (this.player === undefined || this.box === undefined) {
            return;
        }
        // level completed
        if (this.player.location().equals(this.box.location())) {
            this.gameState = GameState.Completed;
            var sound = new Howl({
                urls: ['sounds/success.wav']
            }).play();
            updateHistory();
        }
        // mine hit
        for (var _i = 0, _a = this.locationMap.keys(); _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj instanceof Mine) {
                var mLoc = obj.location();
                var pLoc = this.player.location();
                var yDiff = Math.abs(mLoc.y - pLoc.y);
                var xDiff = Math.abs(mLoc.x - pLoc.x);
                if (yDiff < 2 && xDiff < 2) {
                    this.gameState = GameState.Over;
                    var sound = new Howl({
                        urls: ['sounds/failure.wav']
                    }).play();
                    break;
                }
            }
        }
    };
    /**
     * Removes all objects from the game grid and resets
     * all internal state
     */
    GameGrid.prototype.clear = function () {
        this.player = undefined;
        this.box = undefined;
        this.grid = new Array();
        for (var i = 0; i < this.width; ++i) {
            var col = new Array();
            for (var j = 0; j < this.height; ++j) {
                col.push(new Array());
            }
            this.grid.push(col);
        }
        this.renderQueue = new PriorityQueue();
        this.locationMap = new Dictionary();
        this.lg.clear();
    };
    return GameGrid;
}());
var MakerMenu = /** @class */ (function () {
    function MakerMenu(menuId) {
        this.gameObjects = {
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
        };
        this.htmlMenu = document.getElementById(menuId);
        this.setUpMenu();
    }
    MakerMenu.prototype.setUpMenu = function () {
        var _this = this;
        for (var key in this.gameObjects) {
            var button = document.getElementById(key);
            button.addEventListener("click", function (event) {
                for (var key_1 in _this.gameObjects) {
                    if (key_1 == event.target.id) {
                        var h = event.target;
                        if (_this.gameObjects[key_1]) {
                            h.style.backgroundColor = "";
                        }
                        else {
                            h.style.backgroundColor = "red";
                        }
                        _this.gameObjects[key_1] = !_this.gameObjects[key_1];
                    }
                    else {
                        _this.gameObjects[key_1] = false;
                        var b = document.getElementById(key_1);
                        b.style.backgroundColor = "";
                    }
                }
            });
        }
    };
    MakerMenu.prototype.getSelected = function () {
        for (var key in this.gameObjects) {
            if (this.gameObjects[key]) {
                return key;
            }
        }
        return undefined;
    };
    MakerMenu.prototype.getObjectForSelected = function (grid) {
        var selected = this.getSelected();
        var player = grid.getPlayer();
        var box = grid.getBox();
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
    };
    MakerMenu.prototype.anySelected = function () {
        for (var key in this.gameObjects) {
            if (this.gameObjects[key]) {
                return true;
            }
        }
        return false;
    };
    MakerMenu.prototype.show = function () {
        this.htmlMenu.style.display = "";
    };
    MakerMenu.prototype.hide = function () {
        this.htmlMenu.style.display = "none";
    };
    return MakerMenu;
}());
var LEVELID;
var GAME = new GameGrid(20, 15, 40);
GAME.render();
function getGameClickHandler() {
    return function (event) {
        var pos = GAME.getPosition(event);
        var clicked = GAME.getObjectsAt(pos).filter(isLight)[0];
        // clicked on existing object
        if (clicked !== undefined) {
            var lastClicked = GAME.getSelected()[0];
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
    };
}
function getEditorClickHandler() {
    var makerMenu = new MakerMenu("maker-menu");
    return function (event) {
        var pos = GAME.getPosition(event);
        var clicked = GAME.getObjectsAt(pos)[0];
        // create new object on clicked grid square if empty
        if (makerMenu.getSelected() !== undefined && clicked === undefined) {
            var obj = makerMenu.getObjectForSelected(GAME);
            if (obj !== undefined) {
                GAME.move(obj, pos);
                return;
            }
        }
        // clicked on existing object
        if (clicked !== undefined) {
            var lastClicked = GAME.getSelected()[0];
            clicked.selected = true;
            if (clicked === lastClicked) {
                GAME.unselectAll();
                GAME.resetHighlight();
                return;
            }
            if (lastClicked === undefined) {
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
            var lastClicked = GAME.getSelected()[0];
            if (lastClicked instanceof Mine) {
                var dest = lastClicked.destination();
                if (dest !== undefined && dest.equals(pos)) {
                    lastClicked.clearPath();
                }
                else {
                    lastClicked.makePath(pos);
                }
            }
        }
    };
}
function makeLink(from, target) {
    if (isLock(from)) {
        if (isLockable(target)) {
            if (target.lockedBy(from)) {
                target.removeLock(from);
            }
            else {
                target.addLock(from);
            }
        }
    }
    if (from instanceof Portal && target instanceof Portal) {
        from;
        if (from.target !== target) {
            from.target = target;
            target.target = from;
        }
        else {
            from.target = undefined;
            target.target = undefined;
        }
    }
    if (from instanceof LightConnector) {
        if (isLight(target)) {
            if (GAME.lg.graph.links(from).indexOf(target) === -1) {
                GAME.lg.connect(from, target);
            }
            else {
                GAME.lg.disconnect(from, target);
            }
        }
    }
}
function highlightLinks(obj) {
    obj.highlightLevel = Highlight.Basic;
    if (isLock(obj)) {
        var all = GAME.allObjects();
        for (var _i = 0, all_2 = all; _i < all_2.length; _i++) {
            var item = all_2[_i];
            if (isLockable(item)) {
                if (item.lockedBy(obj)) {
                    item.highlightLevel = Highlight.Linked;
                    obj.highlightLevel = Highlight.Linked;
                }
                else {
                    item.highlightLevel = Highlight.Basic;
                }
            }
        }
    }
    if (obj instanceof Portal) {
        var all = GAME.allObjects();
        for (var _a = 0, all_3 = all; _a < all_3.length; _a++) {
            var item = all_3[_a];
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
        obj.highlightLevel = Highlight.Selected;
        var all = GAME.allObjects();
        for (var _b = 0, all_4 = all; _b < all_4.length; _b++) {
            var item = all_4[_b];
            if (isLight(item)) {
                if (GAME.lg.graph.links(item).indexOf(obj) !== -1) {
                    item.highlightLevel = Highlight.Linked;
                }
                else {
                    if (item === obj) {
                        continue;
                    }
                    item.highlightLevel = Highlight.Basic;
                }
            }
        }
    }
    if (obj instanceof Mine) {
        obj.highlightPath = true;
    }
}
var play = getGameClickHandler();
var edit = getEditorClickHandler();
var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function (event) {
    if (GAME.gameState !== GameState.Editor) {
        GAME.gameState = GameState.Editor;
        GAME.restore();
        CANVAS.removeEventListener("click", play);
        CANVAS.addEventListener("click", edit);
        playButton.style.backgroundColor = "";
    }
    else {
        GAME.gameState = GameState.Testing;
        GAME.unselectAll();
        GAME.resetHighlight();
        GAME.snapshot();
        CANVAS.removeEventListener("click", edit);
        CANVAS.addEventListener("click", play);
        playButton.style.backgroundColor = "red";
    }
});
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", function () {
    var json = JSON.stringify(serialize(GAME));
    document.getElementById("overlay").style.display = "block";
    document.getElementById("container").style.display = "block";
    document.getElementById("json-container").style.display = "block";
    document.getElementById("json-message").innerText = json;
});
document.addEventListener("keydown", function (event) {
    var gs = GAME.gameState;
    if (event.keyCode === KeyCodes.Space) {
        if (gs === GameState.Completed) {
            showMenu();
            return;
        }
        if (gs === GameState.Over) {
            GAME.clear();
            deserialize(LEVELS[LEVELID], GAME);
            showGame();
            return;
        }
    }
    var player = GAME.getPlayer();
    if (player !== undefined) {
        var loc = player.location();
        if (event.keyCode === KeyCodes.A) {
            player.moveTo(new Point(loc.x - 1, loc.y));
        }
        else if (event.keyCode === KeyCodes.W) {
            player.moveTo(new Point(loc.x, loc.y - 1));
        }
        else if (event.keyCode === KeyCodes.D) {
            player.moveTo(new Point(loc.x + 1, loc.y));
        }
        else if (event.keyCode === KeyCodes.S) {
            player.moveTo(new Point(loc.x, loc.y + 1));
        }
        else if (event.keyCode === KeyCodes.E) {
            player.grab();
        }
        GAME.update();
    }
    if (event.keyCode == KeyCodes.Esc) {
        GAME.unselectAll();
        GAME.resetHighlight();
    }
    else if (event.keyCode == KeyCodes.Del) {
        if (GAME.gameState === GameState.Editor) {
            var selected = GAME.getSelected()[0];
            if (selected !== undefined) {
                GAME.remove(selected);
                GAME.resetHighlight();
            }
        }
    }
});
setInterval(function () {
    GAME.update();
    GAME.render();
}, 1000 / 24);
loadLevels();
showMenu();
function loadLevels() {
    var menu = document.getElementById("game-levels");
    var lvlNumbers = Object.keys(LEVELS);
    for (var _i = 0, lvlNumbers_1 = lvlNumbers; _i < lvlNumbers_1.length; _i++) {
        var key = lvlNumbers_1[_i];
        (function (key) {
            var lvl = document.createElement("span");
            var txt = document.createTextNode(key);
            lvl.appendChild(txt);
            lvl.className = "level level-" + key;
            var level = LEVELS[key];
            var clickHandler = function (event) {
                GAME.clear();
                deserialize(level, GAME);
                LEVELID = key;
                showGame();
            };
            lvl.addEventListener("click", clickHandler);
            menu.appendChild(lvl);
        }(key));
    }
    if (lvlNumbers.length < 20) {
        for (var i = 0; i < 20 - lvlNumbers.length; ++i) {
            var lvl = document.createElement("span");
            lvl.className = "dummy-level";
            menu.appendChild(lvl);
        }
    }
}
function showGame() {
    var gameArea = document.getElementById("game-area");
    gameArea.style.display = "block";
    var gameLevels = document.getElementById("game-levels");
    gameLevels.style.display = "none";
    var editor = document.getElementById("maker-menu");
    editor.style.display = "none";
    GAME.gameState = GameState.Live;
    CANVAS.removeEventListener("click", edit);
    CANVAS.addEventListener("click", play);
}
function showMenu() {
    checkHistory();
    var gameArea = document.getElementById("game-area");
    gameArea.style.display = "none";
    var gameLevels = document.getElementById("game-levels");
    gameLevels.style.display = "block";
    GAME.clear();
}
var menuButton = document.querySelector(".octicon-three-bars");
menuButton.addEventListener("click", showMenu);
var editorButton = document.querySelector(".octicon-pencil");
editorButton.addEventListener("click", function () {
    var gameArea = document.getElementById("game-area");
    gameArea.style.display = "block";
    var gameLevels = document.getElementById("game-levels");
    gameLevels.style.display = "none";
    var editor = document.getElementById("maker-menu");
    editor.style.display = "block";
    GAME.gameState = GameState.Editor;
    CANVAS.removeEventListener("click", play);
    CANVAS.addEventListener("click", edit);
});
var helpButton = document.querySelector(".octicon-info");
helpButton.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("container").style.display = "block";
    document.getElementById("help-container").style.display = "block";
});
var muteButton = document.getElementById("sound-button");
muteButton.addEventListener("click", function (e) {
    if (Howler.volume() === 0) {
        e.target.classList.remove("octicon-mute");
        e.target.classList.add("octicon-unmute");
        Howler.unmute();
    }
    else {
        e.target.classList.remove("octicon-unmute");
        e.target.classList.add("octicon-mute");
        Howler.mute();
    }
});
var closeButton = document.getElementById("close-container");
closeButton.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("help-container").style.display = "none";
    document.getElementById("json-container").style.display = "none";
});
function checkHistory() {
    var completed = JSON.parse(localStorage.getItem("completed"));
    if (completed !== null) {
        for (var _i = 0, completed_1 = completed; _i < completed_1.length; _i++) {
            var level = completed_1[_i];
            var lvlSpan = document.querySelector(".level-" + level);
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
    var completed = JSON.parse(localStorage.getItem("completed"));
    if (completed === null) {
        completed = [LEVELID];
    }
    else if (completed.indexOf(LEVELID) === -1) {
        completed.push(LEVELID);
    }
    localStorage.setItem("completed", JSON.stringify(completed));
}
