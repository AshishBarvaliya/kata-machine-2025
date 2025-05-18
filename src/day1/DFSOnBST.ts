function traverse(head: BinaryNode<number> | null, needle: number): boolean {
    if (!head) {
        return false;
    }

    if (head.value === needle) {
        return true;
    }
    return traverse(head.left, needle) || traverse(head.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return traverse(head, needle);
}
