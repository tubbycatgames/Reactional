import React from 'react'
import { Button } from 'react-native'

import { SchemeText } from '../components/schemed'
import { t } from '../utils/localization'

import { ScreenView } from './view'

const MenuScreen = ({ navigation }: any) => (
  <ScreenView>
    <SchemeText>{t('title')}</SchemeText>
    <SchemeText>{t('description')}</SchemeText>
    <SchemeText>{t('purpose')}</SchemeText>
    <Button
      accessibilityLabel={t('buttons.play.label')}
      onPress={() => navigation.navigate('Game')}
      title={t('buttons.play.title')}
    />
    <Button
      accessibilityLabel={t('buttons.swipe.label')}
      onPress={() => navigation.navigate('Swipe')}
      title={t('buttons.swipe.title')}
    />
  </ScreenView>
)

export default MenuScreen
