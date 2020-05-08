module.exports.command = function() {
    this.pause(1000,()=>{ 
        console.log("callback from custom command") 
    })
}