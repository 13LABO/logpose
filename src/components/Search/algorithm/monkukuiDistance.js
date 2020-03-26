import levenshteinDistance from './levenshteinDistance';

function tokenize(str) {
  if (str.length === 0) return [];
  if (str.length === 1) {
    let arr = [];
    arr.push(str);
    return arr;
  }

  if (str.toLowerCase().match(/[一-龠]+|[ァ-ヴー]+|[a-z0-9]+/g) === null) return [];

  return str.toLowerCase()
  // 漢字、カナ、半角英数の連続する塊を切り出し
  // かなと全角英数は対象外
  .match(/[一-龠]+|[ァ-ヴー]+|[a-z0-9]+/g)
  // 1文字の要素を削除する
  .filter(word => word.length > 1)
  // 半角英数の場合、前方一致検索ができるように処理
  .map(word => {
    if (word.match(/[a-z0-9]+/g)) {
      let token = ''
      return Array.from(word)
        .map(char => (token += char))
        .filter(token => token.length > 1)
    } else {
      return word
    }
  })
  .flat();
}



export default function monkukuiDistance( s, t ) {
  
  let u = tokenize(s);
  let v = tokenize(t);
  // どっちかが空文字列なら
  
  let ret = 0;
  for (let i = 0; i < u.length; i++) {
    for (let j = 0; j < v.length; j++) {
      if (u[i] == v[j]) ret++;
    }
  }

  return ret;
  /*
  var n = s.length;
  var m = t.length;
  var ret = levenshteinDistance(s, t);
  for( var i = 0; i <= m - n; i++) {
    var sliceStr = t.substr(i, n);
    var lv = levenshteinDistance(s, sliceStr);
    if (lv < ret) ret = lv;
  }
  return ret;
  */
}
