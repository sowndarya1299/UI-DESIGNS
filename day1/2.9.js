//2.9. Print the count value of Person 2 in console.
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

 console.log(library[0].readers[1].count);//count value of person 2 is generated..
  
   
}
myfun();//function is called
    
