function traverse(head: BinaryNode<number> | null, path: number[]): void {
    if (!head) {
        return;
    }

    traverse(head.left, path);
    path.push(head.value);
    traverse(head.right, path);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    traverse(head, path);

    return path;
}
