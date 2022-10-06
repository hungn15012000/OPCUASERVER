 data.serveropc.on("newChannel", function(channel) { 
        console.log(channel.endpoint.userIdentityTokens)       
        console.log("Client connected with address = ", channel.remoteAddress, " port = ", channel.remotePort);
        var date = new Date();
        mang3 = [];
        mang3.push(date.toLocaleString());
        mang3.push("Client Connected");
        mang3.push(channel.remoteAddress);
        mang3.push(channel.remotePort);
        mang3.push(data.user_current);
        io.sockets.emit('clientconnect',mang3);
    });
    data.serveropc.on("closeChannel", function(channel) {
        console.log("Client disconnected with address = ", channel.remoteAddress, " port = ", channel.remotePort);
        var date = new Date();
        mang4 = [];
        mang4.push(date.toLocaleString());
        mang4.push("Client Disconnected");
        mang4.push(channel.remoteAddress);
        mang4.push(channel.remotePort);
        mang4.push(data.user_current);
        io.sockets.emit('clientdisconnect',mang4);
        if (global.gc) {
          global.gc();
        }
      });
            console.log(session.channel.endpoint.userIdentityTokens); 
            console.log(session.nonce);
            console.log(session.authenticationToken);
            console.log(session)     

name = "a.txt"
console.log("Chuan bi doc thong tin tu thu muc /tmp");
fs.move(`./certs/trusted/${name}`, `./certs/rejected/${name}`, err => {
    if (err) return console.log(err);
    console.log("success!")
});

namespace.deleteNode(moduleData.uaNodes[43]);      
moduleData.uaNodes.splice(43,1);

app.get(['/', '/opcuamanager'], isLoggedIn, function (req, res) {        
        bienopc.find(function(err,opcs){
            if(err) throw err;
            lichsu.find(function(err,items){
                useropc.find(function(err,users){
                    if(err){
                        res.render('pages/status',{users: [], historys: [], opcs:[]});
                    } else {
                        res.render('pages/status',{users: users, historys: items, opcs: opcs});
                    }
                })
            })
        })       
    })