export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    search(head, path);
    return path;
}

function search(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) {
        return;
    }

    path.push(curr.value);
    search(curr.left, path);
    search(curr.right, path);
}
