class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}
        for(let num of nums){
            if(obj[num] === undefined){
                obj[num] = 1
            }else{
                obj[num] = obj[num] + 1
            }
            if(obj[num] > 1){
                return true
            }
        }
        return false
    }
}
