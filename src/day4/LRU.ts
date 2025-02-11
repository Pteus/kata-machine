function createNode<V>(value: V): ListNode<V> {
    return { value };
}
export default class LRU<K, V> {
    private length: number;
    private head?: ListNode<V>;
    private tail?: ListNode<V>;

    private lookup: Map<K, ListNode<V>>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, ListNode<V>>();
    }

    update(key: K, value: V): void {
        // does it exist?
        //
        // if it doesn't we need to insert
        //      - check capacity and evict if over
        // if it does, we need to update to the front of the list
    }
    get(key: K): V | undefined {
        // check the cache for existence
        // update the value we found and move it to the front
        // return out the value found or undefined if not exists
    }
}
