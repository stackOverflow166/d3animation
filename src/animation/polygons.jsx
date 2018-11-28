"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var calPoint = function (center, side, size, radians) {
    var angle = side * radians / 180 * Math.PI;
    var x = center.x + size * Math.sin(angle);
    var y = center.y + size * Math.cos(angle);
    return {
        x: x,
        y: y
    };
};
var getPoints = function (center, sides, size) {
    var radians = (360 / sides);
    var points = lodash_1.range(0, sides).map(function (side) {
        var point = calPoint(center, side, size, radians);
        var point_string = point.x.toString() + ',' + point.y.toString();
        return point_string;
    });
    return points.join(" ");
};
var Polygons = function (_a) {
    var _b = _a.sides, sides = _b === void 0 ? 6 : _b, size = _a.size, fill = _a.fill, center = _a.center, _c = _a.rotate, rotate = _c === void 0 ? 0 : _c, onClick = _a.onClick, stroke = _a.stroke, strokeWidth = _a.strokeWidth, strokeDasharray = _a.strokeDasharray, strokeOpacity = _a.strokeOpacity;
    var points = getPoints(center, sides, size);
    return (<polygon points={points} fill={fill} onClick={onClick} stroke={stroke} strokeDasharray={strokeDasharray} strokeOpacity={strokeOpacity}/>);
};
exports.default = Polygons;
