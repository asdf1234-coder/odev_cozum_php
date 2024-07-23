let tutardeger = []
let tutardeger2 = []
let egitim_toplam_tutar = 0
let saglik_toplam_tutar = 0
let gida_toplam_tutar = 0
let giyim_toplam_tutar = 0
let kira_toplam_tutar = 0
let egitim_toplam_adet = 0
let saglik_toplam_adet = 0
let gida_toplam_adet = 0
let giyim_toplam_adet = 0
let kira_toplam_adet = 0
let toplam = 0
let toplam1 = 0
let toplam2 = 0
let genel_toplam_adetjs1 = 0
let genel_toplam_adetjs2 = 0
let genel_toplam_toplam = 0
let sayac = 1
let toplam1_2 = document.querySelector('.toplam1_2')
let toplam2_2 = document.querySelector('.toplam2_2')
let genel_toplam_adet_js = document.querySelector('.genel_toplam_adet')
let genel_toplam_tutar_js = document.querySelector('.genel_toplam_tutar')
let egitim_toplam_adet_js = document.querySelector('.egitim_toplam_adet')
let egitim_toplam_tutar_js = document.querySelector('.egitim_toplam_tutar')
let saglik_toplam_adet_js = document.querySelector('.saglik_toplam_adet')
let saglik_toplam_tutar_js = document.querySelector('.saglik_toplam_tutar')
let kira_toplam_adet_js = document.querySelector('.kira_toplam_adet')
let kira_toplam_tutar_js = document.querySelector('.kira_toplam_tutar')
let gida_toplam_adet_js = document.querySelector('.gida_toplam_adet')
let gida_toplam_tutar_js = document.querySelector('.gida_toplam_tutar')
let giyim_toplam_adet_js = document.querySelector('.giyim_toplam_adet')
let giyim_toplam_tutar_js = document.querySelector('.giyim_toplam_tutar')

tutars = document.querySelectorAll('.tutarinput')
tutars.forEach(tutar => {
  tutar.addEventListener('input', islem)
})
selects = document.querySelectorAll('.select1')
selects.forEach(select => {
  select.addEventListener('input', islem)
})

function islem() {
  tutarsfonk = document.querySelectorAll('.tutarinput1')
  tutarsfonk.forEach(tutarlar => {
    if (tutarlar.value === '') {
        tutarlar.value = 0;
    }
    if (tutarlar.value !== '0') {
      genel_toplam_adetjs1 += 1
    }
    tutardeger.push(tutarlar.value)
  })
  tutardeger.forEach(i => {
    toplam1 += parseInt(i)
  })
  toplam1_2.innerHTML = toplam1;
  console.log(toplam1)

  
  tutarsfonk = document.querySelectorAll('.tutarinput2')
  tutarsfonk.forEach(tutarlar => {
    if (tutarlar.value === '') {
        tutarlar.value = 0;
    }
    if (tutarlar.value !== '0') {
      genel_toplam_adetjs2 += 1
    }
    tutardeger2.push(tutarlar.value)
  })
  tutardeger2.forEach(i => {
    toplam2 += parseInt(i)
  })
  toplam = toplam1 + toplam2
  genel_toplam_tutar_js.innerHTML = toplam;
  toplam2_2.innerHTML = toplam2;
  console.log(toplam2)
  tutardeger2 = []
  toplam2 = 0
  tutardeger = []
  toplam1 = 0

  tutarsfonk = document.querySelectorAll('.tutarinput')
  tutarsfonk.forEach(tutarlar => {
    console.log(sayac)
    let select_22 = document.querySelector(`#_${sayac}`)
    if (select_22 === null) {
        console.log(`Element with id _${sayac} not found`);
    }
    if (select_22.value === 'egitim' && tutarlar.value !== '0') {
      egitim_toplam_tutar += parseInt(tutarlar.value)
      egitim_toplam_adet += 1
    }else if (select_22.value === 'saglik' && tutarlar.value !== '0') {
      saglik_toplam_tutar += parseInt(tutarlar.value)
      saglik_toplam_adet += 1
    }else if (select_22.value === 'kira' && tutarlar.value !== '0') {
      kira_toplam_tutar += parseInt(tutarlar.value)
      kira_toplam_adet += 1
    }else if (select_22.value === 'giyim' && tutarlar.value !== '0') {
      giyim_toplam_tutar += parseInt(tutarlar.value)
      giyim_toplam_adet += 1
    }else if (select_22.value === 'gida' && tutarlar.value !== '0') {
      gida_toplam_tutar += parseInt(tutarlar.value)
      gida_toplam_adet += 1
    }
    sayac+=1
  })
  
  sayac = 1
  genel_toplam_toplam = genel_toplam_adetjs1 + genel_toplam_adetjs2
  genel_toplam_adet_js.innerHTML = genel_toplam_toplam;
  egitim_toplam_tutar_js.innerHTML = egitim_toplam_tutar;
  egitim_toplam_adet_js.innerHTML = egitim_toplam_adet;
  saglik_toplam_tutar_js.innerHTML = saglik_toplam_tutar;
  saglik_toplam_adet_js.innerHTML = saglik_toplam_adet;
  kira_toplam_tutar_js.innerHTML = kira_toplam_tutar;
  kira_toplam_adet_js.innerHTML = kira_toplam_adet;
  giyim_toplam_tutar_js.innerHTML = giyim_toplam_tutar;
  giyim_toplam_adet_js.innerHTML = giyim_toplam_adet;
  gida_toplam_tutar_js.innerHTML = gida_toplam_tutar;
  gida_toplam_adet_js.innerHTML = gida_toplam_adet;

  
  genel_toplam_toplam = 0
  genel_toplam_adetjs1 = 0
  genel_toplam_adetjs2 = 0
  egitim_toplam_tutar = 0
  saglik_toplam_tutar = 0
  gida_toplam_tutar = 0
  giyim_toplam_tutar = 0
  kira_toplam_tutar = 0
  egitim_toplam_adet = 0
  saglik_toplam_adet = 0
  gida_toplam_adet = 0
  giyim_toplam_adet = 0
  kira_toplam_adet = 0
}

