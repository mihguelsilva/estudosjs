const server = [
    require("../server").request(),
    process.env.PWD
];

exports.endpoint = (callback) => {
    var filePath = "." + server[0].url;
    if(filePath == "./") {
        filePath = server[1] + "/pages/index.html"
    } else if (filePath == "./matematica") {
        filePath = server[1] + "/pages/index_m.html"
    };
    callback(filePath);
};