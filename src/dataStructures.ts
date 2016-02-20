interface Hashable {
    hashCode(): number;
}

/**
 * Simple silly way of generating unique hashcodes for objects
 * during the lifetime of the application
 */
class HashCoder {
    private static hash = 0;
    static nextHash() {
        return HashCoder.hash++;
    }
}

class Dictionary<K extends Hashable, V> {
    protected data: { [key: string]: [K, V] };

    constructor() {
        this.data = {};
    }

    put(k: K, v: V) {
        this.data[k.hashCode()] = [k, v];
    }

    get(k: K) {
        let kv = this.data[k.hashCode()];
        return kv !== undefined ? kv[1] : undefined;
    }

    remove(k: K) {
        delete this.data[k.hashCode()];
    }

    contains(k: K) {
        if (this.data[k.hashCode()] !== undefined) {
            return true;
        }
        return false;
    }

    keys() {
        let keys = new Array<K>();
        for (let key of Object.keys(this.data)) {
            keys.push(this.data[key][0]);
        }
        return keys;
    }

    values() {
        let values = new Array<V>();
        for (let key in Object.keys(this.data)) {
            values.push(this.data[key][1]);
        }
        return values;
    }

    clone() {
        let copy = new Dictionary<K, V>();
        for (let key of this.keys()) {
            copy.put(key, this.get(key));
        }
        return copy;
    }
}

/**
 * Like a regular dictionary but get calls return
 * a default object rather than undefined for keys not
 * in the collection
 */
class DefaultDict<K extends Hashable, V> extends Dictionary<K, V> {
    private defCreator: { new (): V; };

    constructor(defCreator: { new (): V; }) {
        super();
        this.defCreator = defCreator;
    }

    get(k: K) {
        let v: V;
        let kv = this.data[k.hashCode()];
        if (kv === undefined) {
            let defVal = new this.defCreator();
            this.put(k, defVal);
            return defVal;
        }
        return kv[1];
    }
}

class Set<T extends Hashable> {
    protected data: { [key: string]: T };

    constructor() {
        this.data = {};
    }

    put(v: T) {
        this.data[v.hashCode()] = v;
    }

    contains(v: T) {
        return this.data[v.hashCode()] !== undefined;
    }

    remove(v: T) {
        delete this.data[v.hashCode()];
    }

    values() {
        let values = new Array<T>();
        for (let key in this.data) {
            values.push(this.data[key]);
        }
        return values;
    }
}

class Queue<T> {
    private first: number;
    private count: number;
    private data: Array<T>;

    constructor(data = new Array<T>()) {
        this.first = 0;
        this.count = data.length;
        this.data = data;
    }

    enqueue(item: T) {
        this.data.push(item);
        this.count += 1;
    }

    dequeue() {
        let item = this.data[this.first];
        if (item === undefined) {
            return undefined;
        }
        this.first += 1;
        if (this.first * 2 >= this.data.length) {
            this.data = this.data.splice(this.first);
            this.first = 0;
        }
        this.count -= 1;
        return item;
    }

    peek() {
        return this.data[this.first];
    }

    size() {
        return this.count;
    }

    empty() {
        return this.count === 0;
    }
}

class UndirGraph<T extends Hashable> {
    graph: DefaultDict<T, Set<T>>;

    constructor() {
        this.graph = new DefaultDict<T, Set<T>>(Set);
    }

    connect(one: T, another: T) {
        this.graph.get(one).put(another);
        this.graph.get(another).put(one);
    }

    disconnect(one: T, another: T) {
        this.graph.get(one).remove(another);
        this.graph.get(another).remove(one);
    }

    links(node: T) {
        return this.graph.get(node).values();
    }

    remove(node: T) {
        let links = this.links(node);
        for (let link of links) {
            this.disconnect(node, link);
        }
        this.graph.remove(node);
    }

    vertices() {
        return this.graph.keys();
    }
}

class PriorityItem<T> {
    item: T;
    priority: number;

    constructor(item: T, priority: number) {
        this.item = item;
        this.priority = priority;
    }
}

/**
 * Naive priority queue
 */
class PriorityQueue<T> {
    data: Array<PriorityItem<T>>;

    constructor() {
        this.data = new Array<PriorityItem<T>>();
    }

    push(item: T, priority: number) {
        this.data.push(new PriorityItem<T>(item, priority));
        this.data.sort((a, b) => b.priority - a.priority);
    }

    remove(item: T) {
        for (let i = 0; i < this.data.length; ++i) {
            if (this.data[i].item === item) {
                this.data.splice(i, 1);
                break;
            }
        }
    }

    pop() {
        return this.data.pop().item;
    }
}
