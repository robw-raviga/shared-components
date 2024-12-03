import { DemoComponent } from "./shared/DemoComponent";
import './setup'

export function App() {
  return (
    <>
      <main>
        {/* Note that we import and use the shared component here */}
        <DemoComponent variant="secondary">Hello, world</DemoComponent>
      </main>
    </>
  )
}
