//2.5 Find the datatype of author age in Nodejs Object.
//finction is created as myfun
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
   console.log(typeof(library[1].authordetails.age));//typeof use to give the data type of author's age in 1st index of library
}
myfun();
    
