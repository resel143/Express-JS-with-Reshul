make new file .hbs for used in different pages

component in react  == partials in express

const partialsPath = path.join(__dirname, '/templates/partials')
const hbs = require("hbs");
hbs.registerPartials(partialsPath);
