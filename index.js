// Your code here
function mapToNegativize(bp) {
    let negs = []
    for(let i = 0; i < bp.length; i++){
        negs.push(-1 * bp[i])
    }
    return negs
};
function mapToNoChange(sk) {
    let norms = []
    for(let i = 0; i < sk.length; i++){
        norms.push(sk[i])
    }
    return norms
};
function mapToDouble(bts) {
    let doubles = []
    for(let i = 0; i < bts.length; i++){
        doubles.push(2 * bts[i])
    }
    return doubles
};
function mapToSquare(lthm) {
    let triples = []
    for(let i = 0; i < lthm.length; i++){
        triples.push(lthm[i] * lthm[i])
    }
    return triples
};
function reduceToTotal(bwl, start=0) {
    let all = start
    for(let i = 0; i< bwl.length; i++){
        all = all + bwl[i]
    }
    return all
}
function reduceToAllTrue(mp) {
    for(let i = 0; i< mp.length; i++){
        if (!mp[i]) return false
    }
    return true
}
function reduceToAnyTrue(mp) {
    for(let i = 0; i< mp.length; i++){
        if (mp[i]) return true 
    }
    return false
}