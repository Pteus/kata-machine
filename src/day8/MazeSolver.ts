const dir: number[][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

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
): boolean {
  // Base cases
  // 1. off the map
  // 2. it's a wall
  // 3. it's the end
  // 4. if we have seen it
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

  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (const [x, y] of dir) {
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  path.pop();
  return false;
}
