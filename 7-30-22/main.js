/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/


function cockroachSpeed(s) {
    //Good Luck!
    // 1 km = 100000 cm
    // km in hrs to cm per second
    // 1hr = 3600 seconds
    // rounded down to the integer floored
    
    cmPerSec = (Math.floor((s * 100000)/3600));
    return cmPerSec
    
  }

  // i could've divided by 0.036 instead of writing out both 100000 & 3600