import retryTimes = jest.retryTimes;

function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    // base cases
    if (seen[curr]) {
        return false;
    }

    // seen it
    seen[curr] = true;

    // pre
    //add to path
    path.push(curr);
    // have we found the needle?
    if (curr === needle) {
        return true;
    }

    // recurse
    // get the edges that I'm connected to
    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        // now we walk to each edge connected to me, recursively
        if (walk(graph, edge.to, needle, seen, path)) {
            // we found the needle
            return true;
        }
    }

    // post
    // we haven't found the needle here
    path.pop();

    return false;
}

// log(V+E)
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);
    if (path.length === 0) return null;

    return path;
}
