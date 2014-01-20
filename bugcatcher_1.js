/* Some helper functions for logging in and out, 
   as well as printing out data about the current user. 
   Should output:

/* Expected output:
   Object {email: "john@doe.com", username: "John Doe", friends: [0,1,2,3]}
   0, 1, 2, 3,
   Not logged in */

var currentUser = null;

var login = function(email){
  currentUser = email;
}

var logout = function(){
  currentUser = null;
  console.log("Not logged in");
}

var getLoggedInUser = function(){
  getUserDetails (currentUser, function(result){
    console.log(result);
    //print out friends list
    var output = '';
    for( var id in result.friends){
        output += id + ', ';
    };
        console.log(output);
  })
}


login('john@doe.com');
getLoggedInUser();
logout();
getLoggedInUser();



/*********************************/
/** DO NOT EDIT BELOW THIS LINE **/
/*********************************/

/**
 * MOCK - get user details
 * @param  {string} email
 * @return {void}
 */
function getUserDetails(email, callback){
  if(email){
    callback({
      email: email,
      username: 'John Doe',
      friends: [0,1,2,3]
    });
  } else {
    callback(null);
  }
}