// problem solving fizz buzz, dengan iterasi for
// dengan question jika habis dibagi 3 = fizz, jika habis dibagi 5= buzz, dan jika bisa dibagi 3 & 5 maka hasil nya "fizz buzz"

for (i = 1; i <= 100; i++) {
  // iterasi dengan nilai awal 1 dan paling tinggi 100

  if (i % 3 == 0 && i % 5 == 0) {
    // ini logika menyeleksi fizz buzz
    console.log("Fizz Buzz");
    document.write("fizz buzz,"); // untuk ini jika tidak diperlukan hapus saja, hanya tampilan di html
  } else if (i % 3 == 0) {
    // ini logika menyeleksi fizz
    console.log("Fizz");
    document.write("fizz,");  
  } else if (i % 5 == 0) {
    // ini logika menyeleksi buzz
    console.log("Buzz");
    document.write("buzz,");
  } else {
    console.log(i);
    document.write(i + ",");
  }
}
