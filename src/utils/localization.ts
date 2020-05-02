import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

i18n.translations = {
  en: {
    buttons: {
      menu: {
        label: 'Click to return to the Menu',
        title: 'Menu',
      },
      play: {
        label: 'Click to play the Game',
        title: 'Play!',
      },
      swipe: {
        label: 'Click to enter Swipe Mode',
        title: 'Swipe!',
      },
    },
    description: 'An accessible, open-source game about reactions',
    purpose: 'Meant for learning, guiding, and enjoyment',
    title: 'Reactional!',
  },
}

const locale = Localization.locale === 'mock' ? 'en' : Localization.locale
i18n.locale = locale
i18n.fallback = true

export const t = i18n.t
