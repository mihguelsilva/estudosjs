var server = [
    require("../server").request(),  // req, server[0]
    require("../server").response(),  // res, server[1]
    require("../server").fs(),  // arquivos com suas extensões, server[2]
    require("../server").maps()  // extensões de arquivos, server[3]
]

// Interção com sistema de arquivos
require("fs").readFile(server[2], (error, content) => {
    if (error) {
        if (error.code == "ENOENT") {
            require("fs").readFile("./pages/error.html", (error, content) => {
                if(error) throw error;
                server[1].writeHead(404, {"Content-type": "text/html; charset=utf-8"});
                server[1].end(content);
            })
        } else {
            server[1].writeHead(500);
            server[1].end(`Contact your administrator system for error ${error.code}`);
        }
    } else {
        server[1].writeHead(200, { "Content-type": server[3]});
        server[1].write(content, "utf-8");
        server[1].end();
    }
})