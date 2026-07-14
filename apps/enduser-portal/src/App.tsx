import {Button} from "@repo/ui"
import {formatCurrency} from "@repo/utils"
function App() {

  return (
    <>
      <h1>Frontend Life Cycle</h1>
      <Button onClick={() => {alert(formatCurrency(12000))}} />
        <p>new feature!</p>
        <p>new changes added!</p>
        <p>testing workflow</p>
    </>
  )
}

export default App
