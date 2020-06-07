const nameList = ['Amanda', 'Bob', 'Candice'];


for (let i = 0; i < 3; i++) {
    const newName = prompt(`Enter student name ${i+1}`);
    nameList.push(newName);
}

for (let i = 0; i < nameList.length; i++) {
    let i=1;
    alert(nameList[i]);
}