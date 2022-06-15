<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/publications">Publications</router-link>
     |
    <router-link to="/services">Services</router-link> |
    <router-link to="/artifacts">Artifacts</router-link> 
    <!-- |    <router-link to="/about">About</router-link> -->
  </nav>
  <hr/>
  <router-view/>
  <footerVue></footerVue>
</template>
<script>
import footerVue from "./components/footer.vue";
export default{
  components: {
    footerVue
  }
}
</script>
<style lang="scss">

nav {
  text-align: center;
  font-size: 20px;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>

<style>
body {
  max-width: 1000px;
  margin: auto;
  padding: 1em;
  line-height: 1.5em;
}

/* header and footer areas */
.menu { padding: 0; }
.menu li { display: inline-block; }
.article-meta, .menu a {
  text-decoration: none;
  background: #eee;
  padding: 5px;
  border-radius: 5px;
}
.menu, .article-meta, footer { text-align: center; }
.title { font-size: 0.9em; }
footer a { text-decoration: none; }
hr {
  border-style: dashed;
  color: #ddd;
}

/* code */
pre {
  border: 1px solid #ddd;
  box-shadow: 5px 5px 5px #eee;
  padding: 1em;
  overflow-x: auto;
}
code { background: #f9f9f9; }
pre code { background: none; }

/* misc elements */
img, iframe, video { max-width: 100%; }
main { hyphens: auto; }
blockquote {
  background: #f9f9f9;
  border-left: 5px solid #ccc;
  padding: 3px 1em 3px;
}

table {
  margin: auto;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
}
table thead th { border-bottom: 1px solid #ddd; }
th, td { padding: 5px; }
thead, tfoot, tr:nth-child(even) { background: #eee }
body {
  font-family: 'EB Garamond', Optima, Candara, Calibri, Arial, sans-serif;
  font-size: large;
}
code {
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 85%;
}

</style>