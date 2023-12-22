import { useState ,useEffect} from 'react'
import { ThemeProvider } from './components/theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'
import './App.css'

function App() {

  const [themeMode,setThemeMode] = useState("light")

  const darkTheme= () =>{
    setThemeMode("dark")
  }

  const lightTheme = () =>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
  <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                  <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <ThemeBtn/>
                      </div>

                      <div className="w-full max-w-sm mx-auto">
                           <Card/> 
                      </div>
                  </div>
            </div>
</ThemeProvider>
  )
}

export default App
