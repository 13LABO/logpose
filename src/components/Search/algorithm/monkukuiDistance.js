import levenshteinDistance from './levenshteinDistance';

export default function monkukuiDistance( s, t ) {
  var n = s.length;
  var m = t.length;
  var ret = levenshteinDistance(s, t);
  for( var i = 0; i <= m - n; i++) {
    var sliceStr = t.substr(i, n);
    var lv = levenshteinDistance(s, sliceStr);
    if (lv < ret) ret = lv;
  }
  return ret;
}
