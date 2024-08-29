import { ourTeam } from "../../utils/ourTeam"
import TeamCard from "./TeamCard"

const OurTeam = () => {
  return (
    <div>
        {
            ourTeam?.map(team=><TeamCard key={team?.id} team={team}/>)
        }
    </div>
  )
}

export default OurTeam