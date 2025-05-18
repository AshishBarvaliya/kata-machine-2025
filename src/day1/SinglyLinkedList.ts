type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        let node = { value: item };
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        let head = this.head;
        this.head = node;
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
                this.head.next = curr;
            } else {
                if (!next) {
                    curr.next = node;
                    this.tail = node;
                } else {
                    pre.next = node;
                    node.next = next;
                }
            }
        } else {
            if (idx === 0) {
                this.head = this.tail = node;
            } else if (pre) {
                pre.next = node;
                this.tail = node;
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
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        let pre = undefined;
        for (let i = 0; i < this.length && curr?.value !== item; i++) {
            pre = curr;
            curr = curr?.next;
        }
        let next = curr?.next;
        if (curr) {
            if (!pre) {
                if (!next) {
                    this.head = this.tail = undefined;
                } else {
                    this.head = next;
                }
            } else {
                if (!next) {
                    this.tail = pre;
                } else {
                    pre.next = next;
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
        let curr = this.head;
        let pre = undefined;
        for (let i = 0; i < idx && curr; i++) {
            pre = curr;
            curr = curr.next;
        }
        let next = curr?.next;
        if (curr) {
            if (!pre) {
                if (!next) {
                    this.head = this.tail = undefined;
                } else {
                    this.head = next;
                }
            } else {
                if (!next) {
                    this.tail = pre;
                } else {
                    pre.next = next;
                }
            }
            this.length--;
        }

        return curr?.value;
    }
}
