import { PropsWithChildren } from "react";


/**
 * Just an example container component
 */
export function SharedContainer({children}: PropsWithChildren) {
  return (
    <div style={{ border: '1px solid yellow'}}>{children}</div>
  )
}