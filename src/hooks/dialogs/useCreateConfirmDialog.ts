import { defineAsyncComponent } from 'vue';
import { useResolvedModal } from '@shared/hooks/useGlobalModals.ts';
import type { ConfirmationDialogProps } from '@shared/ui/dialogs/index.vue';

export const useConfirm = (props: ConfirmationDialogProps): Promise<boolean> => {
  const confirmComponent = defineAsyncComponent(
    () => import('@shared/ui/dialogs/index.vue')
  );
  return useResolvedModal(confirmComponent, props)
};