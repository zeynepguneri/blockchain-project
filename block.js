const crypto = require("crypto");

class Block{
    constructor(blockNumber, timestamp, prevHash="", data){
        this.blockNumber=blockNumber;
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.data=data;
        this.hash=this.calculateHash();
    }

    calculateHash(){
        const content = 
            this.blockNumber.toString() +
            this.timestamp.toString() +
            JSON.stringify(this.data) +
            this.prevHash;
        return crypto
        .createHash("sha256")
        .update(content)
        .digest("hex");
    }
}

module.exports=Block;
