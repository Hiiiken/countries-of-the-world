<template>
  <div class="country-card" @click="aboutCountry()">
    <img class="country-flag" :src="country.flag" alt="country flag">
    <div class="country-details">
      <h4 class="heading-3">{{ country.name }}</h4>
      <p class="body-text-sm"><span>Population:</span> {{ country.population }}</p>
      <p class="body-text-sm"><span>Region:</span> {{ country.region }}</p>
      <p class="body-text-sm"><span>Capital:</span> {{ country.capital }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CountryCard',
    props: ['country'],
    methods: {
      aboutCountry() {
        this.$router.push('/country/' + this.country.name); 
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
    transition: .3s all ease-in-out;

    &:hover {
      box-shadow: 1px 1px 20px hsla(209, 23%, 22%, 0.2);
    }
    
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