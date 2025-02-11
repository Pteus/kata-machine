export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    return dfs(a, b);
}

function dfs(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return dfs(a.left, b.left) && dfs(a.right, b.right);
}
