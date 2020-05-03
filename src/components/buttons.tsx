import React from 'react'

import MenuScreen from '../screens/menu'
import { t } from '../utils/localization'

import { SchemePrimaryButton } from './schemed'

export const MenuButton = ({ navigate }: any) => (
  <SchemePrimaryButton
    accessibilityLabel={t('buttons.menu.label')}
    onPress={() => navigate(MenuScreen.screenName)}
    title={t('buttons.menu.title')}
  />
)
