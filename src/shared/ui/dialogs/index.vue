<script setup lang="ts">
// import PrimeButton from "primevue/button";
interface ConfirmationDialogClasses {
  title: string,
  msg: string,
  closeBtn: string,
  submitBtn: string,
}
export interface ConfirmationDialogProps {
  title: string,
  msg: string,
  closeBtnText?: string,
  submitBtnText?: string,
  classes?: Partial<ConfirmationDialogClasses>,
}

withDefaults(defineProps<ConfirmationDialogProps>(), {
  closeBtnText: 'Отменить',
  submitBtnText: 'Подтвердить',
  classes: () => ({}),
});
defineEmits<{
  destroy: [e: boolean],
}>();


</script>

<template>
  <div class="fixed z-[99] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-gray-systemLight/40 backdrop-blur-sm">
    <div class="flex flex-col min-w-[250px] min-h-[250px] max-w-1/3 max-h-1/2 p-6 bg-white rounded-sm shadow">
      <h2 class="block mb-5" :class="classes?.title" v-text="title" />
      <!-- eslint-disable vue/no-v-html -->
      <span class="block " :class="classes?.msg" v-html="msg" />
      <div class="flex justify-between mt-auto">
<!--        <prime-button-->
<!--          :class="classes?.closeBtn"-->
<!--          :label="closeBtnText"-->
<!--          text-->
<!--          @click="$emit('destroy', false)"-->
<!--        />-->
<!--        <prime-button-->
<!--          :class="classes?.submitBtn"-->
<!--          :label="submitBtnText"-->
<!--          @click="$emit('destroy', true)"-->
<!--        />-->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>