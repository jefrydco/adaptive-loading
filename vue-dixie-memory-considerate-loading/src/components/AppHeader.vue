<template>
  <div class='header'>
    <div class='bottom-left'>
      <button class='menu-button'><img src="/icons/hamburger.svg" width='24' height='18' alt='hamburger menu' /></button>
      <nav class='header-nav'>
        <a href='/' class='header-nav-item'>Home</a>
        <a href='https://dixiemech.store/' class='header-nav-item'>Shop</a>
        <a href='/groupbuys' class='header-nav-item'>GroupBuys</a>
        <a href='/news' class='header-nav-item'>News</a>
        <a href='https://dixiemech.store/pages/faq' class='header-nav-item'>Help</a>
      </nav>
    </div>
    <div class='bottom-center'>
      <a href='https://dixiemech.com/gmkdracula/' class='header-branding'>
        <img src="/images/logo.webp" alt='Dixie Mech' class='header-branding-logo' />
      </a>
    </div>
    <div class='bottom-right'>
      <nav class='header-nav'>
        <a href='https://discordapp.com/invite/KaZjphH' target='_blank' rel='noopener noreferrer' class='header-nav-item'>Discord</a>
        <a href='https://dixiemech.store/account/login' class='header-nav-item'>Account</a>
        <a href='https://dixiemech.store/search' class='header-nav-item'>Search</a>
        <a href='https://dixiemech.store/cart' class='header-nav-item'>Cart</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hamburger: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.header {
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  background: #eeebe2;
  z-index: 100;
}

.menu-button {
  padding: 8px;
  border: 0;
  background-color: transparent;
}

.bottom-left {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.bottom-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.header-nav {
  display: none;
  font-family: "FuturaPTBold";
  font-size: 13px;
  letter-spacing: .34em;
  text-transform: uppercase;
  line-height: 1em;
  padding: 3px 10px;
}

.header-nav-item {
  display: inline-block;
  color: #fefbf0;
  margin: 0 1.14em;
  padding: .618em 0;
}

.header-branding {
  display: flex;
  padding: 8px;
}

.header-branding-logo {
  max-width: 102px;
}

@media only screen and (min-width: 640px) {
  .header {
    padding: 38px 71px 0 71px;
    position: unset;
    background: transparent;
  }

  .menu-button {
    display: none;
  }

  .header-nav {
    display: block;
  }

  .header-branding {
    padding: 3px 10px;
  }

  .header-branding-logo {
    max-width: 142px;
  }
}
</style>