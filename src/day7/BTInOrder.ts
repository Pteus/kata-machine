export default function in_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  dfs(head, path);
  return path;
}

function dfs(curr: BinaryNode<number> | null, path: number[]) {
  if (!curr) {
    return;
  }

  dfs(curr.left, path);
  path.push(curr.value);
  dfs(curr.right, path);
}

