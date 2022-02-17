<template>
  <!-- <h1>About casdaountry testsetset</h1> -->

  <!-- <div class="country-card">
    <img class="country-flag" src="" alt="country flag">
    <div class="country-details">
      <h4 class="heading-3">{{ country }}</h4>
      <p class="body-text-sm"><span>Population:</span></p>
      <p class="body-text-sm"><span>Region:</span> </p>
      <p class="body-text-sm"><span>Capital:</span> </p>
    </div>
  </div> -->

  <div class="container">
    <div v-for="item in country" :key="item">
      <h4 class="heading-2">{{ item.region }}</h4>
    </div>
  </div>


</template>

<script>
export default {
  name: 'CountryDetails',
  props: ['name'],
  data() {
    return {
      country: []
    }
  },
  created() {
    axios
      .get('https://restcountries.com/v2/name/' + this.name)
      .then(response => (this.country = response.data))
      .catch(error => {
        console.log(error)
        // this.errored = true
      })
  }
}
</script>

<style lang="scss">
  h1 {
    font-size: 32px !important;
  }
</style>