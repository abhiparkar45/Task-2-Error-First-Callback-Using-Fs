const fs = require('fs');

const renameFile = (oldName, newName, callback) => {
    if(!oldName || !newName) {
        callback({success:false,message:"File name cannot be null !"});
        return;
    }
    if(!fs.existsSync(`./${oldName}`)) {
        callback({success:false,message:"File does not exists"});
        return;
    }
    var regex = /^[a-zA-Z0-9.]+$/;
    if(!regex.test(newName)) {
        callback({success:false,message:"File name cannot contains special characters"});
        return;
    }
    fs.rename(oldName,newName, (error) => {
        if (error) {
            callback({success:false,message:"something went wrong !"})
        }
        callback({success:true,message:"File renamed successfully !"})
    })
}

renameFile('abc','def',(res)=>{
        console.log(res);
});