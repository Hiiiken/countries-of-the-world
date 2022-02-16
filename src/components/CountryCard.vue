<template>
  <div class="country-card" @click="aboutCountry()">
    <img class="country-flag" :src="countryFlag" alt="country flag">
    <div class="country-details">
      <h4 class="heading-3">{{ countryName }}</h4>
      <p class="body-text-sm"><span>Population:</span> {{ countryPopulation }}</p>
      <p class="body-text-sm"><span>Region:</span> {{ countryRegion }}</p>
      <p class="body-text-sm"><span>Capital:</span> {{ countryCapital }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CountryCard',
    props: ['countryFlag',
            'countryName', 
            'countryPopulation', 
            'countryRegion',
            'countryCapital'],
    methods: {
      aboutCountry() {
        this.$router.push('/about'); 
      }
    }
  }
</script>

<style lang="scss">
  .country-card {
    background-color: white;
    border-radius: 4px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, .05);
    margin-bottom: 48px;
    overflow: hidden;
    cursor: pointer;
    
    .country-flag {
      vertical-align: middle;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .country-details {
      padding: 24px;

      .heading-3 {
        margin-bottom: 16px;
      }
    }
  }
</style>