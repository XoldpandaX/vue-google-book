<template>
  <div class="form-auth">
    <form-auth-switch @switch="handleSwitch" />
    <app-title
      :level="1"
      :custom-font-size="25"
      custom-color="white"
    >
      {{ formTitle }}
    </app-title>
    <app-form
      :config="formConfig"
      @form-validated="handleSuccess"
    >
      <template v-slot:submit-button>
        <button-with-loader
          :is-enable="true"
          attr-type="submit"
        >
          {{ submitBtnText }}
        </button-with-loader>
      </template>
    </app-form>
  </div>
</template>

<script>
import FORM_AUTH_CONSTANTS from './form-auth-consts';
import signUpConfig from './sign-up-config';
import signInConfig from './sign-in-config';

import { AppForm } from '@/components/common/app-form';
import { AppTitle } from '@/components/common/app-title';
import { ButtonWithLoader } from '@/components/common/button-with-loader';
import FormAuthSwitch from './form-auth-switch.vue';

export default {
  name: 'form-auth',
  components: {
    AppForm,
    AppTitle,
    ButtonWithLoader,
    FormAuthSwitch,
  },
  data() {
    return {
      activeTabId: FORM_AUTH_CONSTANTS.LOG_IN_SWITCH_BTN_ID,
    };
  },
  computed: {
    formConfig() {
      return {
        [FORM_AUTH_CONSTANTS.SIGN_UP_SWITCH_BTN_ID]: signUpConfig,
        [FORM_AUTH_CONSTANTS.LOG_IN_SWITCH_BTN_ID]: signInConfig,
      }[this.activeTabId];
    },
    submitBtnText() {
      return {
        [FORM_AUTH_CONSTANTS.SIGN_UP_SWITCH_BTN_ID]: FORM_AUTH_CONSTANTS.SIGN_UP_BTN_TEXT,
        [FORM_AUTH_CONSTANTS.LOG_IN_SWITCH_BTN_ID]: FORM_AUTH_CONSTANTS.LOG_IN_BTN_TEXT,
      }[this.activeTabId];
    },
    formTitle() {
      return {
        [FORM_AUTH_CONSTANTS.SIGN_UP_SWITCH_BTN_ID]: FORM_AUTH_CONSTANTS.SIGN_UP_FORM_TITLE,
        [FORM_AUTH_CONSTANTS.LOG_IN_SWITCH_BTN_ID]: FORM_AUTH_CONSTANTS.LOG_IN_FORM_TITLE,
      }[this.activeTabId];
    },
  },
  methods: {
    handleSuccess(data) {
      console.info(data);
    },
    handleSwitch(activeTabId) {
      this.activeTabId = activeTabId;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'form-auth';
</style>
