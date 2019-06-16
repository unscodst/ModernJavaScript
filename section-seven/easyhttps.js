
// Constructor
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Prototype Methods
// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function() {
        // THIS is now in a different scope, so THIS does not contain .http.status -- we declare SELF = THIS to fix this in ES5
        // if(this.http.status === 200) {
        //     console.log(this.http.responseText)
        // }
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else callback('Error: ' + self.http.status)
    }
    this.http.send();
}
// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type','application/json');
    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type','application/json');
    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}
// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, 'Post Deleted');
        } else callback('Error: ' + self.http.status)
    }
    this.http.send();
}