
var theNumber = 1;
 
var michelangelo = function(value){
    var value = theNumber;
    value = (value * 2);
    return value;
};
 
var donatello = function(value, anotherValue){
    var value = theNumber;
    var anotherValue = value*anotherValue;
   // value = anotherValue + value;
    return anotherValue;
};
 
var leonardo = function(value){
    //var value = theNumber;
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);

};
 
var raphael = function(value, anotherValue, yetAnotherValue){
    //value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
};


/*console.log(michelangelo(theNumber));
console.log(donatello(theNumber, 2));
console.log(leonardo(theNumber));
console.log(raphael(3,2,theNumber));*/

//console.log(michelangelo(theNumber));
//console.log(leonardo(theNumber));
//var theNumber = theNumber * 2;
//console.log(donatello(theNumber, 2));
//console.log(raphael(3,2,theNumber));

var add= michelangelo(theNumber) + leonardo(theNumber);
var theNumber = theNumber * 2;
var subtract = donatello(theNumber, 2) - raphael(3, 2, theNumber);




var splinter = function(a, b){
    var z = a*b;
    var myArray = [add, subtract, z];
        return myArray;
}
console.log(splinter(1,2))















 