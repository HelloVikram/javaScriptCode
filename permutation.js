// function permute(arr, ans, ds, map) {
//     if (ds.length == arr.length) {
//         ans.push([...ds]);
//         return;
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             if (map[i] == 0) {
//                 ds.push(arr[i]);
//                 map[i] = 1;
//                 permute(arr, ans, ds, map);
//                 map[i] = 0;
//                 ds.pop();
//             }
//         }
//     }
// }
function swap(nums,a,b){
    let temp=nums[a];
    nums[a]=nums[b];
    nums[b]=temp;
}
function Permute(ans,ind,nums){
    if(ind>=nums.length){
        ans.push([...nums]);
        return;
    }
    else{
        for(let i=ind;i<nums.length;i++){
            swap(nums,ind,i);
            Permute(ans,ind+1,nums);
            swap(nums,ind,i);
        }
    }
}
let nums = [1, 2, 3];
let ans = [];
// let ds = [];
// let map = [0, 0, 0];
Permute(ans, 0,  nums);
ans.forEach(permutation => {
    console.log(permutation.join(' '));
});