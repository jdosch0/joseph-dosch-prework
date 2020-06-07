const nameList = ['a', 'b', 'c'];

for (let i = 0; i < 5; i++){
  const name = prompt('Enter a name');
  nameList.push(name);
}

for (let i = 0; i < nameList.length; i++){
  const name = nameList[i];
  alert(name);
}