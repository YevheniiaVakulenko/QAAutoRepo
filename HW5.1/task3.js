function multip_table_for(num) {
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

function multip_table_while(num) {
    let i = 1;
    while(i <= 10){
        console.log(`${num} * ${i} = ${num * i}`);
        i++;
    }
}

multip_table_for(17);
console.log('------------')
multip_table_while(9);