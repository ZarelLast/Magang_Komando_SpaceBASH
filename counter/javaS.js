var number = 0;
var tambah = document.getElementById('plus')
var kurang = document.getElementById('minus')
var juduldom = document.getElementById('judul')
var subjuduldom = document.getElementById('subjudul')

tambah.addEventListener('click',function(){
	console.log("NILAI NUMBER SEKARANG : "+ number)
	console.log('Tombol plus diklik')
	number = number + 1;
	subjuduldom.innerHTML = number
})

kurang.addEventListener('click',function(){
	console.log("NILAI NUMBER SEKARANG : "+ number)
	console.log('Tombol plus diklik')
	number = number - 1;
	subjuduldom.innerHTML = number
})

var nama = prompt("Siapa namamu?")
console.log(nama);

var data = juduldom.innerHTML
console.log(data)

juduldom.innerHTML ="Selamat Datang, "+ nama