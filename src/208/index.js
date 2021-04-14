class Trie {
  constructor() {
    this.val = null;
    this.isLeaf = false;
    this.children = [];
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    if (!word) return;
    let child = this.children.find((child) => child.val === word[0]);
    if (!child) {
      child = new Trie();
      child.val = word[0];
      this.children.push(child);
    }
    if (word.length === 1) child.isLeaf = true;
    return child.insert(word.slice(1));
  }
  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    if (this.val === null)
      return !!this.children.find((child) => child.search(word));
    if (!word) return false;
    if (this.val !== word[0]) return false;
    if (word.length === 1) return this.isLeaf;
    if (word.length !== 1 && this.children.length === 0) return false;
    return !!this.children.find((child) => child.search(word.slice(1)));
  }
  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    if (this.val === null)
      return !!this.children.find((child) => child.startsWith(prefix));
    if (!prefix) return true;
    if (this.val !== prefix[0]) return false;
    if (prefix.length === 1) return true;
    if (prefix.length !== 1 && this.children.length === 0) return false;
    return !!this.children.find((child) => child.startsWith(prefix.slice(1)));
  }
}
