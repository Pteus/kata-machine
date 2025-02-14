export default function pre_order_search(head: BinaryNode<number>): number[] {
  let path: number[] = [];
  dfs(head, path);
  return path;
}

function dfs(curr: BinaryNode<number> | null, path: number[]) {
  if (!curr) {
    return;
  }

  path.push(curr.value);
  dfs(curr.left, path);
  dfs(curr.right, path);
}
