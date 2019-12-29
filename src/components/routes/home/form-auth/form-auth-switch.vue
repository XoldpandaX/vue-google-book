<template>
  <div class="form-auth__switch">
    <app-button
      v-for="button in switchButtons"
      type="switch"
      :key="button.id"
      :style="setButtonVisibility(button.isChosen)"
      @button-click="toSwitch"
    >
      {{ button.title }}
    </app-button>
  </div>
</template>

<script>
import FORM_AUTH_CONSTANTS from './form-auth-consts';

import { AppButton } from '@/components/common/app-button';

export default {
  name: 'form-auth-switch',
  components: {
    AppButton,
  },
  data() {
    return {
      switchButtons: [
        {
          id: FORM_AUTH_CONSTANTS.LOG_IN_SWITCH_BTN_ID,
          title: FORM_AUTH_CONSTANTS.LOG_IN_BTN_TEXT,
          isChosen: true,
        },
        {
          id: FORM_AUTH_CONSTANTS.SIGN_UP_SWITCH_BTN_ID,
          title: FORM_AUTH_CONSTANTS.SIGN_UP_BTN_TEXT,
          isChosen: false,
        },
      ],
    };
  },
  methods: {
    toSwitch() {
      this.switchButtons = this.switchButtons.map((button) => ({
        ...button,
        isChosen: !button.isChosen,
      }));

      this.$emit(
        'switch',
        this.switchButtons.filter((button) => button.isChosen)[0].id,
      );
    },
    setButtonVisibility(isChosen) {
      return isChosen ? { opacity: 1 } : { opacity: 0.2 };
    },
  },
};
</script>
