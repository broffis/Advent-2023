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
  colorHex?: string
  size?: number
}
const Icon = ({ id, size = 24, colorHex }: IconProps) => {
  console.log(id)
  return (
    <svg width={size} height={size} fill={colorHex}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
