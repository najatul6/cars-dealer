import { ourTeam } from "../../utils/ourTeam"
import TeamCard from "./TeamCard"

const OurTeam = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {
            ourTeam?.map(team=><TeamCard key={team?.id} team={team}/>)
        }
    </div>
  )
}

export default OurTeam