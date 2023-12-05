import type { Meta, StoryObj, StoryFn } from '@storybook/react'

import Icon, { IconName, IconProps } from './Icon'

export default {
  component: Icon,
  tags: ['autodocs'],
} as Meta

export const Primary: StoryObj<IconProps> = {
  args: {
    id: 'check',
    size: 68,
  },
}

const icons: IconName[] = [
  'calendar',
  'check',
  'chevron',
  'close',
  'eyeClosed',
  'eyeOpened',
  'logout',
  'minus',
  'plus',
  'question',
  'thumbsDown',
  'thumbsUp',
  'upload',
  'user',
]

export const AllIcons: StoryFn = () => (
  <>
    {icons.map((icon) => (
      <Icon id={icon} key={icon} />
    ))}
  </>
)
