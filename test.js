function balancedSum(arr) {
    // Write your code here
    let q1 = 0;
    let q2 = 0;
    let pivot = 0;
    for (let i = 0; i < arr.length; i++) {
        q2 += arr[i];
    }

    for (let j = 0; j < arr.length; j++) {
        if (q2 - arr[j] === q1) {
            pivot = j;
            break;
        } else {
            q1 += arr[j];
            q2 -= arr[j];
        }
        if (q2 <= 0) {
            break;
        }
        console.log(q1, q2, arr[j]);

    }
    console.log("pivot: ", pivot);
}

console.log(balancedSum([1, 2, 3, 4, 6]));
