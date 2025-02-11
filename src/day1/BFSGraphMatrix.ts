export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    // an array to keep track of the seen positions
    const seen = new Array(graph.length).fill(false);
    // an array to keep track of the "parent" of each position
    const prev = new Array(graph.length).fill(-1);

    // the source is the starting point, so we can mark as seen
    seen[source] = seen;
    // create a queue and add the source to it
    const q: number[] = [source];

    do {
        // pop the first element
        const curr = q.shift() as number;

        // get the adjacency row for the current
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            // if there is a 0 it means that the nodes do not connect, continue
            // if we've already been here, continue
            if (adjs[i] === 0 || seen[i]) {
                continue;
            }

            // mark the node as seen
            seen[i] = true;
            // say that the current node is parent/has a connection to the ith node
            prev[i] = curr;
            // push to stack (BFS)
            q.push(i);
        }
    } while (q.length);

    // we want to find the needle, so we start there
    let curr = needle;
    // if the needle doesn't have any previous, it means that nothing connects to it
    if (prev[needle] === -1) {
        return null;
    }

    // now we need to build the path backwards
    const out: number[] = [];
    // at this point only the source should have -1 as it's previous, right?
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr]; // set it to the parent
    }

    // add the source at the start of the reversed out array
    return [source].concat(out.reverse());
    // profit!
}
