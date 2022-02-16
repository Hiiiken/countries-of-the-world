<template>
  <h1>About country testsetset</h1>
  <h2 v-bind="countryName">{{ countryName }}</h2>
</template>

<script>
export default {
  name: 'AboutCountry',
  props: ['countryFlag',
            'countryName', 
            'countryPopulation', 
            'countryRegion',
            'countryCapital'],
}
</script>

<style>

</style>