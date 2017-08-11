# timestamp-microservice
An API that returns the natural and UNIX timestamp of the date passed as a URL parameter.
<br>
<br>
The API checks the parameter passed as string to be either natural time or UNIX time stamp.
<br>
If correct timestamp, returns the UNIX timestamp and the natural time of that string.

## Example usage:
localhost:3000/December%2015,%202015 
<br>
localhost:3000/1450137600

## Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }
