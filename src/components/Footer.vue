<template>
  <footer class="footer">
    <div class="footer__container">
      <img
        class="footer__logo"
        src="../assets/images/footer-logo.png"
        alt="footer logo"
      />
      <div class="footer__menu">
        <div class="footer__tel">
          <p class="footer__title">Для связи</p>
          <div class="footer__links tel__links">
            <a href="#"
              ><span><img src="../assets/images/icon4.svg" alt="" /></span>7
              (926) 126-64-57</a
            >
            <a href="#"
              ><span><img src="../assets/images/icon6.svg" alt="" /></span>7
              (926) 126-64-57</a
            >
            <a href="#"
              ><span><img src="../assets/images/icon5.svg" alt="" /></span>7
              (926) 126-64-57</a
            >
          </div>
        </div>

        <div class="footer__company">
          <p class="footer__title">Компания</p>
          <div class="footer__links">
            <router-link to="/services">Услуги</router-link>
            <router-link to="/cases">Кейсы</router-link>
            <router-link to="/contacts">Контакты</router-link>
            <router-link to="/business">Сотрудничество</router-link>
          </div>
        </div>

        <div class="footer__documents">
          <p class="footer__title">Документы</p>
          <div class="footer__links">
            <router-link to="/politics"
              >Политика конфеденциальности</router-link
            >
            <router-link to="/agree">Пользовательское соглашение</router-link>
          </div>
        </div>

        <div class="footer__form">
          <p class="footer__title">Будьте в курсе</p>
          <div class="text-field">
            <label class="text-field__label" for="email"></label>
            <div class="text-field__icon">
              <input
                class="text-field__input"
                type="text"
                name="Email"
                placeholder="E-mail"
              />
              <span class="text-field__aicon">
                <img src="../assets/images/icon7.svg" alt="" />
              </span>
            </div>
          </div>
          <div class="footer__social-media">
            <router-link
              class="social-media__link"
              to="/instagram"
            ></router-link>
            <router-link class="social-media__link" to="/vk"></router-link>
            <router-link
              class="social-media__link"
              to="/facebook"
            ></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__rights">
      <p class="footer__rights-text">Copyright © 2022 SCID</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {},
};
</script>
