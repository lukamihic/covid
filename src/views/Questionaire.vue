<template>
<v-app>
  <div class="quest">
      <h1 style="font-weight: normal">Upitnik - samoprovjera na CoVID - 19</h1>
      <v-checkbox
      dark
      v-model="cbBoravak"
      label="Jeste li u posljednje vrijeme boravili u rizičnim zemljama?
      (Kina, Italija, Španjolska, J.Koreja, Iran, Njemačka, Francuska)"
    ></v-checkbox>
    <v-checkbox
      dark
      v-model="cbBliski"
      label="Jeste li bili u kontaktu sa osobom koja je stigla iz
      rizičnih područja? (navedenih u prethodnom pitanju)"
    ></v-checkbox>
    <v-checkbox
      dark
      v-model="cbTemp"
      label="Zdravstvene tegobe: imate li povišenu tjelesnu temperaturu / groznicu? (>37°C)"
    ></v-checkbox>
    <v-checkbox
      dark
      v-model="cbKasalj"
      label="Zdravstvene tegobe: imate li problema s kašljem? (neprestan / nadražajući / suh)"
    ></v-checkbox>
    <v-checkbox
      dark
      v-model="cbMisici"
      label="Zdravstvene tegobe: osjećate li jaku malaksalost i bol u mišićima? (umor mišića)"
    ></v-checkbox>
    <v-checkbox
      dark
      v-model="cbDisanje"
      label="Zdravstvene tegobe: imate li ikakvih drugih problema sa disanjem?
      (gubitak daha, bol u plućima)"
    ></v-checkbox>
    <v-checkbox
      dark
      v-model="cbOsjet"
      label="Zdravstvene tegobe: imate li problema s osjetom mirisa / okusa? (gubitak osjeta)"
    ></v-checkbox>
    <br />
      <h5>*ovaj upitnik služi informativno, rezultati ne moraju biti točni!</h5>
      <v-btn depressed color="primary" @click="submitQ()">Podnesi</v-btn>
  </div>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Rezultati vašeg upitnika
        </v-card-title>

        <v-card-text style="margin-top: 10px;">
          {{msg}}<br />Kako god, poštujmo samoizolaciju te mjere propisane
          od nadležnih institucija! #ostanidoma #ostanikući #stayhome
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            U redu
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</v-app>
</template>

<script>
export default {
  data: () => ({
    cbBoravak: false, // 20
    cbBliski: false, // 5
    cbTemp: false, // 20
    cbKasalj: false, // 20
    cbMisici: false, // 10
    cbDisanje: false, // 15
    cbOsjet: false, // 10
    msg: '',
    dialog: false,
  }),
  methods: {
    getScore() {
      let score = 0;
      if (this.cbBoravak) score += 20;
      if (this.cbBliski) score += 5;
      if (this.cbTemp) score += 20;
      if (this.cbKasalj) score += 20;
      if (this.cbMisici) score += 10;
      if (this.cbDisanje) score += 15;
      if (this.cbOsjet) score += 10;
      return score;
    },
    submitQ() {
      if (this.getScore() <= 30) {
        this.msg = 'Vjerojatno nemate virus, no pridržavajte se samoizolacije 14 dana!';
      } else if (this.getScore() >= 65) {
        this.msg = 'Vrlo je moguće da imate virus, kontaktirajte svog liječnika i epidemiologa te slijedite upute!';
      } else {
        this.msg = 'Moguće je da imate virus, ali nije nužno! Kontaktirajte svog liječnika!';
      }
      this.dialog = true;
    },
  },
};
</script>

<style>
.quest {
    width: 90%;
    margin-left: 10%;
    text-align: center;
    color: white;
}
h5 {
    text-align: right;
}
</style>
