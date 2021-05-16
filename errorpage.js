make hbs page 404 page inside views
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Page</title>
</head>
<body>
    <h1>The page you want does not exist!</h1>
</body>
</html>


index.js add teh following line

app.get('*',(req, res)=>{
    res.render("404");
});
