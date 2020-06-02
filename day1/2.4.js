//2.4 Create a New Object in the library for a new Book called SQL.
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
 
   library[2]={book:"sql"};//new object is created as book
   console.log(library);
}
myfun();
