//2.3 Insert a new reader in the readers array for Nodejs.
//function is created as myfun..
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
         authordetails:{name:"raj",age:40 }
    }
    
    ]
    var insert=library[1].readers.reader="literature"//new reader is inserted in readers in 1st index of library
    console.log(insert);
}myfun();//function is called
    
