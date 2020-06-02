//2.7. Print the age of Nodejs Author in console.
//function is created as myfun
function myfun(){
var library=[
    {
        title:"javascript",
        price:500,
        readers:[
            {
                name:"person 1",
                count:300
            },
            {
                name:"person 2",
                count:400
            }
            ],
            authordetails:{
                name:"raj",
                age:40
            },
    },
    {
        title:"node js",
        price:600,
        readers:[],
         authordetails:{
                name:"raj",
                age:40
            }
    }
    
    ]
 
   console.log(library[1].authordetails.age);//age of author is printed
   
}
myfun();//funcion is called
    
