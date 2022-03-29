pragma solidity >=0.4.0 <0.6.0;

contract realestate {
    address contractowner;
    struct realesate {
        string name;
        string location;
        string squremeter;
        address owner;
        string ID;
    }
    mapping (address => realesate) public realesates; //realesates[msg.sender] ={}

    constructor () public{
       contractowner=msg.sender;
    }
    function creatproparty(string memory _name,string memory _location,string memory _squremeter,string memory _ID) public{
        realesates[msg.sender].name=_name;
        realesates[msg.sender].location=_location;
        realesates[msg.sender].squremeter=_squremeter;
        realesates[msg.sender].ID=_ID;
        realesates[msg.sender].owner=msg.sender;
    }
    function transferproparty(address newowner) public{
        realesates[newowner].name=realesates[msg.sender].name;
        realesates[newowner].location=realesates[msg.sender].location;
        realesates[newowner].squremeter=realesates[msg.sender].squremeter;
        realesates[newowner].ID=realesates[msg.sender].ID;
        realesates[newowner].owner= newowner;
        delete realesates[msg.sender];

    }
}

