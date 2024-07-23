<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>odev_cozum_php</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class=container>
        <?php
            for ($i = 1; $i <= 40; $i++) {
                if ($i == 1 || $i == 21) {
                    echo '  <div class="ilk">';   
                }
                if ($i == 1 || $i == 21) {
                    echo '      <div class="ust1">';
                    echo '          <div class="sira">';
                    echo '              <div class=siraic>sıra</div>';
                    echo '          </div>';
                    echo '          <div class="sirayan">';
                    echo '              <div class="vergidairesi">vergi dairesine esas belgenin</div>';
                    echo '              <div class="vergialt">';
                    echo '                  <div class="tarih">tarihi</div>';
                    echo '                  <div class="no">no</div>';
                    echo '                  <div class="kimden">kimden aldığı</div>';
                    echo '                  <div class="turu">türü</div>';
                    echo '                  <div class="tutar">tutarı</div>';
                    echo '              </div>';
                    echo '          </div>';
                    echo '      </div>';
                }
                echo '      <div class="siralama">';
                echo '          <div class="sira1 siralamak">'.$i.'</div>';
                echo '          <input type="date" class="tarihinput">';
                echo '          <input class="noinput">';
                echo '          <input class="kimdeninput">';
                echo '          <select class="select1" id="_'.$i.'">';
                echo '              <option value="saglik">sağlık</option>';
                echo '              <option value="gida">gıda</option>';
                echo '              <option value="giyim">giyim</option>';
                echo '              <option value="egitim">eğitim</option>';
                echo '              <option value="kira">kira</option>';
                echo '          </select>';
                if ($i <= 20) {
                    echo '          <input class="tutarinput tutarinput1">';
                }
                if ($i > 20) {
                    echo '          <input class="tutarinput tutarinput2">';
                }
                echo '      </div>';
                if ($i == 20) {
                    echo '      <div class=toplam1>';
                    echo '          <div class=toplam1_1>toplam</div>';
                    echo '          <div class=toplam1_2>0</div>';
                    echo '      </div>';
                }
                if ($i == 40) {
                    echo '      <div class=toplam1>';
                    echo '          <div class="toplam2_1">toplam</div>';
                    echo '          <div class="toplam2_2">0</div>';
                    echo '      </div>';
                }
                if ($i == 20 || $i == 40) {
                    echo '  </div>';
                }
            }
        ?> 
    </div>
    <hr />
    <div class=adet_tutar>
        <div class=adet>adet</div>
        <div class=tutar_2>tutar</div>
    </div>
    <div class=genel>
        <div class=bas>genel toplam</div>
        <div class="_0 genel_toplam_adet">0</div>
        <div class="_0 genel_toplam_tutar">0</div>
    </div>
    <div class=saglik_1>
        <div class=bas>sağlık</div>
        <div class="_0 saglik_toplam_adet">0</div>
        <div class="_0 saglik_toplam_tutar">0</div>
    </div>
    <div class=giyim_1>
        <div class=bas>giyim</div>
        <div class="_0 giyim_toplam_adet">0</div>
        <div class="_0 giyim_toplam_tutar">0</div>
    </div>
    <div class=kira_1>
        <div class=bas>kira</div>
        <div class="_0 kira_toplam_adet">0</div>
        <div class="_0 kira_toplam_tutar">0</div>
    </div>
    <div class=gida_1>
        <div class=bas>gıda</div>
        <div class="_0 gida_toplam_adet">0</div>
        <div class="_0 gida_toplam_tutar">0</div>
    </div>
    <div class=egitim_1>
        <div class=bas>eğitim</div>
        <div class="_0 egitim_toplam_adet">0</div>
        <div class="_0 egitim_toplam_tutar">0</div>
    </div>
    <script src="script.js"></script>
</body>
</html>

