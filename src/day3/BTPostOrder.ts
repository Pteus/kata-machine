export default function post_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    search(head, path);
    return path;
}

function search(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) {
        return;
    }

    search(curr.left, path);
    search(curr.right, path);
    path.push(curr.value);
}
