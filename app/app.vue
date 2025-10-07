<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap'
    }
  ]
})
</script>

<template>
  <div class="wrapper">
    <div class="layout">
      <NuxtLoadingIndicator />
      <TheHeader />
      <main class="page">
        <div class="container">
          <NuxtPage />
        </div>
      </main>
      <!--      <TheFooter /> -->
    </div>
  </div>
</template>
