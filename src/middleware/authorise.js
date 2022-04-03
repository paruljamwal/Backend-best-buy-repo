//middleware ---add some role
//roles=["seller","admin"];
//closure
const authorise = (roles) => {
    return (req, res, next) => {
        //role is in array so we have to map it .ad use include.
        console.log(roles);
        const user = req.user;
     //geting user
        let isrole = false;
        //checking role
        roles.map(role => {
            if (user.role.includes(role)) {
                isrole = true;
            }
        });
        //correct role 
        if(isrole){
            return next();
        }
        else{
            return res.status(401).send("You are not authorised to perform this operation");
        }
        
    }
}


module.exports = authorise;