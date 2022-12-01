async function getpincode() {
  var pinCode = document.querySelector("#pinCode").value;

  let data = await fetch(`https://api.postalpincode.in/pincode/${pinCode}`);
  let result = await data.json();
  console.log(result);
  console.log(result[0].PostOffice[0].Country);
  console.log(result[0].PostOffice.length);

  var pincode = document.querySelector("#pincode");

  try {
    pincode.innerHTML = `<div class="card text-center h-100" style="width: 20rem;">
    <div class="card-header">
        <h1 class="text-center" id="title">${result[0].PostOffice[0].Pincode}</h1>
    </div>            
        <div class="card-body">
             <img src="./post.png" class="card-img-top" alt="no">
        <div class="card-text">
       
        <p><span id="sp" >Name : </span><span id="sp1">${result[0].PostOffice[0].Name}</span></p>        
        <p><span id="sp" >Country : </span><span id="sp1">${result[0].PostOffice[0].Country}</span></p>
        <p><span id="sp">State: </span><span id="sp1">${result[0].PostOffice[0].State}</span></p>
        <p><span id="sp">District: </span><span id="sp1">${result[0].PostOffice[0].District}</span></p>
        <p><span id="sp">Branch type: </span><span id="sp1">${result[0].PostOffice[0].BranchType}</span></p>
        <p><span id="sp">Region: </span><span id="sp1">${result[0].PostOffice[0].Region}</span></p>
        <p><span id="sp">Division: </span><span id="sp1">${result[0].PostOffice[0].Division}</span></p>             
                
        </div>            
        </div>
    </div>`;
  } catch (err) {
    pincode.innerHTML = `<div class="card text-center h-100" style="width: 20rem;">
    <div class="card-header">
        <h1 class="text-center" id="title">Error Code: ${result[0].Status}</h1>
    </div>            
        <div class="card-body">
             <img src="./error.png" class="card-img-top" alt="no">
        <div class="card-text">
       
                <p><span id="sp" >Message: </span><span id="sp1">${result[0].Message}</span></p>
        </div>            
        </div>
    </div>`;
  }
}
