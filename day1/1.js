//1. Convert specifications given below in image to Javascript Object
//function is created as myfun
function myfun(){
var spectfication={
dimension{
 length:3500,
 width:1600,
 height:1490,
 wheelbase:2360,
   trackwidth{
      front:1405,
      rear:1400
    }
 radius:4.5,
 ground-clearance:170
}
capacity{
 seating-capacity:5,
 tank-capacity:35
}
engine{
 type:"KB-Series",
 cylinder:3,
 valves:12,
 capacity:998,
 strokes:73.0*79.5,
 ratio:10.1,
 max power:67/6.200,
 max torque:90/3500,
 distribution:"multipoint-injection"
}
transmission{
 type:"5-speed MT",
}
chassis{
 steering:"rack & pinion,power assisted",
 shock absorbers:"gas filled",
 tyre:155/80R13,
   barkes{
	front:"ventilated discs",
	rear:"drums",
   }
   suspension{
	front:"Macpherson strut & coll spring",
	rear:"isolated tralling link &coil spring"
  }
}
weight{
 kerb weight:860-880,
 gross vehicle weight:1320
}
}
}
myfun();//function call
