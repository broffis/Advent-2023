export type IconName =
  | 'calendar'
  | 'check'
  | 'chevron'
  | 'close'
  | 'eyeClosed'
  | 'eyeOpened'
  | 'logout'
  | 'minus'
  | 'plus'
  | 'question'
  | 'thumbsDown'
  | 'thumbsUp'
  | 'upload'
  | 'user'
export type IconProps = {
  id: IconName
  color?: string
  size?: number
}
const Icon = ({ id, size = 24 }: IconProps) => {
  console.log(id)
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
