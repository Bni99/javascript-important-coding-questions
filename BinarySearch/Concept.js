//So binary search works on sorted array

//O(log2N) logarithmic base 2 N

const binarySearch = function(arr,target){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arr[mid]===target){return mid}
    if(target>arr[mid]){
        low=mid+1
    }
    else high=mid-1
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5],5))