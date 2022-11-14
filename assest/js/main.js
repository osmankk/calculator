let minus = document.querySelector('span.short');
let max = document.querySelector('span.max');
let del = document.querySelector('span.remove');
let cal = document.querySelector('div.calculator');
let btn = document.querySelectorAll(".btn");
let display = document.querySelector('.display');
let memory1, memory2, operation = '';
let newDigit = false

function calc(operation, nmber1, number2) {
    result = 0
    switch (operation) {
        case "+":
            result = nmber1 + number2;
            break;
        case "-":
            result = nmber1 - number2;
            break;
        case "/":
            result = nmber1 / number2;
            break;
        default:
            result = nmber1 * number2;


    }
    return result;
}

function check_value(value) {
    switch (value) {
        case "/":
        case "+":
        case "*":
        case "-":
            if (operation != '') {
                memory2 = parseFloat(display.textContent);
                memory1 = display.textContent = calc(operation, memory1, memory2);

            }
            memory1 = parseFloat(display.textContent);
            operation = value;
            newDigit = true
            break;


        case "←":
        case "Delete":
            display.textContent = display.textContent.slice(0, -1);
            break;

        case "C":
            display.textContent = '';
            operation = '';
            memory1 = memory2 = 0;
            break;
        case "=":
        case "Enter":
            if (operation == '') {
                display.textContent = display.textContent
                break;
            } else {
                memory2 = parseFloat(display.textContent);
                display.textContent = calc(operation, memory1, memory2);
                operation = '';
                break;
            }
        case "0":
            if (display.textContent) {
                display.textContent += value;
            }
            break;
        case ".":
            if (!display.textContent.includes(".")) {
                display.textContent += value;
            }
            break;
        case "+/-":
            display.textContent = - display.textContent;
            break;
        default:
            if (isNaN(value)) { break; }
            else if (newDigit) {
                display.textContent = '';
                newDigit = false
            }
            display.textContent += value;



    }
}

btn.forEach((element) => {
    element.addEventListener('click', function (element) {
        let value = element.target.textContent;
        check_value(value);
    });
});

window.addEventListener("keypress", function (element) {
    let value = element.key;
    // display.textContent = value;
    console.log(element);
    check_value(value);



});

minus.onclick = function () {
    cal.style.height = "50px";
    cal.style.overflow = "hidden";

};

max.onclick = function () {
    cal.style.height = "auto";
    cal.style.overflow = "hidden";
};

del.onclick = function () {
    cal.style.display = 'none'

};



window.addEventListener("keypress", function (element) {
    let value = element.key;
    // display.textContent = value;
    console.log(element );
    check_value(value);
   
    
        
    });




minus.onclick = function(){
    cal.style.height = "50px";
    cal.style.overflow = "hidden";

};
max.onclick = function(){
    cal.style.height = "auto";
    cal.style.overflow = "hidden";
};
del.onclick = function(){
    cal.style.display = 'none'

};


 // if (operation != '') {
            //     memory2 = parseFloat(display.textContent);
            //     // console.log(memory1,memory2);
            //     switch (operation) {
            //         case "+":
            //             memory1 = memory1 + memory2;
            //             break;
            //         case "-":
            //             memory1 = memory1 - memory2;
            //             break;
            //         case "/":
            //             memory1 = memory1 / memory2;
            //             break;
            //         default:
            //             memory1 = memory1 * memory2;
            //             break;
                    
            //     } 
            //     operation = value;
            //     display.innerHTML = ''; 
            // }else{
            //     memory1 = parseFloat(display.textContent);
            //     operation = value;
            //      display.innerHTML = '';
            // }
            

// let string = '345*/%12';
// console.log(string.split(/[-_]+*/));

// const str = 'a-b_c-d234';

// const split1 = str.split(/[-_]+/);
// console.log(split1);



//     one.innerHTML = one.innerHTML + e.target.innerHTML;
//     console.log(one.innerHTML)

// max.onclick = function(){
//     console.log(this);
// };

// let display = document.getElementById("display");

// display.onclick = function () {
//     let newP = display.cloneNode(true);
//     newP.className = "clone";
//     document.body.appendChild(newP);
//   };

  
//     display.onclick = function(){
//         let cloned = display.cloneNode(true);
//         cloned.className = 'clone';
//         document.body.appendChild(cloned);
//     };

//   document.addEventListener("click", function (e) {
//     if(e.target.getAttribute("class") === "clone"){
//         console.log("Iam Cloned");}
//   });

// document.addEventListener("click", function (e) {
//     if(e.target.getAttribute("class") === "clone");
//     console.log("Iam Cloned");
//     // if (e.target.getAttribute("class") === "clone") {
//     //   console.log("Iam Cloned");
//     // }
//   });
  
// display.onclick = one;
// display.onclick =two ;
// function one() {
//     console.log('one');
// };
// function two() {
//     console.log('two');
// };
// display.addEventListener('click',function () {
//     console.log('print from addEvent')
// });
// display.addEventListener('click',one);
// display.addEventListener('click',two);
// document.onclick = function (e) {
    // display.onclick = function(){
    //     let cloned = display.cloneNode(true);
    //     cloned.classList.add('cloned');
    //     document.body.appendChild(cloned);
    // };

//     one.innerHTML = one.innerHTML + e.target.innerHTML;
//     console.log(one.innerHTML)
// }

// one.remove();
// console.log(one.classList);
// console.log(one.classList.contains('osman'));
// console.log(one.classList.contains('show'));
// console.log(one.classList.item('3'));
// console.log(one.classList.toggle('meme'));
// console.log(one.classList);
// let myDiv = document.createElement('div');
// let myH   = document.createElement('h1');
// let myP   = document.createElement('p');

// let headerText = document.createTextNode('hello from CEO OSMAN');
// let paraText = document.createTextNode('osman solve the tps problem ..congratulations ');
// myH.appendChild(headerText);
// myP.appendChild(paraText);
// myDiv.setAttribute('class','osman');
// myDiv.appendChild(myH);
// myDiv.appendChild(myP);
// document.body.appendChild(myDiv);
// document.onclick = function (e) {
//     e.preventDefault();
// }



// let myDiv = document.createElement('div');
// let myCom = document.createComment('this is comment ');
// let myAtt = document.createAttribute('data-scr');
// let myText = document.createTextNode('hello from osman')
// myDiv.className = 'product';
// myDiv.setAttributeNode(myAtt);
// myDiv.setAttribute('data-test','osman');
// myDiv.appendChild(myCom);
// myDiv.appendChild(myText);
// document.body.appendChild(myDiv);


// let elementByID = document.getElementById('osman'); // one element
// let elementByClass = document.getElementsByClassName('osman'); // array
// let elementByTag = document.getElementsByTagName('div');     // array
// let elementByselector = document.querySelector('osman');  // first element
// let elementAllselector= document.querySelectorAll('span'); // array
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.link[0].href);
// document.images[0].src='/assest/images';
// document.images[0].alt = 'alternative';
// document.images[0].className = 'alternative';
// document.images[0].id = 'alternative';
// let att = document.getElementsByClassName('osman')[0];
// if (att.hasAttribute('data-scr')) {
//     if (att.getAttribute('data-scr')= '') {
//         att.removeAttribute('data-scr')
//     }else{
//         att.setAttribute('data-scr','osman')

//     }
// }else{
//     console.log('not found')

// }



