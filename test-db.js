const mysql = require("mysql");
const conn = mysql.createConnection({host: "mysql-au.mysql.database.azure.com", user: "au@mysql-au", password: "Ye7S5GuBzL3KL6S", database: "mysql", port: 3306 });
conn.connect(function(err){
        if(err) throw err;
        console.log("HURRA");
        
        conn.query("SHOW DATABASES", function(err, result){
                if(err) throw err;
                console.log(result);
        });
});

/*conn.end(function(err){
        if(err) throw err;
        console.log("Goodbye");
});*/