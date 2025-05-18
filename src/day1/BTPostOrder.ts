function traverse(head: BinaryNode<number> | null, path: number[]): void {
    if (!head) {
        return;
    }

    traverse(head.left, path);
    traverse(head.right, path);
    path.push(head.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    traverse(head, path);

    return path;
}
