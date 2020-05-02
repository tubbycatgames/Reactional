import React from 'react'
import { Button } from 'react-native'

import { t } from '../utils/localization'

export const MenuButton = ({ navigate }: any) => (
  <Button
    accessibilityLabel={t('buttons.menu.label')}
    onPress={() => navigate('Menu')}
    title={t('buttons.menu.title')}
  />
)
