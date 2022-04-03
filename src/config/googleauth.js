const GoogleStrategy = require('passport-google-oauth20').Strategy;
 require("dotenv").config();
 const { v4: uuidv4 } = require('uuid');
 const passport=require("passport");
const userModel = require('../model/usermodel');
passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
   
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2222/auth/google/callback"
  },
 
 async function(accessToken, refreshToken, profile, cb) {
     // console.log(profile._json.email);
      //randon & unique string uuid
     // console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
     // console.log(accessToken, refreshToken, profile)
   let user=await userModel.findOne({email: profile?._json?.email}).lean().exec();
  //store data
   if(!user){
       user=await userModel.create({
           email:profile._json.email,
           password: uuidv4(),
           role:["customer"]
       })
   }  
   
   console.log(user);
   return cb(null, user);
  //  });
  }
));

module.exports=passport;