<template>
  <div>
    <h1>{{ $t("title") }}</h1>
    <p>{{ $t("description") }}</p>
    <LocaleSwitcher />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import LocaleSwitcher from "../components/LocaleSwitcher.vue";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    // Something todo ..

    return { t };
  },
  components: { LocaleSwitcher },
});
</script>
