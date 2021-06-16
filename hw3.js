//2

for( var i = 0; i<11; i++){
    console.log(i);
}


//3-4

while(true){
    console.log(true);
    break;
}

//5-6

for(var i=99; i>0; i--){
    console.log(i + ' bottles of beer on the wall. Take one down, pass it around.');

}

//7-8

var boolz = [true, true, false, true, false, true, true, true];

console.log('this is broken');
for(var i = 0; i< boolz.length; i++){
    if(boolz[i] == true){
        console.log(boolz[i]);
    } 
    }        

// //9-10

var str = 'apples';

for (var i = 0; i< str.length; i++) {
    if(str[i] == 'a' || str[i] == 'e'){
        console.log(str[i]);
    }

}


