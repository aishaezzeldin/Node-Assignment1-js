//Assignment1
//-------------------1---------------------
function convertandadd(val)
{
    let res = Number(val);
    res = res + 7;
    return res;
}
// console.log(convertandadd(123));

//-------------------2---------------------

function checkFalsy(val)
{
    return !val?"Invalid":val
}

// console.log(checkFalsy(0));

//-------------------3---------------------

function checkEvenNumbers()
{
    for(let i = 1 ; i<10;i++)
    {
        if(i%2==0)
        {
            continue;
        }
        else 
            console.log(i);
    }

    }

// checkEvenNumbers();


//-------------------4---------------------

function filterEven(arr)
{
let filteredarr =  arr.filter((val)=>val%2==0);
 console.log(filteredarr);
}

// filterEven([1,2,3,4,5,6,7,8,9,10]);

//-------------------5---------------------

function mergeArr(arr1,arr2)
{
    let newarr = [...arr1,...arr2]
    console.log(newarr);
}

// mergeArr([1,2,3,4,5],[9,8,7,6]);


//-------------------6---------------------

function weekDaysSwitch(num)
{
    switch (num) {
        case 1:
            return "Sunday";
            
        case 2:
            return "Monday";
            
        case 3:
            return "Tuesday";
            
        case 4:
            return "Wednesday";
            
        case 5:
            return "Thursday";
            
        case 6:
            return "Friday";
            
        case 7:
            return "Saturday";
                        
    }
}

// console.log(weekDaysSwitch(2));


//-------------------7---------------------


function checkLenghMap(arr)
{
   let newarr =  arr.map((str)=>str.length)

   console.log(newarr);
}

// checkLenghMap(["abyhj","ablo","abc"])


//-------------------8---------------------

function divisibleCheck(num)
{
   return num%5==0 && num%3==0 ?console.log("Divisible by both"):console.log("wrong");
}

// divisibleCheck(5)


//-------------------9---------------------

let square = (num=>num*num)

// console.log(square(4));


//-------------------10---------------------

const person = {name:'Aisha',age:25}

function destuctObject({name,age})
{
    return `${name} is ${age} years old`;
}

// console.log(destuctObject({name:"Aisha",age:23}));
// console.log(destuctObject(person))

//-------------------11---------------------


function sumNums(...numbers)
{
    return numbers.reduce((sum,num)=>sum+num,0);
}
// console.log(sumNums(1,2,3,4,5));

//-------------------12---------------------


function successPromise()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    })
}


// successPromise().then(message => console.log(message));


//-------------------13---------------------


function findLargestNum(arr)
{
 let maxnum =  Math.max(...arr);
 return maxnum;
}
// console.log(findLargestNum([1,5,9,3,6,7]));


//-------------------14---------------------


function objectToArr(object)
{
  return  Object.keys(object);
}

// console.log(objectToArr({name:"Aisha",age:24}));

//-------------------15---------------------


function splitWords(string)
{
   return string.split(" ");
}

// console.log(splitWords("heloo ya hi " ));

// --------------------------------------------------------------------------------------------------------

 