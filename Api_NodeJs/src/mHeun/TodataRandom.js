/*
const { Router } = require('express');
const router = Router();
*/

nTi = 0;
nTf = parseInt((Math.random() * (8 - 4) + 4));
h = Math.random();
nC = parseInt(Math.random() * 21);

function F(c, u) {
    return [
        [c * (u[1] + u[5] + u[6] - 3 * u[0])],
        [c * (u[0] + u[2] - 2 * u[1])],
        [c * (u[1] + u[3] - 2 * u[2])],
        [c * (u[2] + u[4]) - 2 * u[3]],
        [c * (u[3] + u[5] - 2 * u[4])],
        [c * (u[0] + u[4] + u[6] - 3 * u[5])],
        [c * (u[0] + u[5] - 2 * u[6])]
    ]
}


function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0),
        i = arr.length,
        temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var aU = getRandomSubarray(x, 7);

//function MetodoHeun(t, u, h, f, F, c) {
    //(nTi,aU,h,nTf,F,nC)


    function MetodoHeun() {
    var list = {
        'Prediccion' :[],
        'correccion' :[] 
      };

    var Lp = {
        'Prediccion' :[],
    };
    var Lc = {
        'correccion' :[ ] 
    };
    var u = getRandomSubarray(x, 7);
    let T = [0];
    let P = [];
    let C = [];
    let CU = u;
    let Dt = [];

    for (y = 0; y < u.length; y++) {
        P.push([u[y]]);
        C.push([u[y]]);
    }
    for (i = 0; i < 5; i++) {
        T.push(T[i] + Math.random())
        for (j = 0; j < u.length; j++) {

            var SF = F(parseInt(Math.random() * 21), CU)
            var DT = T[i + 1] - T[i]

            P[j].push(P[j][i] + ((SF[j][0]) * DT))
            let CUP = []
            for (data in P) {
                CUP.push(P[data][i])
            }
            var SFP = F(parseInt(Math.random() * 21), CUP)
            C[j].push(C[j][i] + ((SFP[j][0] + SF[j][0]) / 2) * DT)

        }
    }

    

    var n = 1;
    //Prediccion
    for (var i = 0; i < P.length; i++) {
      var u = "U"+n;
      var d =  []
      for (var j = 1; j < P[i].length; j++) {
          d.push(P[i][j])
      }
      n++
  
      Lp.Prediccion.push({
          "id" : u,
          "u" : P[i][0],
          "data" : d,
        });
  };
  n = 1;
  //correccion 
  for (var i = 0; i < C.length; i++) {
      var u = "U"+n;
      var d =  []
      for (var j = 1; j < C[i].length; j++) {
          d.push(C[i][j])
      }
      n++
  
      Lc.correccion.push({
          "id" : u,
          "u" : C[i][0],
          "data" : d,
        });
  };
    Dt.push(Lp);
    Dt.push(Lc);
    
    return Dt
}

exports.MetodoHeun = MetodoHeun

/*

router.get("/", async(req, res) => {
    res.json(MetodoHeun());

});



module.exports = router;


*/
























