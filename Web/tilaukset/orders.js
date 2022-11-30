//Tekee GET pyynnön ja hakee tiedot
fetch("https://www.cc.puv.fi/~asa/cgi-bin/fetchOrders.py")
.then(res => {
    return res.json();
})
.then(data =>{
    console.log(data)
    let tableData="";
    data.map((values)=>{
        tableData+= `<tr>
                    <td>${values.customer}</td>
                    <td>${values.customerid}</td>
                    <td>${values.orderid}</td>
                    <td>${values.customer}</td>
                    </tr>`;
    })
        /*const markup = `<li>${customersearch.orderid}</li>`;
        const markup2 = `<li>${customersearch.customerid}</li>`;
        const markup3 = `<li>${customersearch.customer}</li>`;
        

        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup2);
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup3); */
        document.getElementById("table_body").innerHTML=tableData;

    
})
.catch(error => console.log(error)) 