import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview
} from "@codesandbox/sandpack-react"
import Chat from "../components/Chat.js"
// import { monokaiPro } from "@codesandbox/sandpack-themes"
import './App.css'

const App = () => {
  const files = {}
  
  return (
    <SandpackProvider
      files={files} 
      // theme={monokaiPro} 
      template="vite-vue"
      options={{}}
    >
      <SandpackLayout>
        <div className="chat-and-code">
          <Chat />
          <div className="code-area">
            <SandpackFileExplorer />
            <SandpackCodeEditor closableTabs showTabs />
          </div>
        </div>
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )  
}

export default App