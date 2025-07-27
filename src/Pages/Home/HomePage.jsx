import Bonjour from "../../Components/Bonjour/Bonjour"
import GlobalContent from "../../Components/Content/GlobalContent"
import Total from "../../Components/Totals/Total"

 // Ici on va met les Composants de HomePage
const HomePage = () => {
  return (
   
    <div >
      <Bonjour/>
      <Total />
      <GlobalContent />
    </div>
  )
}

export default HomePage