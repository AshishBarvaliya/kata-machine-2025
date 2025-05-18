function traverse(head: BinaryNode<number> | null, path: number[]): void {
    if (!head) {
        return;
    }

    path.push(head.value);
    traverse(head.left, path);
    traverse(head.right, path);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    traverse(head, path);

    return path;
}
