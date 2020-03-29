<template>
  <v-app>
    <div class="today">
        <h1 style="text-align: center; color: white; font-weight: normal;">
            Praćenje stanja CoVID-19 pandemije u balkanskim zemljama
        </h1>
        <v-flex d-flex>
        <v-layout wrap>
            <v-flex md4 v-for="country in this.stats" :key="country">
                <v-card outlined="true" class="card-container">
                    <h1 style="color: white" class="text-center">
                        {{countries[stats.indexOf(country)]}}
                    </h1>
                    <br />
                    <h2 style="color: #f0e13c" class="text-center">
                    Zaraženi: {{country[country.length - 1].confirmed -
                    country[country.length - 1].deaths - country[country.length - 1].recovered}}
                    </h2>
                    <h3 style="color: white" class="text-center">
                    Danas zaraženo: {{checkStat((country[country.length - 1].confirmed -
                    country[country.length - 1].deaths - country[country.length - 1].recovered) - (
                    country[country.length - 2].confirmed -
                    country[country.length - 2].deaths - country[country.length - 2].recovered
                    ))}}
                    </h3>
                    <h2 style="color: #de4343" class="text-center">
                    Smrti: {{ country[country.length - 1].deaths }}
                    </h2>
                    <h3 style="color: white" class="text-center">
                    Danas umrlo: {{ checkStat(country[country.length - 1].deaths -
                    country[country.length - 2].deaths) }}
                    </h3>
                    <h2 style="color: #39cc3e" class="text-center">
                    Izliječeni: {{ country[country.length - 1].recovered }}
                    </h2>
                    <h3 style="color: white" class="text-center">
                    Danas izliječeno: {{ checkStat(country[country.length - 1].recovered -
                    country[country.length - 2].recovered) }}
                    </h3>
                </v-card>
            </v-flex>
        </v-layout>
        </v-flex>
        <h4 style="text-align: right; color: white;">
            Podaci prikupljeni zaključno sa datumom: {{stats[0][stats[0].length - 1].date}}
        </h4>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    stats: [],
    countries: [
      'Bosnia and Herzegovina',
      'Serbia',
      'Croatia',
      'Slovenia',
      'North Macedonia',
      'Montenegro',
    ],
  }),
  methods: {
    getStats() {
      fetch('https://pomber.github.io/covid19/timeseries.json')
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < this.countries.length; i += 1) {
            this.stats.push(data[this.countries[i]]);
          }
        });
    },
    checkStat(num) {
      return num > 0 ? num : 0;
    },
  },
  created() {
    this.getStats();
  },
};
</script>

<style scoped>
.today {
    width: 90%;
    margin-left: 10%;
}
.card-container {
    background: none;
}
h3 {
    padding-bottom: 20px;
}
</style>
