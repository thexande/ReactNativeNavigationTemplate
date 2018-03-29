
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './registerScreens'

registerScreens()

Navigation.startSingleScreenApp({
  screen: {
    screen: 'master',
    title: 'Master'
  }
})