const numArray = [1,2,10,5,3,0];
const charArray = ["Samet","Esma","Mia","Ahmet"]
const sortedNumber = numArray.sort((a,b)=>{
    return a-b
});

const sortedChar = charArray.sort();


const objectArray = [
    {num:10, name:"samet"},
    {num:5, name:"esma"},
    {num:12, name:"mia"},
]

const sortedObjectArray = objectArray.sort((a,b)=>{
    const ValA = objectArray[a].num;
    const ValB = objectArray[b].num;

    return ValA - ValB;
});
