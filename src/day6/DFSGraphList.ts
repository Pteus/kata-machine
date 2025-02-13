export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  let path: number[] = [];
  let seen: boolean[] = new Array(graph.length).fill(false);

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
) {
  if (seen[curr]) {
    return false;
  }

  seen[curr] = true;
  path.push(curr);

  if (curr === needle) {
    return true;
  }

  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    if (search(graph, list[i].to, needle, seen, path)) {
      return true;
    }
  }

  path.pop();
  return false;
}

