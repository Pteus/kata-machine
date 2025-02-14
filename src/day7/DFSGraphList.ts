export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  let seen = new Array(graph.length).fill(false);
  let path: number[] = [];

  search(graph, source, needle, seen, path);
  if (path.length === 0) {
    return null;
  }

  return path;
}

function search(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[],
): boolean {
  if (seen[curr]) {
    return false;
  }

  seen[curr] = true;
  path.push(curr);

  if (curr === needle) {
    return true;
  }

  const adjs = graph[curr];
  for (let i = 0; i < adjs.length; i++) {
    if (search(graph, adjs[i].to, needle, seen, path)) {
      return true;
    }
  }

  path.pop();
  return false;
}
