type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        let node: Node<T> = { value: item };

        this.length++;
        if (!this.head) {
            this.head = node;
        }

        let head = this.head;
        this.head = node;
        this.head.prev = head;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        let head = this.head;
        this.head = this.head?.prev;

        // free
        if (this.length === 0) {
            this.head = undefined;
        }

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
