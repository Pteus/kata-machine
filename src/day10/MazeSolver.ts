const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
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
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  if (curr.y === end.y && curr.x === end.x) {
    path.push(end);
    return true;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  path.push(curr);
  seen[curr.y][curr.x] = true;

  for (const [x, y] of dir) {
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, path, seen)) {
      return true;
    }
  }

  path.pop();
  return false;
}

