# silakanbdkbpn
 Aplikasi Pelayanan Klasikal BDK Balikpapan

 untuk menjalankan di container

terakhir adalah nama bebas

docker build -t bpn/silakanapp .

docker run -d -it -p 9999:80 --rm --name silakanbdkbpn bpn/silakanapp

nb. port bisa diatur sesuka hati (yang 9999)
