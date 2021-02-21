var rupiah = document.getElementById('rupiah');
rupiah.addEventListener('keyup', function(e){
  rupiah.value = formatRupiah(this.value, 'Rp. ');
});

/*formatRupiah Function*/
function formatRupiah(angka, prefix){
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah     		= split[0].substr(0, sisa),
  ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

/*add dot if the value from input has been thousand*/
if(ribuan){
  separator = sisa ? '.' : '';
  rupiah += separator + ribuan.join('.');
}

rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}
// This is function for logical operator in button

function calculate()
{
	var qty = document.getElementById("qty0").value;
	var value = document.getElementById("value0").value;
	var n = value * qty / 100;
	var result =  {
    style: "currency",
    currency: "IDR"
  } 
  alert("Biaya yang harus dibayar nasabah " + n.toLocaleString("id-GB", result)); 

}

function calculate0() {
    var Tanggal_gadai = document.getElementById("demo").value;
    var m = Tanggal_gadai.substring(8,10);
    //var m = Tanggal_gadai.getDate();
    console.log(m);
    
    
    if ( m <= 15 ) {
      var qty = document.getElementById("qty1").value;
      var value = document.getElementById("value1").value;
      var n = value * qty / 100;
      var result =  {
        style: "currency",
        currency: "IDR"
      } 
      alert("Biaya yang harus dibayar nasabah " + n.toLocaleString("id-GB", result));
  
    }
}


function calculate1() {
  var Tanggal_gadai = document.getElementById("demo").value;
  var m = Tanggal_gadai.substring(8, 10);
  //var m = Tanggal_gadai.getDate();
  console.log(m);

  if (m >= 16) {
    var qty = document.getElementById("qty2").value;
    var value = document.getElementById("value2").value;
    var n = (value * qty) / 100;
    var result = {
      style: "currency",
      currency: "IDR"
    };
    alert(
      "Biaya yang harus dibayar nasabah " + n.toLocaleString("id-GB", result)
    );
  } 
}





