let num = +prompt("enter a digit");
let first = 100;
let sum = 0;
while (first < 1000){
        if (first % num == 0){
            sum += first;
            console.log(first)
        }
        first++
}
console.log(sum)