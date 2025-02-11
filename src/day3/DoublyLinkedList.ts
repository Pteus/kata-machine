export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;

        const newNode = { value: item } as ListNode<T>;

        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("oh no");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        const newNode: ListNode<T> = { value: item };

        let curr = this.getAt(idx);

        curr = curr as ListNode<T>; // TS shenanigans

        newNode.next = curr;
        newNode.prev = curr.prev;
        curr.prev = newNode;
        if (newNode.prev) {
            newNode.prev.next = newNode;
        }
    }

    append(item: T): void {
        this.length++;

        const newNode = { value: item } as ListNode<T>;

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);
    }

    private removeNode(curr: ListNode<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }
        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.prev = curr.next = undefined;

        return curr.value;
    }

    private getAt(idx: number): ListNode<T> | undefined {
        let curr = this.head;
        // curr && <- TS shenanigans - de certeza que o node existe, se nao existe é porque fizemos asneira com o length...
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr;
    }
}
