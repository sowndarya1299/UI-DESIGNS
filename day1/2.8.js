//2.8. Print how many readers for javascript in console.
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
 //the readers object get iterated to generate a count
  for (var count=0;count<library[0].readers.length;count++) {
    count = count + 1;
    }
console.log(count);
  
   
}
myfun();
    
