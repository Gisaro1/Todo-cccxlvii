import Header from "./Header"
import MainContent from "./MainContent"
function AppShell() {
  return (
    <div className="bg-black h-screen">
        <Header></Header>
        <MainContent></MainContent>
    </div>
  )
}

export default AppShell