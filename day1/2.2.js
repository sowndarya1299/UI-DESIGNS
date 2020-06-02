//2.2 Insert a new key called email and assign a value email1@gmail.com andemail2@gmail.com respectively in both authorDetails object
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
                name:"rajj",
                age:40
            },
    },
    {
        title:"node js",
        price:600,
        readers:[],
         authordetails:{ name:"raj", age:40}
    }
    
    ]
    var insert=library[0].authordetails.email="email1@gmail.com";//1st email id is inserted into authordetails in 0th index of library.
    var insert1=library[1].authordetails.email="email2@gmail.com";//2st email id is inserted into authordetails in 1st index of library.
   console.log(insert)
   console.log(insert1)
   
}
myfun();
    
    
