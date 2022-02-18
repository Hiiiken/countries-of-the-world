<template>
  <main-nav></main-nav>

  <div>{{ country }}</div>

  <div class="container">
    <div v-for="item in country" :key="item">
      <div class="grid">
        <div class="col">
          <img class="country-flag" :src="item.flag" alt="country flag">
        </div>
        <div class="col">
          <div class="country-details">
            <h2 class="country-title">{{ item.name }}</h2>
            <div class="grid">
              <div class="col">
                <ul>
                  <li>
                    <p><span class="title">Native Name:</span> {{ item.nativeName }}</p>
                  </li>
                  <li>
                    <p><span class="title">Population:</span> {{ item.population }}</p>
                  </li>
                  <li>
                    <p><span class="title">Region:</span> {{ item.region }}</p>
                  </li>
                  <li>
                    <p><span class="title">Sub Region:</span> {{ item.subregion }}</p>
                  </li>
                  <li>
                   <p><span class="title">Capital:</span> {{ item.capital }}</p>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul>
                  <li>
                    <div class="country-domains">
                      <span class="title">Top Level Domain: </span>
                      <span v-for="domain in item.topLevelDomain" :key="domain">
                        {{ domain }}
                      </span>
                    </div>
                  </li>
                  <li>
                    <p v-for="currency in item.currencies"
                      :key="currency">
                      <span class="title">Currencies: </span> 
                      {{ currency.name }}
                    </p>
                  </li>
                  <li>
                    <div class="country-languages">
                      <span class="title">Languages: </span>
                      <span v-for="lang in item.languages" :key="lang">
                        {{ lang.name }}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-countries">
              <span class="title">Border Countries: </span>
              <span class="border-country" v-for="borderC in item.borders" :key="borderC">
                {{ borderC }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue'

export default {
  name: 'CountryDetails',
  props: ['name'],
  components: {
    MainNav
  },
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

<style lang="scss" scoped>
  .country-flag {
    vertical-align: middle;
    width: 100%;
    padding-right: 80px;
    height: 420px;
    object-fit: cover;
  }

  .country-details {
    padding: 50px 0;

    li {
      line-height: 1.8em;
    }

    p {
      color: hsl(200, 15%, 8%);
    }

    span.title {
      font-weight: 600;
      color: hsl(200, 15%, 8%);
    }

    .country-title {
      margin-bottom: 24px;
      font-size: 28px;
      font-weight: 800;
      color: hsl(200, 15%, 8%);
    }

    .border-countries {
      margin-top: 50px;
    }

    .border-country {
      background-color: white;
      margin: 0 4px;
      padding: 2px 16px;
      border-radius: 3px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, .07);
      font-size: 14px;
    }
  }
</style>