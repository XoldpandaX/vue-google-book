<template>
  <form-auth
    :is-auth-in-process="isAuthInProcess"
    @submit-click="handleSubmit"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FORM_AUTH_CONSTANTS, ROUTES } from '@/constants';

import { FormAuth } from '../form-auth';

export default {
  name: 'container-form-auth',
  components: {
    FormAuth,
  },
  computed: {
    ...mapGetters('auth', ['isAuthInProcess']),
  },
  methods: {
    ...mapActions('auth', ['signUp', 'signIn']),

    async handleSubmit({ formType, formFields }) {
      const actionMap = {
        [FORM_AUTH_CONSTANTS.SIGN_UP_FORM_ID]: this.signUp,
        [FORM_AUTH_CONSTANTS.LOG_IN_FORM_ID]: this.signIn,
      };

      await actionMap[formType]({
        email: formFields.email,
        password: formFields.password,
      });
      await this.$router.push({ name: ROUTES.SEARCH.NAME });
    },
  },
};
</script>
