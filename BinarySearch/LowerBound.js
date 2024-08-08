//we have to find the smallest index such that arr[i]>=x

//O(log2N)
const LowerBound = function(arr,target){
    let low=0;
    let high=arr.length-1;
    let ans=arr.length;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]>=target){
            ans=mid;
            high=mid-1
        }
        else{
            low=mid+1
        }
    }
return ans
}
console.log(LowerBound([1,2,3,3,7,8,9,9,9,11],11))


//we have to find the smallest index such that arr[i]>x
//O(log2N)
const upperBound = function(arr,target){
let low=0;
let high=arr.length-1
let ans=arr.length;
while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arr[mid]>target){
        ans=mid;
        high=mid-1;
    }
    else{
        low=mid+1
    }
}
return ans
}

console.log(upperBound([1,2,3,3,7,8,9,9,9,11],8))