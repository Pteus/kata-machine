const dir = [
    [0, 1],
    [0, 1],
    [1, 0],
    [-1, 0],
];

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    var path: Point[] = [];
    var seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
) {
    if (curr.y === end.y && curr.x === end.x) {
        path.push(curr);
        return true;
    }

    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }

    path.pop();

    return false;
}
