import { ourTeam } from "../../utils/ourTeam"
import TeamCard from "./TeamCard"

const OurTeam = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
        {
            ourTeam?.map(team=><TeamCard key={team?.id} team={team}/>)
        }
    </div>
  )
}

export default OurTeam