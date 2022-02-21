<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <i class="fa-solid fa-moon btn-icon"></i>
      <span class="btn-text">Dark Mode</span>
      <div
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script>
  export default {
    mounted() {
      const initUserTheme = this.getMediaPreference();
      this.setTheme(initUserTheme);
    },

    data() {
      return {
        userTheme: "light-theme",
      };
    },

    methods: {
      toggleTheme() {
        const activeTheme = localStorage.getItem("user-theme");
        if (activeTheme === "light-theme") {
          this.setTheme("dark-theme");
        } else {
          this.setTheme("light-theme");
        }
      },

      setTheme(theme) {
        localStorage.setItem("user-theme", theme);
        this.userTheme = theme;
        document.documentElement.className = theme;
      },

      getMediaPreference() {
        const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (hasDarkPreference) {
          return "dark-theme";
        } else {
          return "light-theme";
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .switch-checkbox {
    display: none;
  }

  .switch-label {
    cursor: pointer;
    font-size: 16px;
    height: calc(var(--element-size) * 0.35);
    transition: background 0.5s ease;
    z-index: 1;
    display: flex;
    align-items: center;

    .btn-text {
      color: var(--text-primary-color);
      line-height: 1.5em;
      font-weight: 600;
      margin-left: 4px;
    }

    .btn-icon {
      color: var(--text-primary-color);
    }
  }
</style>
