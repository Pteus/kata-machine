export default function in_order_search(head: BinaryNode<number>): number[] {
  let path: number[] = [];

  search(head, path);

  return path;
}

function search(curr: BinaryNode<number> | null, path: number[]) {
  if (!curr) {
    return path;
  }

  search(curr.left, path);
  path.push(curr.value);
  search(curr.right, path);

  return path;
}

