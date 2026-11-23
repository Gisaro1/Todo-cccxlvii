import Content from "../Content"
import Header from "./Header"
function AppShell() {
  return (
    <div className="bg-black h-screen">
        <Header></Header>
        <Content></Content>
    </div>
  )
}

export default AppShell