import { User } from './models/user'

const Alex = new User({ name: 'Alex', image: '' })
const Bob = new User({
  name: 'Bob',
  image: '/images/avatars/avatar-02.png',
})
const Denise = new User({
  name: 'Denise',
  image: '/images/avatars/avatar-06.png',
  status: 'away',
})
const John = new User({
  name: 'John',
  image: '/images/avatars/avatar-01.png',
  status: 'offline',
})
const Karen = new User({
  name: 'Karen',
  image: '/images/avatars/avatar-04.png',
  showSpecial: true,
})

export { Alex, Bob, Denise, John, Karen }
