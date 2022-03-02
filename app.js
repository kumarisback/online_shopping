const express =require('express');
const exsession=require('express-session');
const path =require('path');
const authRoutes=require('./routes/auth.routes')
const baseRoutes=require('./routes/base.routes')
const cartRoutes=require('./routes/cart.routes')
const productRoutes=require('./routes/product.routes')
const adminRoutes=require('./routes/admin.routes')
const csrf =require('csurf');
const csrfmiddleWare= require('./middleware/csurf')
const protect= require('./middleware/protact-routes')
const errHandler =require('./middleware/error-handler')
const createSessionConfig= require('./session/sessionConfig');
const checkAuthStatus=require('./middleware/check-auth');
const cartMiddleware= require('./middleware/cartMiddleware')
const app= express();
const sessionConfig=createSessionConfig();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'))
app.use(express.static('product-data/images'));
app.use(express.urlencoded({extended:false}))



app.use(exsession(sessionConfig));
app.use(csrf());
app.use(csrfmiddleWare);
app.use(checkAuthStatus);
app.use(cartMiddleware);
app.use(baseRoutes);
app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.use(protect);
app.use('/admin',adminRoutes);
app.use(errHandler);

const dbconn= require('./data/databaseconn');
const session = require('express-session');
dbconn();
app.listen(3000);