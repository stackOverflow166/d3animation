import * as React from 'react'
import { range } from "lodash";


export interface PolygonProps {
    sides: number;
    size: number;
    center?: Points;
    className?: string;
    rotate?:number
    clickHandler: any
    fill?:string
    strokeDasharray?:string
    strokeWidth?:number
    stroke?:string
}

export interface PointsProps {
    sides: number
    size: number
    center: Points
    rotate: number
}
interface Points {
    x: number,
    y: number
}

interface PolygonsProps {
    points: string
    sides: number,
    size: number,
    fill: string,
    center: Points,
    rotate: number,
    onClick: any,
    stroke: string,
    strokeWidth: string,
    strokeDasharray: string,
    strokeOpacity:string,
}
const calPoint = (center: Points,side: number,size: number,radians: number):Points => {
    let angle = side * radians / 180 * Math.PI
    let x = center.x + size * Math.sin(angle)
    let y = center.y + size * Math.cos(angle)
    return {
        x: x,
        y: y
    }
}

const getPoints = (center:Points,sides:number,size:number) => {
    const radians = (360/sides)
    let points = range(0,sides).map(side => {
        let point = calPoint(center,side,size,radians)
        let point_string = point.x.toString() + ',' + point.y.toString()
        return point_string
    })
    return points.join(" ")
}
const Polygons:React.SFC<PolygonsProps> = ({
    sides = 6,
    size,
    fill,
    center,
    rotate = 0,
    onClick,
    stroke,
    strokeWidth,
    strokeDasharray,
    strokeOpacity,
}) => {
    const points = getPoints(center,sides,size)
    return (
        <polygon
            points={points}
            fill={fill}
            onClick={onClick}
            stroke={stroke}
            strokeDasharray={strokeDasharray}
            strokeOpacity={strokeOpacity}
        />
    )
}

export default Polygons
