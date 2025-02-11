const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
];
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let path: Point[] = [];
    let seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, path, seen);

    return path;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    path: Point[],
    seen: boolean[][],
) {
    if (
        curr.x >= maze[0].length ||
        curr.x < 0 ||
        curr.y >= maze.length ||
        curr.y < 0
    ) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                path,
                seen,
            )
        ) {
            return true;
        }
    }

    path.pop();
    return false;
}
