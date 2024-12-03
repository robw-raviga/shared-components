import { PropsWithChildren } from "react";
import './PlatformSpecificDemoComponent'

export function SomeContainer({children}: PropsWithChildren) {
  return (
    <div style={{ border: '1px dashed blue' }}>{children}</div>
  )
}