//2.1 Update the count of Person 2 inside readers Array in Javascript
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
         authordetails:{ name:"raj",age:40}
    }
    
    ]
    var update=library[0].readers[1].count=600;//the count of person2 is updated
    console.log(update);
}
myfun();//function is called
