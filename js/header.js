fetch("./files/header.json", () => {
})
.then(data => data.json())
.then(json => {
    let hMain = document.querySelector("#id-header-main");
    json["header"].map(a => {
        if (a["attr"] != undefined) {
            let header = [];
            header.push(document.createElement("header"));
            header.map(b => {
                for (let k = 0; k < a["el"].length; k++) {
                    let el = a["p"][k]["p"];
                    let nEl = [];
                    nEl.push(document.createElement(el))
                    nEl.map(c => {

                        if (a["el"][k][el]["p"] != undefined) {
                            for(let l = 0; l < a["el"][k][el]["el"].length; l++) {
                                let elC = a["el"][k][el]["p"][l]["p"]
                                let nEl = [];
                                nEl.push(document.createElement(elC));
                                nEl.map(e => {
                                    let nElAttr = a["el"][k][el]["el"][l][elC]["attr"]
                                    let pElCC = a["el"][k][el]["el"][l][elC]["p"][0]["p"];
                                    let nEl = [];
                                    nEl.push(document.createElement(pElCC));
                                    nEl.map(f => {
                                        let nElAttr = a["el"][k][el]["el"][l][elC]["el"][0][pElCC]["attr"];
                                        checkAtt(nElAttr, f, e, "tablist")
                                    })
                                    checkAtt(nElAttr, e, c)
                                })
                            }
                        }
                        checkAtt(a["el"][k][el]["attr"], c, b, "tablist")
                    })
                }
                checkAtt(a["attr"], b, hMain)
            })
        }
    })
})
.catch(e => console.log(e))