h = Math.random();
nC = parseInt(Math.random() * 21);

function F(c, u) {

    return [
        [c * (u[1] + u[7] - 2 * u[0])],
        [c * (u[0] + u[2] + u[4] - 3 * u[1])],
        [c * (u[1] + u[3] - 2 * u[2])],
        [c * (u[2] + u[4]) - 2 * u[3]],
        [c * (u[1] + u[3] + u[5] - 3 * u[4])],
        [c * (u[4] + u[6] - 2 * u[5])],
        [c * (u[5] + u[7] - 2 * u[6])],
        [c * (u[0] + u[6] - 2 * u[7])]
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
var aU = getRandomSubarray(x, 8);


function MetodoHeun(t, u, h, f, F, c) {
    let T = [t];
    let P = [];
    let C = [];
    let CU = u;

    for (y = 0; y < u.length; y++) {
        P.push([u[y]]);
        C.push([u[y]]);
    }
    for (i = 0; i < f; i++) {
        T.push(T[i] + h)
        for (j = 0; j < u.length; j++) {

            var SF = F(c, CU)
            var DT = T[i + 1] - T[i]

            P[j].push(P[j][i] + ((SF[j][0]) * DT))
            let CUP = []
            for (data in P) {
                CUP.push(P[data][i])
            }
            var SFP = F(c, CUP)
            C[j].push(C[j][i] + ((SFP[j][0] + SF[j][0]) / 2) * DT)

        }
    }
    return [P, C, T]
}


function genera_tabla(s, t, div) {
    var d = document.getElementById(div);
    var nodelist = d.getElementsByTagName("Table");
    if (nodelist.length < 1) {

        var s = s
        var t = t

        console.log("s", s)
        console.log("t", t)
            // Obtener la referencia del elemento body

        var body = document.getElementById(div);

        // Crea un elemento <table> y un elemento <tbody>
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // Crea las celdas
        for (var i = 0; i < s.length; i++) {
            // Crea las hileras de la tabla
            var hilera = document.createElement("tr");

            for (var j = 0; j <= t; j++) {
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(s[i][j]);
                celda.appendChild(textoCelda);

                hilera.appendChild(celda);
            }

            // agrega la hilera al final de la tabla (al final del elemento tblbody)
            tblBody.appendChild(hilera);
        }
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        tabla.setAttribute("class", "table table-bordered");
    }
}



function recibe(formId) {
    let a = [];
    var form1Inputs = document.forms[formId].getElementsByTagName("input");
    for (let i = 0; i < form1Inputs.length; i++) {
        if (form1Inputs[i].name == "val") {
            var dat = form1Inputs[i].value;
            a.push(parseInt(dat))
        }
    };


    if (a[0] >= 0 && a[1] >= 1) {
        var w = MetodoHeun(a[0], aU, h, a[1], F, nC);
        let s = w[0]
        let q = w[1]
        let e = w[2]
        genera_tabla(s, a[1], "Lucas")
        genera_tabla(q, a[1], "content2")
    } else {
        console.log(a[0], a[1])
        if ((isNaN(a[0]) && isNaN(a[1])) || (isNaN(a[0]) || isNaN(a[1]))) {
            alert("Ingrese Datos")
        } else {
            alert("Datos Ingresados Erroneos")
            rein()
        }

    }
}



function rein() {
    document.getElementById("Lucas").innerHTML = "";
    document.getElementById("content2").innerHTML = "";

    document.getElementById("info").reset();

}