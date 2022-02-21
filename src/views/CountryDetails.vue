<template>
  <main-nav></main-nav>

  <div class="container">
    <button class="btn-back" @click="backButton()">
      <i class="fa-solid fa-arrow-left-long"></i>
      Back
    </button>

    <div v-for="item in country" :key="item" class="country-info">
      <div class="grid">
        <div class="col col-lg">
          <img class="country-flag" :src="item.flag" alt="country flag">
        </div>
        <div class="col col-lg">
          <div class="country-details">
            <h2 class="country-title">{{ item.name }}</h2>
            <div class="grid">
              <div class="col col-xl">
                <ul>
                  <li>
                    <p>
                      <span class="title">Native Name:</span> 
                      {{ item.nativeName }}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="title">Population:</span> 
                      {{ Number(item.population).toLocaleString() }}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="title">Region:</span> 
                      {{ item.region }}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="title">Sub Region:</span> 
                      {{ item.subregion }}
                    </p>
                  </li>
                  <li>
                   <p>
                     <span class="title">Capital:</span> 
                     {{ item.capital }}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col col-xl">
                <ul>
                  <li>
                    <div class="country-domains">
                      <span class="title">Top Level Domain: </span>
                      <span v-for="domain in item.topLevelDomain" :key="domain" class="country-domain">
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
                      <span v-for="(lang, index) in item.languages" :key="lang" class="country-lang">
                        {{ lang.name }}<span v-if="index + 1 < item.languages.length">, </span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-countries" v-if="item.borders">
              <span class="title">Border Countries: </span>
              <span @click="borderCountry($event)" class="border-country" v-for="borderC in item.borders" :key="borderC">
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
      country: [],
      countries: []
    }
  },
  created() {
    axios
      .get('https://restcountries.com/v2/name/' + this.name)
      .then(response => (this.country = response.data))
      .catch(error => {
        console.log(error)
      })

    axios
    .get('https://restcountries.com/v2/all')
    .then(response => (this.countries = response.data))
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    backButton() {
      this.$router.push('/'); 
    },
    borderCountry(event) {
      let alphaCode = event.target.innerText
      this.countries.forEach((country) => {
        if(alphaCode === country.alpha3Code) {
          this.$router.push('/country/' + country.name);
        }
      }) 
    }
  }
}
</script>

<style lang="scss" scoped>
  .country-info {
    margin-bottom: 50px;
  }

  .country-flag {
    vertical-align: middle;
    width: 100%;
    padding-right: 80px;
    height: 420px;
    object-fit: cover;

    @media only screen and (max-width: 1200px) {
      padding-right: 24px;
      height: auto;
    }

    @media only screen and (max-width: 744px) {
      // margin-bottom: 24px;
      padding: 0;
    }
  }

  .country-details {
    padding: 50px 0;

    li {
      line-height: 1.8em;
    }

    p {
      color: var(--text-primary-color);
    }

    span.title {
      font-weight: 600;
      color: var(--text-primary-color);
    }

    .country-title {
      margin-bottom: 24px;
      font-size: 28px;
      font-weight: 800;
      color: var(--text-primary-color);
    }

    .border-countries {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }

    .border-country {
      background-color: var(--background-color-secondary);
      color: var(--text-primary-color);
      margin: 4px;
      padding: 4px 16px;
      border-radius: 3px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, .07);
      font-size: 14px;
      cursor: pointer;
      transition: .3s all ease-in-out;

      &:hover {
        background-color: var(--background-color-primary);
        color: var(--text-primary-color);
      }
    }

    .country-lang, .country-domain {
      color: var(--text-primary-color);
    }

    @media only screen and (max-width: 1200px) {
      padding: 0;

      .border-countries {
        margin-top: 16px;
      }
    }
    
    @media only screen and (max-width: 744px) {
      padding: 24px 0 0;
    }
  }

  .btn-back {
    background-color: var(--background-color-secondary);
    color: var(--text-primary-color);
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, .2);
    font-size: 14px;
    padding: 8px 24px;
    border: none;
    outline: none;
    margin-bottom: 50px;
    font-family: 'Nunito';
    font-weight: 600;
    transition: .3s all ease-in-out;

    i {
      margin-right: 8px;
    }

    &:hover {
      background-color: var(--background-color-primary);
      color: var(--text-primary-color);
    }
  }
</style>