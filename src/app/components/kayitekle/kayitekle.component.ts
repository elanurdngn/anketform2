import { FbservisService } from './../../services/fbservis.service';
import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kayitekle',
  templateUrl: './kayitekle.component.html',
  styleUrls: ['./kayitekle.component.css']
})
export class KayitekleComponent implements OnInit {
  secKayit: Kayit = new Kayit();
  kategoriler = [
    'Oyun',
    'Film',
    'Dizi',
    'Yasam',
    'Spor',
    'Diger'
  ];

  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  Kaydet() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.secKayit.uid = user.uid;
    const tarih = new Date();
    this.secKayit.cevap1 = 0;
    this.secKayit.cevap2 = 0;
    this.secKayit.cevap3 = 0;
    this.secKayit.cevap4 = 0;
    this.secKayit.kayTarih = tarih.getTime().toString();
    this.secKayit.duzTarih = tarih.getTime().toString();
    this.fbServis.KayitEkle(this.secKayit).then(d => {
      this.router.navigate(['/']);
    });
  }
}
