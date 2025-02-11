export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return recurse(head, needle);
}

function recurse(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value == needle) {
        return true;
    }

    if (needle < curr.value) {
        return recurse(curr.left, needle);
    }

    return recurse(curr.right, needle);
}
