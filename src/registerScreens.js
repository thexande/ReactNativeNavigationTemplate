import { Navigation } from 'react-native-navigation'
import MasterComponent from './components/MasterComponent'
import DetailComponent from './components/DetailComponent'

export function registerScreens() {
    Navigation.registerComponent('master', () => MasterComponent)
    Navigation.registerComponent('detail', () => DetailComponent)
}