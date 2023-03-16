// Parâmetros de servidor
var server = [
    "localhost",  // endereço associado ao serviço
    "3000",  // porta associada ao serviço
    process.env.PWD  // diretório atual
]
require("http").createServer(
    // Registrando erros em nível de servidor
).on("error", (e) => {
    console.error("Error code: ", e.code);
    console.error("Error message: ", e.message)
}).on("request", (req, res) => {

    // exportando requisicao e resposta
    exports.request = () => req;
    exports.response = () => res;

    // Importando módulo endpoints
    var filePath = "";
    delete require.cache[require.resolve(server[2] + "/server/endpoints")];
    require(server[2] + "/server/endpoints").endpoint(res => filePath = res);

    // Mapeando arquivos
    var mapping = String(require("path").extname(filePath)).toLowerCase();

    // Importando módulo de extensões de arquivos
    var ext = "";
    delete require.cache[require.resolve(server[2] + "/server/extensions")];
    require(server[2] + "/server/extensions").extension(res => ext = res);

    // Mapeando tipos de conteúdo e exportando
    var map = ext[mapping] || "application/stream-octet"
    exports.maps = () => map;

    // exportando mapeamento de sistema de arquivos
    exports.fs = () => filePath;

    // Importando módulo de interação final com sistema de arquivos
    delete require.cache[require.resolve(server[2] + "/server/filepath")];
    require(server[2] + "/server/filepath")
}).listen(server[1], server[0], () => {
    console.log(`Servidor ${server[0]} escutando na porta ${server[1]}`);
});