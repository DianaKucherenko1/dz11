let num = +prompt('Введите число');

function truthOrLie(){


    for(let i = 2; i < Math.sqrt(num); i++) {
        console.log(i)
        if(num % i === 0) {
            console.log(num % 1)
            return false;
        }
    }

    return true;
}

console.log(truthOrLie());