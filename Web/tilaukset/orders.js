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
                    <td>${values.respsalesperson}</td>
                    <td>${values.customerid}</td>
                    <td>${values.orderid}</td>
                    <td>${values.totalprice}€</td>
                    <td>${values.comment}</td>
                    <td>${"Delivery address: "+ values.delivaddr  + "<pre>"+ "Invoice Address: " + values.invaddr + "</pre>"}</td>
                    <td>${values.deliverydate}</td>
                    </tr>`;
    })
        document.getElementById("table_body").innerHTML=tableData;

    
})
.catch(error => console.log(error)) 

function searchFunction(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable")
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++)
    {
        td = tr[i].getElementsByTagName("td")[0];
        if (td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}