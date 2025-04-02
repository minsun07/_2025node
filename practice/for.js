const letter = ['a', 'b', 'c', 'd'];

// 일반 for문
for(let i=0; i<letter.length; i++){
    console.log(letter[i]);
}

// forEach문 + arrow function
letter.forEach(f => console.log(f));

// for-of문
for(const f of letter){
    console.log(f);
}