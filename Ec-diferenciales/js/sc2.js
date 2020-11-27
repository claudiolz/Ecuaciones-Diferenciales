function recibe(formId) {
    let a = [];

    var form1Inputs = document.forms[formId].getElementsByTagName("input");

    for (let i = 0; i < form1Inputs.length; i++) {
        if (form1Inputs[i].name == "val") {
            var dat = form1Inputs[i].value;
            console.log(dat)
            a.push(parseInt(dat))
        }
    }
    console.log(a)



    nTi = 0;
    nTf = parseInt((Math.random() * (8 - 4) + 4));
    h = Math.random();
    nC = parseInt(Math.random() * 21);

    console.log(nTf, "nTf")
    console.log(h, "h")
    console.log(nC, "nC")


    function F(c, u) {
        return [[c * (u[1] + u[5] + u[6] - 3 * u[0])],
            [c * (u[0] + u[2] - 2 * u[1])],
            [c * (u[1] + u[3] - 2 * u[2])],
            [c * (u[2] + u[4]) - 2 * u[3]],
            [c * (u[3] + u[5] - 2 * u[4])],
            [c * (u[0] + u[4] + u[6] - 3 * u[5])],
            [c * (u[0] + u[5] - 2 * u[6])]
        ]
    }


    function getRandomSubarray(arr, size) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
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
    console.log(aU, "aU")

    function MetodoHeun(t, u, h, f, F, c) {
        let T = [t];
        let P = [];
        let C = [];
        let CU = u;

        for (y = 0; y < u.length; y++) {
            P.push([u[y]]);
            C.push([u[y]]);
        }
        for (i = 0; i < 5; i++) {
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

    console.log(MetodoHeun(nTi, aU, h, nTf, F, nC));
}