const express =require('express');
const fs = require('fs');
const app = express();
const port = 8080;
const http = require('http');
const htmlContent = `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>

body {
    display: block;
    background-color:dimgrey;
    
}


button {
    display: block;
    padding: 10px 15px; 
    margin-bottom: 10px;
    margin-left: 12.5px;
    border-radius: 10px;
    background-color: blue;
    
}


    p {
        margin-bottom: 10px;
    }

    #removeButton {
        padding: 10px 15px;
        background-color: #dc3545;
        color: #fff;
        border: none;
        cursor: pointer;}

    #ndengu {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #chapo {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #ugali {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #mukimo {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #rice {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #pilau {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #beans {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #fish {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #chuma {
        padding: 10px 15px;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #clear {
        padding: 10px 15px;
        background-color: #dc3545;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #viewTotal {
        padding: 10px 15px;
        background-color: green;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #chapoDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }
    

    #ugaliDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #mukimoDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #riceDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #pilauDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #ndenguDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #beansDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #fishDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #chumaDisplay {
        text-align: right;
        font-size: 18px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        
    }

    #label {
        text-decoration: underline;
        font-size: 30px;

    }
   #firstHeader {
    text-decoration: underline;
    text-align: right;
    font-size: 30px;  
   }

   #chapatiLabelIncrease {
    font-size: 20px; 
   }

   #chapatiIncrease {
    padding: 5px 15px;
    background-color: white;
    margin-top: 3px;
   }

   #chapatiDecrease {
    padding: 5px 15px;
    background-color: white;
    margin-top: 3px;
   }

</style>
</head>
<body>
    <button id="chapo">Chapo</button>
    <button id="ugali">Ugali</button>
    <button id="mukimo">Mukimo</button>
    <button id="rice">Rice</button>
    <button id="pilau">Pilau</button>
    <button id="ndengu">Ndengu</button>
    <button id="beans">Beans</button>
    <button id="fish">Fish</button>
    <button id="chuma">Chuma</button>
    <button id="chapoNdengu">Chapo+Ndengu</button>
    <button id="registerUsers">Register Users</button>
   
<script src="backend.js"></script>
<script>
{
    
        let counters = {
                            chapati: 0,
                            ugali: 0,
                            mukimo: 0,
                            rice: 0,
                            pilau: 0,
                            ndengu: 0,
                            beans: 0,
                            fish: 0,
                            chuma: 0,
                            chapoNdengu: 0,
                    };

// Initialize counters from local storage on page load
Object.keys(counters).forEach(item => {
    const storedValue = localStorage.getItem(item);
    if (storedValue !== null) {
        counters[item] = parseInt(storedValue, 10);
    }
});
    
    
document.getElementById('chapo').addEventListener('click', function() {

            var searchName = prompt("What name do you want to search for");
            fetch('/sendSearchName', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ value: searchName})
            })
            .then(response => {
                if (response.ok) {
                console.log('Value sent to server successfully');
                } else {
                console.error('Error sending value to server');
                }
            })
            .catch(error => {
                console.error('Error sending value to server:', error);
            });



                            var quantity = prompt(`Enter the quantity of chapati:`);
                            var quantityNumber = Number(quantity);

                            if (quantityNumber) {
                                counters.chapati += quantityNumber;
                                localStorage.setItem("chapati", counters.chapati);

                                            fetch('/sendChapatiValue', {
                                            method: 'POST',
                                            headers: {
                                            'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({ value: quantityNumber })
                                            })
                                            .then(response => {
                                            if (response.ok) {
                                            console.log('Value sent to server successfully');
                                            } else {
                                            console.error('Error sending value to server');
                                            }
                                            })
                                            .catch(error => {
                                            console.error('Error sending value to server:', error);
                                            });       


                            } else if (Number.isNaN(quantityNumber)) {
                                alert("Quantity should be a number");
                                return;
                            } else {
                                alert(`Invalid order. Quantity is required for chapati`);
                                return;
                            }

                    
                                                                // Send a request to the server when the chapo button is clicked
                                                                fetch('/chapoClick', { method: 'POST' })
                                                                .then(response => {
                                                                if (response.ok) {
                                                                console.log('Chapo button click sent to server successfully');
                                                                } else {
                                                                console.error('Error sending button click to server');
                                                                }
                                                                })
                                                                .catch(error => {
                                                                console.error('Error sending button click to server:', error);
                                                                });            
                                                                });




{
    document.getElementById('ugali').addEventListener('click', function() {
      // Send a request to the server when the chapo button is clicked
      fetch('/ugaliClick', { method: 'POST' })
        .then(response => {
          if (response.ok) {
            console.log('Button click sent to server successfully');
          } else {
            console.error('Error sending button click to server');
          }
        })
        .catch(error => {
          console.error('Error sending button click to server:', error);
        });
    });

}

  

document.getElementById('chapoNdengu').addEventListener('click', function() {


    var quantity = prompt(`Enter the quantity of chapatis needed:`);
    var quantityNumber = Number(quantity);

                        if (quantityNumber) {
                        counters.chapoNdengu += quantityNumber;
                        localStorage.setItem("chapatiNdengu", counters.chapoNdengu);
                        
                        fetch('/sendChapoNdenguValue', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ value: quantityNumber })
                        })
                        .then(response => {
                        if (response.ok) {
                        console.log('Value sent to server successfully');
                        } else {
                        console.error('Error sending value to server');
                        }
                        })
                        .catch(error => {
                        console.error('Error sending value to server:', error);
                        });       
                        } else if (Number.isNaN(quantityNumber)) {
                            alert("Quantity should be a number");
                        } else {
                            alert(`Invalid order. Quantity is required for chapati`);
                        }


                                    fetch('/chapoNdenguClick', { method: 'POST' })
                                    .then(response => {
                                    if (response.ok) {
                                    console.log('ChapoNdengu button click sent to server successfully');
                                    } else {
                                    console.error('Error sending button click to server');
                                    }
                                    })
                                    .catch(error => {
                                    console.error('Error sending button click to server:', error);
                                    });            
                        });

}

document.getElementById('registerUsers').addEventListener('click', function() {

            fetch('/registerUsersClick', { method: 'POST' })
            .then(response => {
            if (response.ok) {
            console.log('Register users button click sent to server successfully');
            } else {
            console.error('Error sending button click to server');
            }
            })
            .catch(error => {
            console.error('Error sending button click to server:', error);
            });            
});


</script>

</body>
</html>
`;


const server = http.createServer((req, res) => {
  // Serve HTML file for GET requests to '/'
  if (req.url === '/' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }

let globalPhoneNumber;

// Function to search for a specific value given by the user
function searchForValue(searchKey, searchValue) {
    return new Promise((resolve, reject) => {
        fs.readFile('users.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                reject(err); // Reject the promise if there's an error
                return;
            }

            try {
                // Parse the JSON data
                const jsonData = JSON.parse(data);
                // Find the item with the matching search key and value
                const foundItem = jsonData.find(item => item[searchKey] === searchValue);
                if (foundItem) {
                    console.log('Item found:');
                    console.log('First Name:', foundItem.firstName);
                    console.log('Phone Number:', foundItem.phoneNumber);
                    globalPhoneNumber = foundItem.phoneNumber; // Assign globalPhoneNumber value
                    resolve(globalPhoneNumber); // Resolve the promise with globalPhoneNumber
                } else {
                    console.log('Item not found');
                    resolve(null); // Resolve the promise with null if item not found
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
                reject(error); // Reject the promise if there's an error while parsing JSON
            }
        });
    });
}


fs.readFile('users.json', 'utf8', (err, data) => {

let searchName;

    app.post('/sendSearchName', (req, res) => {
            let body = '';  
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const stringValue = body; 
                
                try {
                    const parsedBody = JSON.parse(stringValue);
                    searchName = parsedBody.value.toString();
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            });
        
        res.send('Button click received by server');
    });
// FETCH REQUEST FOR SEARCH NAME ALREADY HANDLED
// SEARCH NAME IS A GLOBAL SCOPE VARIABLE




import('node-fetch')
    .then(({ default: fetch }) => {
        // Prices
        const counterPrice = {
            Chapati: 20,
            Ugali: 40,
            Mukimo: 70,
            Rice: 50,
            Pilau: 80,
            Ndengu: 50,
            Beans: 60,
            Fish: 200,
            Chuma: 10,
        };

        // Serve the HTML file
        app.get('/', (req, res) => {
            res.sendFile('chafua.html', { root: __dirname });
        });

        // Handle chapoClick button click
        app.post('/chapoClick', (req, res) => {
            console.log('Chapo button clicked');
            res.send('Button click received by server');
        });

        // Handle ugaliClick button click
        app.post('/ugaliClick', (req, res) => {
            console.log('Ugali button clicked');
            res.send('Button click received by server');
        });

        // Handle sending chapati value from webpage
        app.post('/sendChapatiValue', (req, res) => {

            let searchValue = searchName;            
            const searchKey = 'firstName';          
            searchForValue(searchKey, searchValue)

            .then(phoneNumber => {          // Access phoneNumber outside the function           

            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const parsedBody = JSON.parse(body);
                const chapoValue = parseFloat(parsedBody.value);
                console.log('Chapati value received from webpage:', chapoValue);
                res.send('Value received by server');
                const amount = chapoValue * counterPrice.Chapati;
                console.log('Amount:', amount);

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer iGKIxu0CP8oifxT9u3UgOF9owTII'
                };

                fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        "BusinessShortCode": 174379,
                        "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMjA2MjMxMjAy",
                        "Timestamp": "20240206231202",
                        "TransactionType": "CustomerPayBillOnline",
                        "Amount": amount,
                        "PartyA": globalPhoneNumber,
                        "PartyB": 174379,
                        "PhoneNumber": globalPhoneNumber,
                        "CallBackURL": "https://mydomain.com/path",
                        "AccountReference": "CompanyXLTD",
                        "TransactionDesc": "Payment of X"
                    })
                })
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log(error));
            });
        })
        .catch(error => {
            console.error('Error:', error); // Handle errors
        });
    
        });

        // Handle sending chapoNdengu value from webpage
        app.post('/sendChapoNdenguValue', (req, res) => {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const parsedBody = JSON.parse(body);
                const chapoNdenguValue = parseFloat(parsedBody.value);
                console.log('Chapo Ndengu value received from webpage:', chapoNdenguValue);
                res.send('Value received by server');
                const amount = (chapoNdenguValue * counterPrice.Chapati) + counterPrice.Ndengu;
                console.log('Amount to be paid:', amount);

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer mI3rY6CnMIp0HKo1vax8AlGWzq4G'
                };

                fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        "BusinessShortCode": 174379,
                        "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMjA2MjMxMjAy",
                        "Timestamp": "20240206231202",
                        "TransactionType": "CustomerPayBillOnline",
                        "Amount": amount,
                        "PartyA": 254742975950,
                        "PartyB": 174379,
                        "PhoneNumber": 254742975950,
                        "CallBackURL": "https://mydomain.com/path",
                        "AccountReference": "Chafua",
                        "TransactionDesc": "Payment of X"
                    })
                })
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log(error));
            });
        });

  }
  });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    })
    .catch(error => {
        console.error('Error importing node-fetch:', error);
    });
});
