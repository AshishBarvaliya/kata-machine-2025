type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        let node = { value: item };
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
        }

        let head = this.head;
        this.head = node;
        this.head.prev = node;
        this.head.next = head;
    }
    insertAt(item: T, idx: number): void {
        let node: Node<T> = { value: item };
        let curr = this.head;
        let pre = undefined;
        for (let i = 0; i < idx && curr; i++) {
            pre = curr;
            curr = curr.next;
        }
        let next = curr?.next;
        this.length++;
        if (curr) {
            if (!pre) {
                this.head = node;
                this.head.prev = node;
                this.head.next = curr;
            } else {
                if (!next) {
                    curr.next = node;
                    this.tail = node;
                    this.tail.prev = curr;
                } else {
                    pre.next = node;
                    next.prev = node;
                    node.next = next;
                    node.prev = pre;
                }
            }
        } else {
            if (idx === 0) {
                this.head = this.tail = node;
            } else if (pre) {
                pre.next = node;
                this.tail = node;
                this.tail.prev = pre;
            } else {
                this.length--;
            }
        }
    }
    append(item: T): void {
        let node = { value: item };
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
        }

        let tail = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.tail.prev = tail;
    }
    remove(item: T): T | undefined {
        let prev = undefined;
        let curr = this.head;
        for (let i = 0; curr && curr?.value !== item; i++) {
            prev = curr;
            curr = curr.next;
        }
        let next = curr?.next;
        if (curr) {
            if (!prev) {
                if (!next) {
                    this.head = this.tail = undefined;
                } else {
                    this.head = next;
                }
            } else {
                if (!next) {
                    this.tail = prev;
                } else {
                    prev.next = next;
                    next.prev = curr.prev;
                }
            }
            this.length--;
        }

        return curr?.value;
    }
    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        let prev = undefined;
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            prev = curr;
            curr = curr.next;
        }
        let next = curr?.next;
        if (curr) {
            if (!prev) {
                if (!next) {
                    this.head = this.tail = undefined;
                } else {
                    this.head = next;
                }
            } else {
                if (!next) {
                    this.tail = prev;
                } else {
                    prev.next = next;
                    next.prev = curr.prev;
                }
            }
            this.length--;
        }

        return curr?.value;
    }
}
