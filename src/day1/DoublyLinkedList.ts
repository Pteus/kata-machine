type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        this.length++;
    }

    append(item: T): void {
        const node: Node<T> = { value: item, prev: this.tail };
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;

        if (!this.head) {
            this.head = node;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new RangeError(`Index ${idx} out of bounds`);
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        let current = this.head;
        for (let i = 0; i < idx - 1 && current; i++) {
            current = current.next;
        }

        if (!current) {
            throw new Error("Unexpected null node while inserting");
        }

        const node: Node<T> = {
            value: item,
            next: current.next,
            prev: current,
        };
        if (current.next) {
            current.next.prev = node;
        }
        current.next = node;

        this.length++;
    }

    remove(item: T): T | undefined {
        let current = this.head;

        while (current) {
            if (current.value === item) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                this.length--;
                return current.value;
            }

            current = current.next;
        }

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            throw new RangeError(`Index ${idx} out of bounds`);
        }

        if (idx === 0) {
            const value = this.head?.value;
            this.head = this.head?.next;
            if (this.head) {
                this.head.prev = undefined;
            } else {
                this.tail = undefined;
            }

            this.length--;
            return value;
        }

        let current = this.head;
        for (let i = 0; i < idx && current; i++) {
            current = current.next;
        }

        if (!current) {
            throw new Error("Unexpected null node while removing");
        }

        if (current.prev) {
            current.prev.next = current.next;
        }

        if (current.next) {
            current.next.prev = current.prev;
        } else {
            this.tail = current.prev;
        }

        this.length--;
        return current.value;
    }

    get(idx: number): T | undefined {
        let current = this.head;
        for (let i = 0; i < idx && current; i++) {
            current = current.next;
        }

        return current?.value;
    }
}
