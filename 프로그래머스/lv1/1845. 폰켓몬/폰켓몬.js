function solution(nums) {
    let answer = 0;
    const set = new Set(nums)
    
    if (nums.length/2 !== set.size) {
        nums.length/2 > set.size ? answer = set.size : answer=nums.length/2
    } else {answer = nums.length/2}
    return answer;
}