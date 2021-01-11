declare class ListNode<T> {
    constructor(val?: T);
    val: any;
    next: ListNode<T> | null;
}
declare class TreeNode<T> {
    constructor(val?: T);
    val: any;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}
declare function array2list<T>(arr: Array<T>): ListNode<T> | null;
declare function array2tree<T>(arr: Array<T>): TreeNode<T> | null;
declare function quickSort<T>(arr: Array<T>, compare: (a: T, b: T) => boolean): Array<T>;
declare class Heap<T> {
    constructor(compare: (a: T, b: T) => boolean);
    heap: Array<T>;
    compare: (a: T, b: T) => boolean;
    swap(i: number, j: number): void;
    shiftDown(): void;
    shiftUp(): void;
    push(ele: T): void;
    pop(): T;
    get(i?: number): T;
    set(i: number, ele: T): void;
    toArray(): T[];
}
declare class UnionFind<T> {
    constructor(els: Array<T>);
    elsTree: Map<T, T>;
    elsList: Map<T, Array<T>>;
    size: number;
    find: (el: T) => T;
    same: (el1: T, el2: T) => boolean;
    union: (el1: T, el2: T) => void;
    forEach: (cb: (val: Array<T>) => any) => void;
}
export { ListNode, TreeNode, array2tree, array2list, quickSort, Heap, UnionFind };
