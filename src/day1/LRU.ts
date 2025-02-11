export default class LRU<K, V> {
    private length: number;

    constructor() {}

    update(key: K, value: V): void {
        // does it exist?
        //
    }
    get(key: K): V | undefined {
        // check the cache for existence
        //update the value we found and move it to the front
        // return out the value if found or undefined
    }
}
