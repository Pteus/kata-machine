export default function in_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];

    walk(head, path);

    return path;
}

function walk(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) {
        return;
    }

    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);
}
