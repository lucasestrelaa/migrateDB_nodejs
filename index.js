/** Projeto de API - integração
*
*Neste projeto preciso conectar em dois bancos e transferir dados de um para o outro.
*Alé disso, preciso conferir os dados que serão inseridos no banco 2.
*/

const express = require('express');
const app = express();

const port = 3000;
//const mysql = require("mysql2/promisse");

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'agenci16_garden'
});
const connection2 = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'export'
});

connection.connect(function(err) {
    if (err) return console.log(err);
    console.log('conectou1!');
    getRows(connection);
})
connection2.connect(function(err) {
    if (err) return console.log(err);
    console.log('conectou1!');
    insert(connection);
})
let resultados = [];
let results1 = [];
let count = 0;

function getRows(conn) {

    console.log('1')
    const sql = "select  * from tbl_textos";
    conn.query(sql, function(error, results, fields) {
        if (error) return console.log(error);
        console.log(results.length);
        count = results.length;
        results1 = results;
        results.map((arr) => {
            resultados = arr;
            console.log(resultados.titulo + "resultados1")
        });
        console.log(results.length)
        for (let i = 0; i < results.length; i++) {
            console.log(results[i].id + " :resultados")
        }
        conn.end(); 
    });
}

function insert(conn) {
    console.log("funcao insert: " + results1)
    var sql = "INSERT INTO tbl_textos (id, titulo, descricao, texto, foto, foto_2, foto_3, foto_4," +
        "meta_title, meta_keywords, meta_description, pagina_referencia, tem_video, embed, " +
        "tem_foto, tem_foto_2, tem_foto_3, tem_foto_4, titulo2, titulo3, titulo4, titulo5, " +
        "tem_titulo, tem_titulo_2, tem_titulo_3, tem_titulo_4, tem_titulo_5, texto_1, texto_2," +
        "texto_3, tem_texto, tem_texto_2, tem_texto_3, tem_texto_4, foto_5, foto_6, foto_7, foto_8," +
        "titulo6, titulo7, titulo8, texto_5, texto_6, texto_7, texto_8, tem_texto_5, tem_texto_6, " +
        "tem_texto_7, tem_texto_8, tem_titulo_6, tem_titulo_7, tem_titulo_8, tem_foto_5, tem_foto_6, " +
        "tem_foto_7, tem_foto_8, tem_metas_tag, texto_4, pagina_individual, nome_titulo, nome_titulo2, " +
        "nome_titulo3, nome_titulo4, nome_titulo5, nome_titulo6, nome_titulo7, nome_titulo8, tem_descricao, " +
        "titulo_1_alinhamento, titulo_2_alinhamento, titulo_3_alinhamento, titulo_4_alinhamento, titulo_5_alinhamento, " +
        "titulo_6_alinhamento, titulo_7_alinhamento, titulo_8_alinhamento, tem_botao_1, tem_botao_2, tem_botao_3, " +
        "tem_botao_4, tem_botao_5, tem_botao_6, tem_botao_7, tem_botao_8, nome_botao_1, nome_botao_2, nome_botao_3, " +
        "nome_botao_4, nome_botao_5, nome_botao_6, nome_botao_7, nome_botao_8, link_botao_1, link_botao_2, link_botao_3, " +
        "link_botao_4, link_botao_5, link_botao_6, link_botao_7, link_botao_8, tem_paralax_1, tem_paralax_2, tem_paralax_3," +
        " tem_paralax_4, tem_paralax_5, tem_paralax_6, tem_paralax_7, tem_paralax_8, paralax_1, paralax_2, paralax_3, " +
        "+paralax_4, paralax_5, paralax_6, paralax_7, paralax_8) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?," +
        "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?," +
        "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}



function tabela() {

}

app.get('/', (req, res) => {
    res.send('Hello World!' + JSON.stringify(resultados[72]));
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
