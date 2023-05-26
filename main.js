function getsegitiga(){
    let number = document.getElementById('angka').value;
    let list = document.createElement('li');
    for(let i = 0; i < number.length; i++){
        let triangle = [number[i]];
        for(let j = 0; j <= i; j++){
            triangle.push("0");
        }
        // document.write(triangle);
        let content = document.createTextNode(triangle);
        list.appendChild(content);
        document.getElementById('result').appendChild(list);
        console.log(triangle);
    }
};

function getganjil(){
    let number = document.getElementById('angka').value;
    let list = document.createElement('li');

    let output = [];
    for(let i = 0; i < number;i++){
        if(i % 2 !== 0){
            output.push(i);        
        }
    }
    let content = document.createTextNode(output);
    list.appendChild(content);
    document.getElementById('result').appendChild(list);
}

function getprime(){
    let number = document.getElementById('angka').value;
    let output = [];
    for(let i = 1; i <= number;i++){
        var prime = 0;
        for(let j = 1; j <=i; j++){
            if(i % j == 0){
                prime++;
            }
            if(prime == 2){
                output.push(i);
            }
        }
    }
    console.log(output)
}