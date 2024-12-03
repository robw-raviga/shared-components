import { PlatformSpecificComponentProps, setup } from '../shared/DemoComponent'

/**
 * Note that nothing is exported from this file.
 */


/**
 * This is the platform specific implementation of the thing we're replicating in shared.
 * This is deliberately not exported
 */
function Component({children, backgroundColor}: PlatformSpecificComponentProps) {
  return (
    <p style={{ backgroundColor, padding: '1rem' }}>{children}</p>
  )
}

/**
 * When this file is imported, this statement runs and pushs a reference to our component above
 * into the shared version for it to use.
 */
setup(Component)
