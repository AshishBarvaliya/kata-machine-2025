type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        let node: Node<T> = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        let head = this.head;
        this.head = this.head.next;

        // free
        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
