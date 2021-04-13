declare class ListNode<T> {
  constructor(val?: T, next?: ListNode<T>);
  val: any;
  next: ListNode<T> | null;
}
declare class TreeNode<T> {
  constructor(val?: T, left?: TreeNode<T>, right?: TreeNode<T>);
  val: any;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
declare function array2list<T>(arr: T[]): ListNode<T> | null;
declare function list2array<T>(list: ListNode<T> | null): T[];
declare function array2tree<T>(arr: T[]): TreeNode<T> | null;
declare function tree2array<T>(root: TreeNode<T> | null): T[];
declare function quickFindIndex<T>(
  array: T[],
  predicate: (value?: T, index?: number, array?: T[]) => boolean
): number;
declare function quickFind<T>(
  array: T[],
  predicate: (value?: T, index?: number, array?: T[]) => boolean
): T | null;
declare function quickSort<T>(arr: T[], compare: (a: T, b: T) => boolean): T[];
declare class Heap<T> {
  constructor(compare: (a: T, b: T) => boolean);
  heap: T[];
  compare: (a: T, b: T) => boolean;
  swap(i: number, j: number): void;
  shiftDown(): void;
  shiftUp(): void;
  push(ele: T): void;
  pop(): T;
}
declare class UnionFind<T> {
  constructor(param: number | T[]);
  elsTree: Map<number | T, number | T>;
  size: number;
  find(el: T): T;
  same(el1: T, el2: T): boolean;
  union(el1: T, el2: T): void;
}
declare function A(n1: number, n2: number): number;
declare function C(n1: number, n2: number): number;
export {
  ListNode,
  TreeNode,
  array2tree,
  array2list,
  tree2array,
  list2array,
  quickFindIndex,
  quickFind,
  quickSort,
  Heap,
  UnionFind,
  A,
  C,
};
