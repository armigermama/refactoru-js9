var sendMessage = function(myUserId, targetUserId, message, allUsers){
  if(myUserId = null || targetUserId == null || message = null){
    return false;
  }
  for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].uid = targetUserId){
      console.log(myUserId + " is sending '" + message + "' to " + allUsers[i].uid);
    }
  }
}

var myUser1 = { uid: 0 };
var myUser2 = { uid: 1 };
var myUser3 = { uid: 2 };
var allUsers = [myUser1, myUser2, myUser3];

sendMessage(myUser1.uid, myUser2.uId, "Hey there!", allUsers);
sendMessage(myUser1.uid, myUser3.uId, "What"s up?", allUsers);
sendMessage(myUser3.uld, myUser1.uId, "Nothing is up.", allUsers);