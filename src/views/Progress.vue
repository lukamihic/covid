<template>
    <div class="progress">
        <v-col cols="12">
          <v-select
            v-model="country"
            :items="items"
            label="Odaberite državu"
            @change="getStats()"
          ></v-select>
        </v-col>
       <v-data-table
            :headers="headers"
            :items="stats"
            dark
        >
        </v-data-table>
    </div>
</template>

<script>
export default {
  data: () => ({
    stats: [],
    country: 'Bosnia and Herzegovina',
    items: [
      'Bosnia and Herzegovina',
      'Serbia',
      'Croatia',
      'Slovenia',
      'North Macedonia',
      'Montenegro',
      'Albania',
      'China',
      'US',
      'Canada',
      'Italy',
      'Spain',
      'Germany',
      'United Kingdom',
    ],
    headers: [
      {
        text: 'Datum',
        align: 'left',
        sortable: false,
        value: 'date',
      },
      { text: 'Zaraženi', value: 'confirmed' },
      { text: 'Oporavljeni', value: 'recovered' },
      { text: 'Smrti', value: 'deaths' },
    ],
  }),
  methods: {
    getStats() {
      fetch('https://pomber.github.io/covid19/timeseries.json')
        .then((response) => response.json())
        .then((data) => {
          this.stats = data[this.country];
        });
    },
  },
  created() {
    this.getStats();
  },
};
</script>
<style>
.progress {
    width: 90%;
    margin-left: 10%;
}
label, input {
    color: white !important;
}
.v-data-table.theme--dark {
    background: none !important;
}
.v-select__selection.v-select__selection--comma {
    color: white !important;
}
</style>
