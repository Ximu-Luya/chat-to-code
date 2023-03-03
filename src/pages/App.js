import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview
} from "@codesandbox/sandpack-react"
// import { monokaiPro } from "@codesandbox/sandpack-themes"
import './App.css'

const App = () => {
  const files = {}
  
  return (
    <SandpackProvider
      files={files} 
      // theme={monokaiPro} 
      template="vite-vue"
      options={{
        classes: {
          "sp-layout": 'code-editor'
        }
      }}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor closableTabs showTabs />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )  
}

export default App