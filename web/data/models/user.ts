export type Avatar = {
  name: string
  image: string
  status?: 'active' | 'away' | 'doNotDisturb' | 'offline'
  showSpecial?: boolean
}

export class User {
  name: string
  avatar: Avatar

  constructor({ name, image, status, showSpecial }: Avatar) {
    this.name = name
    this.avatar = {
      name,
      image,
      status,
      showSpecial,
    }
  }
}
