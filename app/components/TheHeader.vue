<script setup>
const menu = ref([
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Service',
    link: '/service'
  },
  {
    label: 'Blog',
    link: '/blog'
  },
  {
    label: 'Contact',
    link: '/contact'
  }
])
</script>

<template>
  <header class="header container">
    <div class="header__body">
      <NuxtLink
        to="/"
        class="header__logo"
      >
        <img
          src="../assets/img/logo.svg"
          alt=""
        >
      </NuxtLink>
      <div class="header__actions">
        <div class="header__menu menu">
          <nav class="menu_body">
            <ul class="menu_list">
              <li
                v-for="(item, i) in menu"
                :key="i"
              >
                <NuxtLink
                  :to="item.link"
                  class="menu__link"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <UiButton>Book on Appoinment</UiButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__logo {
    flex: 1 0 auto;
  }
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__actions {
    display: flex;
    align-items: center;
  }
}
.menu {
  display: flex;
  flex: 1 1 auto;
  font-size: 18px;

  &_list {
    display: flex;
    list-style: none;

    li {
      margin: 0 18px;
    }
  }
  &__link {
    color: #fff;

    &.router-link-active {
      color: #EE4312;
    }
  }
  a {
    text-decoration: none;
  }

  @include maxWidth1024 {
    padding: 10px;
  }
}
</style>
