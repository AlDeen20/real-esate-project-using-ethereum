async function loadWeb3() {
    console.log("loaded 1");
                if (window.ethereum) {
                    window.web3 = new Web3(window.ethereum);
                    window.ethereum.enable();
                }
            }
            
   async function loadContract() {
                return await new window.web3.eth.Contract( [
					{
						"inputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"constant": false,
						"inputs": [
							{
								"internalType": "string",
								"name": "_name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "_location",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "_squremeter",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ID",
								"type": "string"
							}
						],
						"name": "creatproparty",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [
							{
								"internalType": "address",
								"name": "",
								"type": "address"
							}
						],
						"name": "realesates",
						"outputs": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "location",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "squremeter",
								"type": "string"
							},
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "ID",
								"type": "string"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"internalType": "address",
								"name": "newowner",
								"type": "address"
							}
						],
						"name": "transferproparty",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					}
				]
, '0x6fD9AbD42F109049CB341C32566B1A42A83aB0E6');
            }  


            async function getCurrentAccount() {
                const accounts = await window.web3.eth.getAccounts();
                return accounts[0];
            }

            async function load() {
                await loadWeb3();
                window.contract = await loadContract();
                
                const account = await getCurrentAccount();
                getAprt(account);
                //document.getElementById('input1').value=message;
               
            } 
            async function getAprt(account){
             const message = await window.contract.methods.realesates(account).call({ from: account });
             console.log(message);
            document.getElementById('info').innerHTML=message.name;  
            document.getElementById('location').innerHTML=message.location;             
            document.getElementById('square').innerHTML=message.squremeter;             
            document.getElementById('ID').innerHTML=message.ID;             
            }
 
    async function save() {
    const account = await getCurrentAccount();
    var name =document.getElementById('name').value;
    var location =document.getElementById('location').value;
    var squremeter =document.getElementById('squremeter').value;
    var ID =document.getElementById('ID').value;
    const message = await window.contract.methods.creatproparty(name,location,squremeter,ID).send({ from: account });
    alert("Done");
    window.location.replace("/");
    }
    
    async function transfer() {
    const account = await getCurrentAccount();
    var address =document.getElementById('input1').value;
    const message = await window.contract.methods.transferproparty(address).send({ from: account });
    alert("Done");
    window.location.replace("/");
    }    
    

load();      