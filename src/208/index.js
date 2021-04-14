class Trie {
  constructor() {
    this.val = null;
    this.isLeaf = false;
    this.children = new Map();
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    if (!word) return;
    let child = this.children.get(word[0]);
    if (!child) {
      child = new Trie();
      child.val = word[0];
      this.children.set(word[0], child);
    }
    if (word.length === 1) child.isLeaf = true;
    return child.insert(word.slice(1));
  }
  /**
   * Find a node from the trie.
   * @param {string} word
   * @return {Trie}
   */
  find(word) {
    if (!word) return;
    if (this.val === null) {
      const child = this.children.get(word[0]);
      if (child) {
        return child.find(word);
      }
      return;
    }
    if (this.val === word) return this;
    const child = this.children.get(word[1]);
    if (child) {
      return child.find(word.slice(1));
    }
    return;
  }
  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const trie = this.find(word);
    return !!(trie && trie.isLeaf);
  }
  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const trie = this.find(prefix);
    return !!trie;
  }
}
