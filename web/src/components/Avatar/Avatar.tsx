import { Avatar as AvatarProps } from '../../../data/models/user'
import Icon from '../Icon/Icon'

export const Avatar = ({ name, image, showSpecial, status }: AvatarProps) => {
  const isOffline = status === 'offline'
  let imageContent = (
    <div className="bg-spanishGreen align-middle text-2xl text-white">
      {name.charAt(0).toLocaleUpperCase()}
    </div>
  )

  if (image) {
    imageContent = <img src={image} alt={name} className="h-full w-full" />
  }

  if (status === 'offline') {
    imageContent = <Icon id="eyeClosed" colorHex="#FFF" size={32} />
  }
  return (
    <div
      className={` relative w-min rounded-full border-4 ${
        isOffline ? 'border-white/[.33]' : 'border-white'
      }`}
    >
      {showSpecial && <SpecialIcon />}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-spanishGreen">
        {imageContent}
      </div>
      {status && status !== 'offline' && <StatusIcon status={status} />}
    </div>
  )
}

export type StatusIconProps = {
  status: Extract<AvatarProps['status'], 'active' | 'away' | 'doNotDisturb'>
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  let backgroundColor = 'bg-spanishGreen'
  if (status === 'away') {
    backgroundColor = 'bg-supernova'
  } else if (status === 'doNotDisturb') {
    backgroundColor = 'bg-orangeRed'
  }
  return (
    <div
      className={`absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white p-2 ${backgroundColor}`}
    >
      <div>
        {status === 'active' && <Icon id="check" colorHex="#FFF" size={12} />}
        {status === 'away' && <Icon id="question" colorHex="#000" size={12} />}
        {status === 'doNotDisturb' && (
          <Icon id="minus" colorHex="#FFF" size={12} />
        )}
      </div>
    </div>
  )
}

export const SpecialIcon = () => (
  <div className="absolute -right-5 -top-8">
    <img src="/images/santa-hat.png" alt="santa hat" />
  </div>
)
