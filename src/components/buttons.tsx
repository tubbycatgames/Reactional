import React from 'react'

import { t } from '../utils/localization'

import { SchemePrimaryButton } from './schemed'

export const MenuButton = ({ navigate }: any) => (
  <SchemePrimaryButton
    accessibilityLabel={t('buttons.menu.label')}
    onPress={() => navigate('Menu')}
    title={t('buttons.menu.title')}
  />
)
