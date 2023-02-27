const url = 'data.json';
let count = 0;
let list = document.createElement('ul');
let div = document.createElement('div');
div.style.display= 'flex';
div.style.justifyContent= 'center';
div.style.color= '#fff';
div.style.fontSize= '20px';
div.style.fontWeight= 'bold';

function requestData(){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        if(count == 0){
            displayOnload(data)
        }
        else if(count <= data.length){
            addUserData(data)
        }
       
    })
    .catch(error=>console.log(error))
}


function incrementCount(){
    count++;
    requestData();
}


function displayOnload(data){
    if(count == 0){
        const li= document.createElement('li');
        const para1= document.createElement('p');
        para1.style.borderBottom = '1px solid black';
        para1.style.backgroundColor = '#99ccff'
        para1.style.margin = '0px';
        para1.style.fontSize= '18px';
        para1.style.padding = '3px';
        para1.innerText = "Name:"+ data[0].name;
        const para2 = document.createElement('p');
        para2.style.margin = '0px';
        para2.style.fontSize= '18px';
        para2.style.padding = '3px';
        para2.innerText = "Location:"+data[0].location;
        li.append(para1);
        li.append(para2);
        list.append(li);
        document.body.appendChild(list);
    }
}

function addUserData(data){
    for(let i=1;i<data.length;i++){
        if(count == i ){
            const li= document.createElement('li');
            const para1= document.createElement('p');
            para1.style.borderBottom = '1px solid black';
            para1.style.backgroundColor = '#99ccff';
            para1.style.margin = '0px';
            para1.style.fontSize= '18px';
            para1.style.padding = '3px';
            para1.innerText = "Name:"+ data[i].name;
            const para2 = document.createElement('p');
            para2.style.margin = '0px';
            para2.style.fontSize= '18px';
            para2.style.padding = '3px';
            para2.innerText = "Location:"+data[i].location;
            li.append(para1);
            li.append(para2);
            list.append(li);
            document.body.appendChild(list);
            break;
        }
        if(i == data.length-1){
            const para1= document.createElement('p');
            para1.innerText = "No more people!"
            div.append(para1);
            document.body.appendChild(div);
            break;
            }
        }
        
}