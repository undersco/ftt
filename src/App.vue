<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>

<style>
:root {
  --white: #fff;
  --dark: #000;
}
html:focus-within {
  scroll-behavior: smooth;
}
html {
  height: -webkit-fill-available;
}
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: "open_sansregular", sans-serif;
  position: relative;
  font-size: 13px;
  line-height: 1.8;
}
@supports (-webkit-touch-callout: none) {
  body {
    /* The hack for Safari */
    min-height: -webkit-fill-available;
  }
}
@font-face {
  font-family: "open_sansregular";
  src: local("open_sansregular"),
    url("./assets/fonts/OpenSans-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "open_sansbold";
  src: local("open_sansbold"), url("./assets/fonts/OpenSans-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
input,
button,
select,
textarea,
a {
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  font-family: inherit;
  line-height: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'open_sansbold', sans-serif;
  text-transform: uppercase;
}
p,
input,
button,
select,
textarea,
a {
    font-family: 'open_sansregular', sans-serif;
}
a {
  text-decoration: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img,
picture {
  max-width: 100%;
  display: block;
}
ul,
ul[role="list"],
ol[role="list"] {
  list-style-type: none;
}
button,
input,
textarea,
select {
  background-color: inherit;
  border: 0;
  outline: 0;
}

/*CS STYLES */
h1 {
  font-size: clamp(4.375rem, 3.8942rem + 2.4038vw, 7.5rem);
}
h2 {
  font-size: clamp(1.8rem, 1.1538rem + 0.4808vw, 2.5rem);
  margin-bottom: 2rem;
}
h3 {
  font-size: clamp(1.25rem, 1.1538rem + 0.4808vw, 1.875rem);
}
h4 {
  font-size: clamp(0.875rem, 0.8365rem + 0.1923vw, 1.125rem);
}
p {
  margin-bottom: 1rem;
}
.container {
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}
</style>
