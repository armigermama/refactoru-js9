/**
This bit of code is meant to help set the sizing of the friends list dynamically. 
This should print out:
	FriendWidth = 280
**/


var currentUID = 0;

var getFriendCount = function(uid){
  return 30;
};

var getPaginationPreferences = function(uid){
  var userDetails = {uid: uid, preferences: {pagination: 6}};
  return userDetails.preferences.pagination;
};

var paginationCount = getPaginationPreferences(currentUID);
var friendCount = getFriendCount(currentUID);
var numPages = Math.floor(friendCount / paginationCount);

var width = 960;
var friendSpacing = 20;
var friendWidth = width / paginationCount * 2 - friendSpacing * 2;

console.log("FriendWidth = " + friendWidth);
