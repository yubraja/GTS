//check login status
async function userStatus(req, res,next){
if(!req.session.userId){
  res.send('user not authenticated')
  return
}
  next();
  }
  
module.exports= userStatus;


