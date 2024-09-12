<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../app.css";
  export const prerender = true;
</script>

<Header />

<slot />

<Footer />
