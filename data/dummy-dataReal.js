import Category from '../models/category'
import Workout from '../models/workoutReal'

export const CATEGORIES = [
  new Category('TbZBCUB3XWvFTUV5THMk', 'Easy Run', {uri: require(`../assets/images/easyRun.jpg`)}),
  new Category('MTgy07dQXuMuDNhnZ2lw', 'Interval', {uri: require(`../assets/images/interval.jpg`)}),
  new Category('SlKj9WoKyjtm3me5cZkh', 'Tempo', {uri: require(`../assets/images/tempo.jpg`)}),
  new Category('eWKmq4XIIyiwxsmkhCE3', 'Long Run', {uri: require(`../assets/images/longRun.jpg`)})
]

export const WORKOUTS = [
  new Workout(
    'w1',
    'TbZBCUB3XWvFTUV5THMk',
    '50 minutes',
    '50 minutes in the park. Running is the way in which people or animals travel quickly on their feet.',
    '7.2.2020'
  ),

  new Workout(
    'w2',
    'TbZBCUB3XWvFTUV5THMk',
    '40 minutes',
    '40 minutes by the sea. Running is the way in which people or animals travel quickly on their feet.',
    '14.2.2020'
  ),

  new Workout(
    'w3',
    'MTgy07dQXuMuDNhnZ2lw',
    '200s',
    'Fast 200s in the track. Running is the way in which people or animals travel quickly on their feet.',
    '27.2.2020'
  ),

  new Workout(
    'w4',
    'MTgy07dQXuMuDNhnZ2lw',
    '400s',
    'Smooth 400s at OAKA. Running is the way in which people or animals travel quickly on their feet.',
    '5.3.2020'
  ),

  new Workout(
    'w5',
    'SlKj9WoKyjtm3me5cZkh',
    '10 minutes',
    '10 minutes tempo at Zirinio. Running is the way in which people or animals travel quickly on their feet.',
    '23.6.2020'
  ),

  new Workout(
    'w6',
    'SlKj9WoKyjtm3me5cZkh',
    '4 km',
    '4 km tempo in the forest. Running is the way in which people or animals travel quickly on their feet.',
    '6.10.2020'
  ),

  new Workout(
    'w7',
    'eWKmq4XIIyiwxsmkhCE3',
    '20 km',
    '20 km on the road. Running is the way in which people or animals travel quickly on their feet.',
    '3.11.2020'
  ),

  new Workout(
    'w8',
    'eWKmq4XIIyiwxsmkhCE3',
    '2 hours',
    '2 hours with hills. Running is the way in which people or animals travel quickly on their feet.',
    '25.11.2020'
  ),
  new Workout(
    'w9',
    'TbZBCUB3XWvFTUV5THMk',
    '50 minutes',
    '50 minutes in the park. Running is the way in which people or animals travel quickly on their feet.',
    '7.2.2020'
  )
]