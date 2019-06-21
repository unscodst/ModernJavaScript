const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}; // list of users

    return {
        register(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send(message, from, to) {
            if(to) {
                // Single User Message
                to.receive(message, from);
            } else {
                // Mass message
                for(user in users) {
                    if(users[user] !== from) {
                        users[user].receive(message, from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const jooje = new User('Jooje');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jooje);
chatroom.register(sarah);

brad.send('Hello Jooje', jooje);
jooje.send('Hello Everyone');