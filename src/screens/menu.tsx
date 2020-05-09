import React from 'react'

import { SchemeText, SchemePrimaryButton } from '../components/schemed'
import { t } from '../utils/localization'

import { GameScreenName, SwipeScreenName } from '../consts'

import { ScreenView } from './view'

const MenuScreen = ({ navigation }: any) => (
  <ScreenView>
    <SchemeText>{t('title')}</SchemeText>
    <SchemeText>{t('description')}</SchemeText>
    <SchemeText>{t('purpose')}</SchemeText>
    <SchemePrimaryButton
      accessibilityLabel={t('buttons.play.label')}
      onPress={() => navigation.navigate(GameScreenName)}
      title={t('buttons.play.title')}
    />
    <SchemePrimaryButton
      accessibilityLabel={t('buttons.swipe.label')}
      onPress={() => navigation.navigate(SwipeScreenName)}
      title={t('buttons.swipe.title')}
    />
  </ScreenView>
)

export default MenuScreen
