import * as React from "react"

type Props = React.ComponentProps<"svg"> & {
  color?: string
  size?: string
}

export function GooglePlayIcon({ color, size, ...props }: Props) {
  return (
    <svg
      width={size || 20}
      height={size || 23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.0605 10.4551L3.56445 0.91602L15.6387 7.87695L13.0605 10.4551ZM1.11523 0.357422L12.1152 11.3574L1.11523 22.3574C0.556641 22.0996 0.169922 21.541 0.169922 20.8535V1.9043C0.169922 1.2168 0.556641 0.6582 1.11523 0.357422ZM19.3769 10.0684C20.1933 10.6699 20.1933 12.0879 19.4199 12.6895L16.8418 14.1504L14.0058 11.3574L16.8418 8.60742L19.3769 10.0684ZM3.56445 21.7988L13.0605 12.3027L15.6387 14.8809L3.56445 21.7988Z"
        fill={color || "#fff"}
      />
    </svg>
  )
}
