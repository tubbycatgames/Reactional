import React from 'react'

import { SchemeText, SchemePrimaryButton } from '../components/schemed'
import { t } from '../utils/localization'

import GameScreen from './game'
import SwipeScreen from './swipe'
import { ScreenView } from './view'

const MenuScreen = ({ navigation }: any) => (
  <ScreenView>
    <SchemeText>{t('title')}</SchemeText>
    <SchemeText>{t('description')}</SchemeText>
    <SchemeText>{t('purpose')}</SchemeText>
    <SchemePrimaryButton
      accessibilityLabel={t('buttons.play.label')}
      onPress={() => navigation.navigate(GameScreen.screenName)}
      title={t('buttons.play.title')}
    />
    <SchemePrimaryButton
      accessibilityLabel={t('buttons.swipe.label')}
      onPress={() => navigation.navigate(SwipeScreen.screenName)}
      title={t('buttons.swipe.title')}
    />
  </ScreenView>
)

MenuScreen.screenName = 'Menu'

export default MenuScreen
