<template>
  <ValidationObserver
    tag="div"
    ref="observer"
    class="app-form"
    v-slot="{ handleSubmit }"
  >
    <form @submit.prevent="handleSubmit(handleSuccess)">
      <ValidationProvider
        v-for="field in formFields"
        class="app-form__row"
        tag="div"
        :key="field.id"
        :name="field.name"
        :rules="field.rules"
        v-slot="{ errors }"
      >
        <input
          class="app-form__input"
          :type="field.type"
          :placeholder="field.placeholder"
          v-model.trim="formModel[field.model]"
        >
        <app-form-error>{{ errors[0] }}</app-form-error>
      </ValidationProvider>
      <div class="app-form__button-row">
        <slot name="submit-button" />
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import VueTypes from 'vue-types';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import AppFormError from './app-form-error.vue';
import { getPreparedFormData } from './app-form-utils';

export default {
  name: 'app-form',
  components: {
    ValidationObserver,
    ValidationProvider,
    AppFormError,
  },
  props: {
    config: VueTypes.arrayOf(VueTypes.object),
  },
  created() {
    this.initForm();
  },
  data() {
    return {
      formModel: {},
      formFields: [],
    };
  },
  watch: {
    config() {
      this.$refs.observer.reset();
      this.initForm();
    },
  },
  methods: {
    initForm() {
      const { fields, model } = getPreparedFormData(this.config);

      this.formModel = model;
      this.formFields = fields;
    },
    handleSuccess() {
      this.$emit('form-validated', this.formModel);
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'app-form';
</style>
