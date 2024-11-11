//top level layout file.-2nd layout level children wrapping around liveBlocksProvider

import LiveBlocksProvider from "@/components/LiveBlocksProvider"

function PageLayout({children}:{children: React.ReactNode }) {
  return (
    <LiveBlocksProvider>{children}</LiveBlocksProvider>
  )
}

export default PageLayout;