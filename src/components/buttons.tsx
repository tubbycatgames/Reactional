import React from 'react'

import { MenuScreenName } from '../consts'
import { t } from '../utils/localization'

import { SchemePrimaryButton } from './schemed'

export const MenuButton = ({ navigate }: any) => (
  <SchemePrimaryButton
    accessibilityLabel={t('buttons.menu.label')}
    onPress={() => navigate(MenuScreenName)}
    title={t('buttons.menu.title')}
  />
)
