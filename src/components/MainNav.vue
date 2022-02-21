<template>
  <div class="top-bar">
    <div class="container">
      <div class="group">
        <h2 class="heading-2">Where in the world?</h2>
        <switch-theme-btn></switch-theme-btn>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchThemeBtn from './SwitchThemeBtn.vue'

export default {
  name: 'MainNav',
  components: {
    SwitchThemeBtn
  }
}
</script>

<style lang="scss">
  .top-bar {
    // background-color: white;
    background-color: var(--background-color-secondary);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .1);
    padding: 24px 0;
    margin-bottom: 42px;

    .group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    h2 {
      color: var(--text-primary-color);

      @media only screen and (max-width: 520px) {
        margin-bottom: 8px;
      }
    }
  }
</style>