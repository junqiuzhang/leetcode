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
declare function array2list<T>(arr: T[]): ListNode<T> | null;
declare function array2tree<T>(arr: T[]): TreeNode<T> | null;
declare function quickSort<T>(arr: T[], compare: (a: T, b: T) => boolean): Array<T>;
declare class Heap<T> {
    constructor(compare: (a: T, b: T) => boolean);
    heap: T[];
    compare: (a: T, b: T) => boolean;
    swap(i: number, j: number): void;
    shiftDown(): void;
    shiftUp(): void;
    push(ele: T): void;
    pop(): T;
    get(i?: number): T;
    set(i: number | undefined, ele: T): void;
    toArray(): T[];
}
declare class UnionFind<T> {
    constructor(param: number | T[]);
    elsTree: Map<number | T, number | T>;
    size: number;
    find: (el: T) => T;
    same: (el1: T, el2: T) => boolean;
    union: (el1: T, el2: T) => void;
}
export { ListNode, TreeNode, array2tree, array2list, quickSort, Heap, UnionFind };
