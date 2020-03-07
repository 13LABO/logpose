export default function levenshteinDistance( str1, str2 ) {
    let x = str1.length;
    let y = str2.length;

    let d = [];
    for( let i = 0; i <= x; i++ ) {
        d[i] = [];
        d[i][0] = i;
    }
    for( let i = 0; i <= y; i++ ) {
        d[0][i] = i;
    }

    var cost = 0;
    for( let i = 1; i <= x; i++ ) {
        for( let j = 1; j <= y; j++ ) {
            cost = str1[i - 1] === str2[j - 1] ? 0 : 1;

            d[i][j] = Math.min( d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost );
        }
    }

    // console.log(str1);
    // console.log(str2);
    // console.log(d[x][y]);
    return d[x][y];
}
