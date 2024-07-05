// Implementing set data type
// using functional programming concepts
// The connection between FP and OOP
function makeSet(xs) {
    return {
        insert: function (i) {
            if (xs.includes(i)) {
                return makeSet(xs)
            } else {
                xs.push(i)
                return makeSet(xs)
            }
        },
        member: i => xs.includes(i),
        size: () => xs.length
    }
}



function useSets() {
    let s1 = makeSet([])
    let s2 = s1.insert(34)
    let s3 = s2.insert(34)
    let s4 = s3.insert(12)
    if (s4.member(42)) {
        print("42 IN SET")
    } else {
        print("42 NOT IN SET")
    }
}