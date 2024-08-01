let string="";/* this is kept because it would store all the input */
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=> {/* so you got multiple buttons because of the above line, you get a nodelist(a collection of elements). However nodelist doesn't have array methods so you will have to convert it */
    button.addEventListener('click',(e)=>{/* so array.from() converts the nodelist into a regular array */
        if (e.target.innerHTML=='='){
        string=eval(string);
        document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            document.querySelector('input').value='';
            string='';
        }
        else{
        console.log(e.target); 
        string= string+ e.target.innerHTML;
        document.querySelector('input').value=string;
}})
} )
