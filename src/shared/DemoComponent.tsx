import { ComponentType, PropsWithChildren } from "react";
import { SharedContainer } from "./SharedContainer";

/**
 * This is where we'll store a reference to the platform specific version of a component.
 */
const _ = {
  component: undefined as unknown as PlatformSpecificComponentType
}

/**
 * This setup function is exposed so a platform specific version can call it to register itself.
 */
export function setup(component: PlatformSpecificComponentType) {
  _.component = component
}


/**
 * Interfaces of the platform specific component
 */
export type PlatformSpecificComponentProps = PropsWithChildren<{
  backgroundColor: string
}>
type PlatformSpecificComponentType = ComponentType<PlatformSpecificComponentProps>


/**
 * Interface of this shared component (notice that it can be different to the platform specific version).
 */
interface DemoComponentProps extends PropsWithChildren {
  variant: 'primary'|'secondary'
}


/**
 * The example component.  Here we do all our business logic, then defer at the latest moment to the
 * platform specific version of the component.
 */
export function DemoComponent({children, variant}: DemoComponentProps) {
  const backgroundColor = variant === 'primary' ? 'blue' : 'pink'

  return (
    <SharedContainer>
      {/* Here's the delegation to the platform specific version */}
      <_.component backgroundColor={backgroundColor}>{children}</_.component>
    </SharedContainer>
  )
}
