export default function pre_order_search(head: BinaryNode<number>): number[] {
    return search(head, []);
}

function search(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) {
        return path;
    }

    path.push(curr.value);
    search(curr.left, path);
    search(curr.right, path);

    return path;
}

