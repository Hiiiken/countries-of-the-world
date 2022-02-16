<template>
  <div class="top-bar">
    <div class="container">
      <h2 class="heading-2">Where in the world?</h2>
    </div>
  </div>

  <div class="container">
    <div class="search-filter-group">
      <div class="serach-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="searchQuery" type="text" placeholder="Search for a country...">
      </div>
      <div class="filters-box">
        <select v-model="filterRegions">
          <option value="">Filter by Region</option>
          <option
            v-for="region in unicRegions()"
            :key="region"
            :value="region">
            {{ region }}
          </option>
        </select>
      </div>
    </div>

    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    
    <div class="grid">
      <div class="col col-3 col-third-lg col-half-md col-full-xs" 
        v-for="country in searchResult"
        :key="country">
        <country-card
          :country-flag="country.flags.png"
          :country-name="country.name"
          :country-population="country.population"
          :country-region="country.region"
          :country-capital="country.capital">
        </country-card>
      </div>
    </div>
  </div>
</template>

<script>
import CountryCard from '../components/CountryCard.vue'

export default {
  name: 'Home',
  components: {
    CountryCard
  },
  data() {
    return {
      countries: [],
      countryFlag: null,
      countryName: null,
      countryPopulation: null,
      countryRegion: null,
      countryCapital: null,
      regions: null,
      errored: false,
      searchQuery: null,
      filterRegions: ''
    }
  },
  mounted() {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => (this.countries = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  methods: {
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    },
    unicRegions() {
      let region = this.countries.map( c => c.region)
      return region.filter(this.onlyUnique)
    }
  },
  computed: {
    searchResult() {
      if (this.searchQuery) {
        return this.countries.filter(item => {
          return this.searchQuery
                      .toLowerCase()
                      .split(" ")
                      .every(v => item.name.toLowerCase().includes(v))
        })
      } else if (this.filterRegions) {
        return this.countries.filter(item => {
          return item.region === this.filterRegions
        })
      }
      else {
        return this.countries
      }
    }
  }
}
</script>

<style lang='scss'>
  .top-bar {
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .1);
    padding: 24px 0;
    margin-bottom: 42px;

    h2 {
      color: hsl(209, 23%, 22%);
    }
  }

  .search-filter-group {
    display: flex;    
    align-items: center;
    justify-content: space-between;
    margin-bottom: 42px;

    .serach-box {
      background-color: white;
      box-shadow: 1px 1px 20px rgba(0, 0, 0, .05);
      padding: 16px 30px;
      border-radius: 4px;

      i {
        margin-right: 20px;
        color: hsl(0, 0%, 52%);
      }

      input {
        border: none;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        color: hsl(209, 23%, 22%);
        min-width: 350px;
        font-size: 14px;

        &:focus {
          outline: none;
        }

        @media only screen and (max-width: 744px) {
          min-width: auto;
        }
      }

      @media only screen and (max-width: 520px) {
        width: 100%;
        margin-bottom: 16px;
        padding: 16px;
      }
    }

    .filters-box {
      @media only screen and (max-width: 520px) {
        width: 100%;
      }

      select {
        background-color: white;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, .05);
        padding: 16px 16px;
        border-radius: 4px;
        border: 2px solid transparent;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 14px;
  
        &:focus {
          border: 2px solid hsl(209, 23%, 22%);
        }
  
        option {
          font-weight: 600;
          background: white;
          border-radius: 4px;
        }

        @media only screen and (max-width: 520px) {
          width: 100%;
        }
      }

      
    }

    @media only screen and (max-width: 520px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
