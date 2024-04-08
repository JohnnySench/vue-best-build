<script setup lang="ts">
import { useConfirm } from '@/hooks/dialogs/useCreateConfirmDialog.ts';
import {useDebouncedRef} from '@shared/hooks/useDebouncedRef.ts';
import { watch } from 'vue';
import Button from 'primevue/button';

const handler = () => {
  useConfirm({
    title: 'Подтвердите удаление',
    msg: `Вы действительно хотите удалить`,
    submitBtnText: 'Удалить',
  })
}
const searchValue = useDebouncedRef('', 300)
watch(searchValue, (value) => {
  console.log(value);
})
</script>

<template>
 <Button class="h-20" @click="handler">CLick</Button>
  <input v-model="searchValue"/>
  <div>{{searchValue}}</div>
</template>

<style scoped>

</style>
