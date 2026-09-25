import { createContext, useContext, useState } from 'react'

const SceneContext = createContext(null)

export function SceneProvider({ children }) {
  const [sceneState, setSceneState] = useState('loading')

  return (
    <SceneContext.Provider value={{ sceneState, setSceneState }}>
      {children}
    </SceneContext.Provider>
  )
}

export function useScene() {
  return useContext(SceneContext)
}