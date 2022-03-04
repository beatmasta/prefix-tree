/*
 * Author: Alex Vanyan (alexander.vanyan@gmail.com)
 * Data Structure: TRIE / Prefix Tree / Digital Tree 
 * Description: Example of finding URL in big array of URLs and returning a boolean value if it exists.
 */

class Trie {
	
  constructor(bigData) {
  	this._prefixTree = {};
  	this._data = bigData;
    this._build();
  }
  
  get tree() {
  	return this._prefixTree;
  }
  
  _addData(tree, charArr) {
  	
    const letter = charArr.shift();
  	
    if (!(letter in tree)) tree[letter] = {};
    
    charArr.length && this._addData(tree[letter], charArr);
    
  }
  
	_build() {
  	
    this._data.forEach(str => {
    	this._addData(this.tree, str.split(''));
    });
    
  }
  
  _findInTree(tree, keyArr) {
  	
    const key = keyArr.shift();
    
    if (!keyArr.length) return true;
    
    if (key in tree) {
	    return this._findInTree(tree[key], keyArr);
    }
    
    return false;
    
  }
  
  has(key) {
    return this._findInTree(this.tree, key.split(''));
  }
  
}

const textFile = [
  'http://archive.is/',
  'http://areyouahuman.com/',
  'http://avatars.io/',
  'http://beta.mural.ly/',
  'http://bli.ms/',
  'http://boxjs.com/',
  'http://buddypress.org/',
  'http://carbonmade.com/',
  'http://dochub.io/',
  'http://dropr.com/',
	'http://epilogger.com/',
	'https://google.com',
	'http://fontello.com/',
	'http://g.etfv.co/'
];

const trie = new Trie(textFile);

console.log('Trie has google.com:', trie.has('https://google.com'));

/* console.log('Trie dump:', JSON.stringify(trie.tree, null, 2)); */
