function setAtt(tag, param, el, pEl) {
    if (tag == "value") {
        el.innerHTML = param;
    } else if(tag == "class") {
        param.map(e => {
            el.classList.add(e["class"])          
        });
    } else {
        el.setAttribute(tag, param)
    };
    if (pEl != undefined) {
        creatEl(el, pEl);
    };
};

function checkAtt(param, el, pEl, tag) {

    if (el.tagName == "UL") {
        if (tag == "tablist") {
            let p = param["role"];
            let t = "role"
            setAtt(t, p, el, pEl)

        }
    } else if(el.tagName == "A") {
        if (tag == "tablist") {
            let p = [
                param["data-bs-toggle"],
                param["href"]
            ]
            let t = [
                "data-bs-toggle",
                "href"
            ]
            for (let a = 0; a < p.length; a++) {
                if(p[a] != null) {
                    setAtt(t[a], p[a], el, pEl)
                }
            }
        }
    }

    // Verificar parametros genéricos
    let p = [
        param["name"],
        param["id"],
        param["value"],
        param["class"]
    ]
    let t = [
        "name",
        "id",
        "value",
        "class"
    ]
    for (let a = 0; a < p.length; a++) {
        if(p[a] != null) {
            setAtt(t[a], p[a], el, pEl)
        }
    }
}

function creatEl(el, pEl) {
    pEl.appendChild(el);
}