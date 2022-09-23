<template>
  <p>{{ $t("hello", { name: "Vue.js" }) }}</p>
  <sub-component :title="$t('welcome')"></sub-component>
  <p>{{ $t("yes-button") }}</p>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
  <p>{{ $tc("text", 2) }}</p>
  <p>{{ $tc("wolves", 1) }}</p>
  <p>{{ $tc("wolves", 5) }}</p>
  <p>{{ $tc("wolves", 5, { numberOfWolves: 5 }) }}</p>
  <p>{{ $t("about-screen.title") }}</p>
</template>

<script>
import { defineComponent } from "vue";
// import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HelloI18n",
  // setup() {
  //   const { t } = useI18n({
  //     inheritLocale: true,
  //     useScope: "local",
  //   });

  //   // Something todo ..
  //   return { t };
  // },
  data() {
    return { langs: ["en", "de"] };
  },
});
</script>

<i18n>
{
  "en": {
    "hello": "Hallo {name}!",
    "welcome": "Welcome!",
    "text": "flower | flowers",
    "wolves": "no wolf | one wolf | a pack of {numberOfWolves} wolves",
    "yes-button": "Yes",
    "no-button": "No!",
    "main-screen": {
        "title": "Main screen",
        "description": "This is the main screen..."
    },
    "about-screen": {
        "title": "About screen",
        "description": "That's what this is all about...."
    },
  },
  "de": {
    "hello": "Hallo i18n in SFC!",
    "welcome": "Willkommen!",
    "yes-button": "Ja",
    "no-button": "Nein!"
  }
}
</i18n>
