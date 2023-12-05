import type { Meta, StoryFn } from '@storybook/react'

import { Avatar as AvatarProps } from '../../../data/models/user'
import { Alex, Bob, Denise, John, Karen } from '../../../data/users'

import { Avatar, StatusIcon, StatusIconProps } from './Avatar'

export default {
  component: Avatar,
} as Meta

export const UserNoPhoto: StoryFn<AvatarProps> = (args) => (
  <div className="w-auto bg-silverTree p-4">
    <Avatar {...args} />
  </div>
)

UserNoPhoto.args = Alex.avatar

export const UserWithPhoto: StoryFn<AvatarProps> = (args) => (
  <div className="w-auto bg-silverTree p-4">
    <Avatar {...args} />
  </div>
)
UserWithPhoto.args = Bob.avatar

export const UserWithStatus: StoryFn<AvatarProps> = (args) => (
  <div className="w-auto bg-silverTree p-4">
    <Avatar {...args} />
  </div>
)
UserWithStatus.args = Denise.avatar

export const UserOffline: StoryFn<AvatarProps> = (args) => (
  <div className="w-auto bg-silverTree p-4">
    <Avatar {...args} />
  </div>
)

UserOffline.args = John.avatar

export const UserWithSpecial: StoryFn<AvatarProps> = (args) => (
  <div className="w-auto bg-silverTree p-4">
    <Avatar {...args} />
  </div>
)
UserWithSpecial.args = Karen.avatar

export const Statuses: StoryFn<StatusIconProps> = () => (
  <div className="flex justify-between ">
    <div className="relative m-8 rounded-full bg-silverTree p-8">
      <StatusIcon status="active" />
    </div>
    <div className="relative m-8 rounded-full bg-silverTree p-8">
      <StatusIcon status="away" />
    </div>
    <div className="relative m-8 rounded-full bg-silverTree p-8">
      <StatusIcon status="doNotDisturb" />
    </div>
  </div>
)
