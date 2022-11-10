// Cara Run : Open Terminal : node test-logika.js - klik enter
// NO 1
function deretAngka(n){
    var hasilderetAngka = ''
    for(i=1;i<=n;i++){
      if(i%3 ===0){hasilderetAngka +='Fish'}
      else if(i%5 ===0){hasilderetAngka +='Bash'}
      else if(i%15 ===0){hasilderetAngka +='Fishbash'}
      else{hasilderetAngka += i+''}
    }
    return hasilderetAngka
  }
  console.log(deretAngka(10))
  console.log(deretAngka(20))
  console.log(deretAngka(30))