function walk(curr: BinaryNode<number> | null, path: number[]) {
    // base case
    if (!curr) {
        return path;
    }

    // recurse step
    // pre
    path.push(curr.value);
    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    // post

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
