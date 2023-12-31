import { Component, inject } from '@angular/core';
import { Table } from 'primeng/table';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appService: any = inject(AppService);
  title = 'primeNGtest';
  tableData: any = [
    {
      "firstName": "Malfurion",
      "lastName": "Stormrage",
      "email": "Malfurion@Stormrage.com",
      "birthDate": 278691200000,
      "street": "Moonglade 10",
      "zipCode": 54321,
      "city": "Darnassus",
      "id": "4AENg4oAl1kxf6ZRSgAx",
      "registrationDate": 1694815200000,
      "messagecounter": 0
    },
    {
      "firstName": "Rokhan",
      "lastName": "Darkspear",
      "email": "Rokhan@Darkspear.com",
      "birthDate": 1220188800000,
      "street": "Sen'jin Village 8",
      "zipCode": 23456,
      "city": "Durotar",
      "id": "DCli22p31fjGZd24J1nT",
      "registrationDate": 1693845600000,
      "messagecounter": 2
    },
    {
      "firstName": "Mal'ganis",
      "lastName": "Dreadlord",
      "email": "Mal'ganis@Dreadlord.com",
      "birthDate": 1569897600000,
      "street": "Necropolis 6",
      "zipCode": 67890,
      "city": "Stratholme",
      "id": "Dn9XTfApk2IYMocueZXo",
      "registrationDate": 1695212000000,
      "messagecounter": 1
    },
    {
      "firstName": "Varian",
      "lastName": "Wrynn",
      "email": "Varian@Wrynn.com",
      "birthDate": 1569897600000,
      "street": "Stormwind Keep 5",
      "zipCode": 11111,
      "city": "Stormwind",
      "id": "GXzdM5b9JdvhplxtlyxL",
      "registrationDate": 1685863200000,
      "messagecounter": 4
    },
    {
      "firstName": "Jaina",
      "lastName": "Proudmoore",
      "email": "Jaina@Proudmoore.com",
      "birthDate": 738885600000,
      "street": "Theramore Isle 3",
      "zipCode": "22222",
      "city": "Dustwallow Marsh",
      "id": "I1w6fFNXJCybT8CTcAfP",
      "registrationDate": 1699178949126,
      "messagecounter": 2
    },
    {
      "firstName": "Vol'jin",
      "lastName": "DarkSpear",
      "email": "Vol'jin@DarkSpear.com",
      "birthDate": 511036000000,
      "street": "Sen'jin Village 3",
      "zipCode": 56789,
      "city": "Durotar",
      "id": "IKvU6vt5MFEmKemvtmmm",
      "registrationDate": 1683458400000,
      "messagecounter": 5
    },
    {
      "firstName": "Gazlowe",
      "lastName": "Gearslipper",
      "email": "Gazlowe@Gearslipper.com",
      "birthDate": 1126070400000,
      "street": "Ratchet 6",
      "zipCode": 34567,
      "city": "The Barrens",
      "id": "L9d6Mjf2Xu0xxyes70pk",
      "registrationDate": 1694522400000,
      "messagecounter": 2
    },
    {
      "firstName": "Thrall",
      "lastName": "Windfury",
      "email": "Thrall@Windfury.com",
      "birthDate": 1126070400000,
      "street": "Shaman Avenue 2",
      "zipCode": 56789,
      "city": "Orgrimmar",
      "id": "NwMsXy5veU5g2V7SQSf1",
      "registrationDate": 1686060000000,
      "messagecounter": 7
    },
    {
      "firstName": "Mayla",
      "lastName": "Highmountain",
      "email": "Mayla@Highmountain.com",
      "birthDate": 1220188800000,
      "street": "Highmountain Peak 5",
      "zipCode": 23456,
      "city": "Thunder Totem",
      "id": "cm0Afbzh64QKxftVvXtV",
      "registrationDate": 1684754400000,
      "messagecounter": 3
    },
    {
      "firstName": "Velen",
      "lastName": "Shadowbreaker",
      "email": "Velen@Shadowbreaker.com",
      "birthDate": 773452800000,
      "street": "Temple of Light 8",
      "zipCode": 34567,
      "city": "Exodar",
      "id": "g0BB2UYci9WqZOHV8ox3",
      "registrationDate": 1684298400000,
      "messagecounter": 2
    },
    {
      "firstName": "Saurfang",
      "lastName": "Warsong",
      "email": "Saurfang@Warsong.com",
      "birthDate": 1137792000000,
      "street": "Warsong Hold 8",
      "zipCode": 65432,
      "city": "Nagrand",
      "id": "hTHoSEBArSCEDvKety8U",
      "registrationDate": 1686760800000,
      "messagecounter": 1
    },
    {
      "firstName": "Grom",
      "lastName": "Hellscream",
      "email": "Grom@Hellscream.com",
      "birthDate": 1570147200000,
      "street": "Warchief Avenue 5",
      "zipCode": 67890,
      "city": "Orgrimmar",
      "id": "l96BktUo3NRzRb3mg6hN",
      "registrationDate": 1692746400000,
      "messagecounter": 8
    },
    {
      "firstName": "Talanji",
      "lastName": "Zandalari",
      "email": "Talanji@Zandalari.com",
      "birthDate": 1220188800000,
      "street": "Dazar'alor 2",
      "zipCode": 23456,
      "city": "Zuldazar",
      "id": "nGfOoSMPfzj0au8lJeSW",
      "registrationDate": 1683602400000,
      "messagecounter": 1
    },
    {
      "firstName": "Sylvanas",
      "lastName": "Windrunner",
      "email": "Sylvanas@Windrunner.com",
      "birthDate": 878684400000,
      "street": "Undercity 7",
      "zipCode": "54321",
      "city": "Tirisfal Glades",
      "id": "q6CmibfmYkgMGCfZOKVV",
      "registrationDate": 1699178764460,
      "messagecounter": 2
    },
    {
      "firstName": "Tyrande",
      "lastName": "Whisperwind",
      "email": "Tyrande@Whisperwind.com",
      "birthDate": 1220188800000,
      "street": "Moon Temple 7",
      "zipCode": 23456,
      "city": "Darnassus",
      "id": "qBJjyFXEN9wovtWQLHLP",
      "registrationDate": 1694200800000,
      "messagecounter": 1
    },
    {
      "firstName": "Cairne",
      "lastName": "Bloodhoof",
      "email": "Cairne@Bloodhoof.com",
      "birthDate": 278691200000,
      "street": "Elder Rise 4",
      "zipCode": 43210,
      "city": "Thunder Bluff",
      "id": "sD4ii5dxzwaT3pIdICPG",
      "registrationDate": 1685234400000,
      "messagecounter": 4
    },
    {
      "firstName": "Anduin",
      "lastName": "Wrynn",
      "email": "Anduin@Wrynn.de",
      "birthDate": 844725600000,
      "street": "Stormwind Keep 2",
      "zipCode": "11111",
      "city": "Stormwind",
      "id": "t8nSA7WlniulGjy8EExF",
      "registrationDate": 1699178853952,
      "messagecounter": 7
    },
    {
      "firstName": "Tinkmaster",
      "lastName": "Overspark",
      "email": "Tinkmaster@Overspark.com",
      "birthDate": 773452800000,
      "street": "Tinker Town 5",
      "zipCode": 23456,
      "city": "Ironforge",
      "id": "zXPfxct3YnE7Acoi3SI3",
      "registrationDate": 1691912000000,
      "messagecounter": 2
    }
  ];
  searchText: any;
  themes = [
    {
      id: 'lara-light-blue',
      label: 'Lara Light Blue'
    },
    {
      id: 'bootstrap4-dark-blue',
      label: 'Bootstrap 4 Dark Blue'
    },
    {
      id: 'md-light-deeppurple',
      label: 'Material Light Deeppurple'
    },
  ];

  selectedTheme: { id: string; label: string } = this.themes[0];


  constructor() { }

  changeTheme(themeId: string) {
    this.appService.switchTheme(themeId);
  }

  clear(table: Table) {
    this.searchText = "";
    table.clear();
  }
}

