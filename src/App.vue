<template>
  <router-view :key="$route.path"/>
</template>

<style>
/* Define styles for the default root window element */
:root {
  --background-color-primary: hsl(0, 0%, 98%);
  --background-color-secondary: hsl(0, 0%, 100%);
  --accent-color: blue;
  --text-primary-color: hsl(200, 15%, 8%);
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: hsl(207, 26%, 17%);
  --background-color-secondary: hsl(209, 23%, 22%);
  --accent-color: orange;
  --text-primary-color: hsl(0, 0%, 100%);
}
</style>