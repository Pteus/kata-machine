export default function post_order_search(head: BinaryNode<number>): number[] {
    return search(head, []);
}

function search(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) {
        return path;
    }

    search(curr.left, path);
    search(curr.right, path);
    path.push(curr.value);

    return path;
}

