// HomePage.jsx
import Bonjour from "../../Components/Bonjour/Bonjour"
import GlobalContent from "../../Components/Content/GlobalContent"
import Total from "../../Components/Totals/Total"

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Zone fixe */}
      <Bonjour />
      <div className="">
      <Total />

      {/* Zone scrollable */}
      
        <GlobalContent />
      </div>
    </div>
  )
}

export default HomePage
