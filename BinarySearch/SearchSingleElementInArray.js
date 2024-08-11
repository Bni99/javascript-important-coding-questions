// // Example 1:
// Input Format:
// arr[] = {1,1,2,2,3,3,4,5,5,6,6}
// Result:
// 4
// Explanation:
// Only the number 4 appears once in the array.

// Example 2:
// Input Format:
// arr[] = {1,1,3,5,5}
// Result:
// 3
// Explanation:
// Only the number 3 appears once in the array.

//O(N)
const bruteSearchSingleElementInArray = function(arr){
    for(let i=0;i<arr.length;i++){
        if(i===0){
            if(arr[i]!==arr[i+1]){
                return arr[i]
            }
        }
        else if(i===arr.length-1){
            if(arr[i]!==arr[i-1]){
                return arr[i]
            }
        }
        else{
            if(arr[i]!== arr[i+1]&&arr[i]!==arr[i-1]){
                return arr[i]
            }
        }
    }

}

console.log(bruteSearchSingleElementInArray([1,2,2,3,3,4,4,5,5,6,6]))

//2 properties of XOR---> SAME NUMBERS XOR IS ZERO AND 0 XOR ANY NUMBER IS THAT NUMBER
//O(N)
const bruteTwoSearchSingleElementInArray = function(arr){
    let ans = 0;
    for(let i=0;i<arr.length;i++){
        ans = ans^arr[i]
    }
    return ans
}
console.log(bruteTwoSearchSingleElementInArray([1,2,2,3,3,4,4,5,5,6,6]))

//O(LOG2N)

const optimalSearchSingleElementInArray = function(arr){
    if(arr.length===1)return arr[0]
    if(arr[0]!==arr[1])return arr[0]
    if(arr[arr.length-1]!==arr[arr.length-2])return arr[arr.length-1]
    const low = 1;
    const high = arr.length-2;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]!==arr[mid-1] &&arr[mid]!==arr[mid+1])
            return arr[mid]
        if(mid%2!==0&&arr[mid]===arr[mid-1]){
           low=mid+1
        }
        else if(mid%2!==0 && arr[mid]===arr[mid+1]){
            high=mid-1
        }
        else if(mid%2===0 && arr[mid]===arr[mid-1]){
            high=mid-1
        }
        else if(mid%2===0 && arr[mid]===arr[mid+1]){
            low=mid+1
        }
    }
}
console.log(optimalSearchSingleElementInArray([1,2,2,3,3,4,4,5,5,6,6]))