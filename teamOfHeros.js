function check(n,k,arr){
  var left=0;
  var right=n-1;
  while(left!=right && right>=0 && left<n){
      if(arr[left]+arr[right]==k){
          return true;
      }
      if(arr[left]+arr[right]>k){
          right--;
      }
      if(arr[left]+arr[right]<k){
          left++;
      }
  }
  return false;
}
function runProgram(input){
input=input.split("\n")
var a=Number(input[0])
var test=1
for(var t=1;t<=a;t++){
  var len=input[test++].split(" ").map(Number)
  var n=len[0]
  var k=len[1]
  var arr=input[test++].split(" ").map(Number)
  if(check(n,k,arr)){
    console.log("Yes")
    }
    else{
    console.log("No")
    }
}
}
runProgram(`2
5 31
10 11 13 17 21
5 44
10 11 13 17 21`)