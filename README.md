# Shared components demo

Flow:
1. Shared component exposes a setup function that sets a local variable
2. Platform specific component imports the setup function from (1) and passes itself up to shared
3. We need to import that platform specific file in the root of the project (e.g. App.tsx)
3. We then render the shared component anywhere we like (web, mobile, shared) and it "just works"

The goal here is that we cannot access the platform specific component anywhere except inside that
shared component.  We always render the shared version which makes our code more portable (you can
just move something in/out of shared and it'll still "just work")
