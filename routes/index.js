var express = require('express');
var router = express.Router();
var UsersModel = require('../schema/User_table');
var C = require('../schema/c');
var obj = require('../schema/obj');
var java = require('../schema/java');
var php = require('../schema/php');
var vb = require('../schema/vb');
var angular = require('../schema/angular');
var android = require('../schema/android');
var html = require('../schema/html');
var node = require('../schema/node');
var css = require('../schema/css');
var jquery = require('../schema/jquery');
var bootstrap = require('../schema/bootstrap');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' );
});

router.get('/clanguage', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  } 
     
    res.render('clanguage', { email: req.flash('alertmessage') });
});

router.get('/java', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  } 
       
  res.render('java', { email: req.flash('alertmessage') });
});

router.get('/vb', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  } 
    res.render('vb', { email: req.flash('alertmessage') });
});

router.get('/php', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  } 
    res.render('php', { email: req.flash('alertmessage') });
});

router.get('/angular', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  } 
    res.render('angular', { email: req.flash('alertmessage') });
});

router.get('/android', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  } 
    res.render('android', { email: req.flash('alertmessage') });
});

router.get('/html', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  } 
    res.render('html', { email: req.flash('alertmessage') });
});



router.get('/node', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  }  
  res.render('node', { email: req.flash('alertmessage')  });
});

router.get('/register',function(req,res){
res.render('Register',{ email: req.flash('alertmessage') });
});

router.get('/login',function(req,res){
  res.render('login',{ email: req.flash('alertmessage') });
  });

  router.post('/signup', function (req, res, next) {
    console.log("hardik");
    console.log(req.body);
    var email = req.body.User_email; 
  
    console.log(req.body);
    UsersModel.findOne({ "User_email": email }, function (err, db_Users_array) {
  
      console.log("Find One " + db_Users_array);
      if (db_Users_array) {
        req.flash('alertmessage', 'email already exists');
         res.redirect('/register');
      
      }
      else{
        const mybodydata = {
          User_name:req.body.User_name,
          User_email: req.body.User_email,
          User_password: req.body.User_password,
        }
        var data = UsersModel(mybodydata);
      
        data.save(function (err) {
          if (err) {
            console.log("Error in Insert Record" + err);
          } else {
            res.redirect('/login');
          }
        })
      
      }
    });
    //Create an Array 
    
  });
  router.post('/loginprosee', function(req, res, next) {
  
    var var1 = req.body.User_email;
    var var2 =req.body.User_password;
    console.log("I am Variable "+ var1);
    req.session.mysession = var1;
    res.cookie("Email" , var2 , {maxAge : 600000});
    
    console.log("I am Session " + req.session.mysession);
   
    
    var email = req.body.User_email;
    var password = req.body.User_password;
  
    console.log(req.body);
    UsersModel.findOne({ "User_email": email }, function (err, db_users_array) {
  
      console.log("Find One " + db_users_array);
  
      if (db_users_array) {
        var db_email = db_users_array.User_email;
        var db_password = db_users_array.User_password;
  
      }
  
      console.log("db_users_array.user_email " + db_email);
      console.log("db_users_array.user_password " + db_password);
  
      if (db_email == null) {
        console.log("If");
        req.flash('alertmessage', 'Email or Password are not found. please register');
        res.redirect('/login');
      }
      else if (db_email == email && db_password == password) {
        req.session.userid=db_users_array._id;
        req.session.email = db_email;
        console.log("hardik"+req.session.userid);
        res.redirect('/');
      }
      else {
        console.log("Credentials wrong");
        req.flash('alertmessage', 'your Email id and password do not match. please try again');
         res.redirect('/login');
   
      }
  
   
    });
  });


  router.get('/forgot_password', function(req, res, next) {
    res.render('forgotpassword', { email: req.flash('alertmessage') });
  });
   
  router.post('/forgot_password', function(req, res, next) {
    var email = req.body.User_email; 
  
    console.log(req.body);
    UsersModel.findOne({ "User_email": email }, function (err, db_Users_array) {
  
      console.log("Find One " + db_Users_array);
  
      if (db_Users_array) {
        var db_email = db_Users_array.User_email;
        var db_password = db_Users_array.User_password;
  
      }
  
      console.log("db_Users_array.User_email " + db_email);
      console.log("db_Users_array.User_password " + db_password);
  
      if (db_email == null) {
        console.log("If");
        req.flash('alertmessage', 'Please enter a valid email address.');
        res.redirect('/forgot_password');
       
      }
      else if (db_email == email) {
        "use strict";
        // setup email data with unicode symbols
    const nodemailer = require('nodemailer');
      
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: "crazy2engineers@gmail.com", // generated ethereal user
              pass: "Crazy2@engineers" // generated ethereal password
          }
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Programming Quiz" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: "Forgot Password", // Subject line
        text: "Hello your password is "  + db_password, // plain text body
        html: "Hello your password is "  + db_password // html body
      };
    
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.redirect('/login');
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
    });
    
      }
      else {
        console.log("Credentials wrong");
        res.end("Login invalid");
      }
  
   
    });
  });

  router.get('/User_display', function(req, res, next) {
    
  UsersModel.find(function(err,data){
    
      if(err){
        console.log("Error In  Fetch Data " + err)
      }
      else{
        console.log(data);
        
        res.render('table',{  user_array : data});
      
      }
  
    });
  });

//***************************CONTACT US*****************************************//

router.post('/contact', function(req, res, next) {
  var a = req.body.FullName;
  var b = req.body.email;
  var c = req.body.subject;
  var d = req.body.message;
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: "crazy2engineers@gmail.com", // generated ethereal user
          pass: "Crazy2@engineers" // generated ethereal password
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Programming Quiz" <programmingquiz@gmail.com>', // sender address
      to:'hp529351@gmail.com', // list of receivers
      subject:c, // Subject line
      text:d, // plain text body
      html: '<h4>FullName</h4>'+a+'</br>'+'Email id:'+b+'</br>'+'Subject:'+c+'</br>'+
      'Message:'+d// html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});
res.redirect("/");
});

//*************************** End CONTACT US*****************************************//





  router.post('/cprosee', function (req, res, next) {
    console.log("hardik");
    console.log(req.body);
    var id = req.session.userid; 
  
    console.log(req.body);
    C.findOne({ "user_id": id }, function (err, db_Users_array) {
  
      console.log("Find One " + db_Users_array);
      if (db_Users_array) {
    
        req.flash('alertmessage', ' already save');
         res.redirect('/clanguage');
      }
      else{
        const mybodydata = {
          user_id:req.session.userid,
          User_marks: req.body.User_marks,
          Course: "C",
          
      
        }
        var data = C(mybodydata);
      
        data.save(function (err) {
          if (err) {
            console.log("Error in Insert Record" + err);
          } else {
            res.redirect('/cresult');
          }
        })
      
      }
    });
    //Create an Array 
    
  });
  

  router.post('/objprosee', function (req, res, next) {
    console.log("hardik");
    console.log(req.body);
    var id = req.session.userid; 
  
    console.log(req.body);
    obj.findOne({ "user_id": id }, function (err, db_Users_array) {
  
      console.log("Find One " + db_Users_array);
      if (db_Users_array) {
    
        req.flash('alertmessage', ' already save');
         res.redirect('/c');
      }
      else{
        const mybodydata = {
          user_id:req.session.userid,
          User_marks: req.body.User_marks,
          Course: "obj",
          
      
        }
        var data = obj(mybodydata);
      
        data.save(function (err) {
          if (err) {
            console.log("Error in Insert Record" + err);
          } else {
            res.redirect('/objresult');
          }
        })
      
      }
    });
    //Create an Array 
    
  });


//*********************************java**************************//

router.post('/javaprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  java.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/java');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "JAVA",
        
    
      }
      var data = java(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/javaresult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/javaresult', function(req, res, next) {
  
  java.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    java.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('javaresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End java *************************************//

//*********************************php**************************//

router.post('/phpprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  php.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/php');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "PHP",
        
    
      }
      var data = php(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/phpresult');
        }
      })
    
    }
  });
  
});

router.get('/phpresult', function(req, res, next) {
  
  php.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    php.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('phpresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End php *************************************//

//*********************************vb.net**************************//

router.post('/vbprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  vb.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/vb');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "VB.NET",
        
    
      }
      var data = vb(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/vbresult');
        }
      })
    
    }
  });
  
});

router.get('/vbresult', function(req, res, next) {
  
  vb.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    vb.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('vbresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End vb.net *************************************//


//*********************************ANGULAR**************************//

router.post('/angularprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  angular.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/angular');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "ANGULAR",
        
    
      }
      var data = angular(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/angularresult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/angularresult', function(req, res, next) {
  
  angular.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    angular.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('angularresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End ANGULAR *************************************//

//*********************************ANDROID**************************//

router.post('/androidprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  android.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/android');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "ANDROID",
        
    
      }
      var data = android(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/androidresult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/androidresult', function(req, res, next) {
  
  android.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    android.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('androidresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End ANGULAR *************************************//


//*********************************HTML**************************//

router.post('/htmlprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  html.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/html');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "HTML",
        
    
      }
      var data = html(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/htmlresult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/htmlresult', function(req, res, next) {
  
  html.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    html.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('htmlresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End HTML *************************************//



//*********************************NODE**************************//

router.post('/nodeprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  node.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/node');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "NODE",
        
    
      }
      var data = node(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/noderesult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/noderesult', function(req, res, next) {
  
  node.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    node.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('noderesult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End NODE *************************************//

//*********************************JQUERY**************************//

router.post('/jqueryprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  jquery.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/jquery');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "JQUERY",
        
    
      }
      var data = jquery(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/jqueryresult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/jqueryresult', function(req, res, next) {
  
  jquery.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    jquery.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('jqueryresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End jquery *************************************//


//*********************************bootstrap**************************//

router.post('/bootstrapprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  bootstrap.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/bootstrap');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "bootstrap",
        
    
      }
      var data = bootstrap(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/bootstrapresult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/bootstrapresult', function(req, res, next) {
  
  bootstrap.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    bootstrap.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('bootstrapresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End jquery *************************************//

//*********************************bootstrap**************************//

router.post('/cssprosee', function (req, res, next) {
  console.log("hardik");
  console.log(req.body);
  var id = req.session.userid; 

  console.log(req.body);
  css.findOne({ "user_id": id }, function (err, db_Users_array) {

    console.log("Find One " + db_Users_array);
    if (db_Users_array) {
  
      req.flash('alertmessage', ' already save');
       res.redirect('/css');
    }
    else{
      const mybodydata = {
        user_id:req.session.userid,
        User_marks: req.body.User_marks,
        Course: "css",
        
    
      }
      var data = css(mybodydata);
    
      data.save(function (err) {
        if (err) {
          console.log("Error in Insert Record" + err);
        } else {
          res.redirect('/cssresult');
        }
      })
    
    }
  });
  //Create an Array 
  
});

router.get('/cssresult', function(req, res, next) {
  
  css.find(function(err,data){
    if(err)
    res.json({message: 'There are no posts here.'});
    console.log(data);
    css.find({})
    .populate('user_id')
    .exec(function(err, data) {
    console.log("full question deatils --------------------",data);
    if(err){
    console.log("Error In  Fetch Data " + err)
  }
  else{
      console.log("***************************************************************",data);
      res.render('cssresult',{  user_array : data});
    }
  });  
    }).sort( { User_marks: -1 } );
  
  });
  
//******************End css *************************************//

  router.get('/cresult', function(req, res, next) {
  
    C.find(function(err,data){
      if(err)
      res.json({message: 'There are no posts here.'});
      console.log(data);
      C.find({})
      .populate('user_id')
      .exec(function(err, data) {
      console.log("full question deatils --------------------",data);
      if(err){
      console.log("Error In  Fetch Data " + err)
    }
    else{
        console.log("***************************************************************",data);
        res.render('cresult',{  user_array : data});
      }
    });  
      }).sort( { User_marks: -1 } );
    
    });
    router.get('/objresult', function(req, res, next) {
  
      obj.find(function(err,data){
        if(err)
        res.json({message: 'There are no posts here.'});
        console.log(data);
        obj.find({})
        .populate('user_id')
        .exec(function(err, data) {
        console.log("full question deatils --------------------",data);
        if(err){
        console.log("Error In  Fetch Data " + err)
      }
      else{
          console.log("***************************************************************",data);
          res.render('objresult',{user_array : data});
        }
      });  
        }).sort( { User_marks: -1 } );
      
      });
  router.get('/logout', function(req, res, next) {
    req.session.destroy();
    
    res.redirect('/');
  });


  // test code Flash//
  router.get('/test', function(req, res, next) {
    req.flash('alertmessage', 'You are successfully using req-flash');
 
 
    res.render('test');
});
router.get('/home', function(req, res, next) {
  res.send(req.flash());
});


// End Test//

router.get('/about',function(req,res){
  UsersModel.find(function(err,data){
    if(err){
      console.log("Error is Single Recode Fetch "+err);
    }
    else{
      console.log(data);
      res.render('about',{user_array: data});
    }
  });
  
});




router.get('/contact', function(req, res, next) {
    res.render('contact');
});
router.get('/obj', function(req, res, next) {
  var mysession = req.session.email;
  if(!mysession){
    res.redirect('/login');
  }  
  res.render('obj');
});



module.exports = router;
