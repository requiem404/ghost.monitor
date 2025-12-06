import { getClasses } from "./styles/get-classes"
import { Ghost, GhostCard } from "@/entities/ghost"


const ghosts: Ghost[] = [
  {
    name: 'Phantom Shadow',
    status: 'active',
    location: 'Old Mansion',
    dangerLevel: 'high',
  },
  {
    name: 'Whispering Wraith',
    status: 'caught',
    location: 'Abandoned Warehouse',
    dangerLevel: 'medium',
  },
  {
    name: 'Flickering Spirit',
    status: 'active',
    location: 'Haunted Forest',
    dangerLevel: 'low',
  },
  {
    name: 'Lingering Shade',
    status: 'caught',
    location: 'Creepy Cemetery',
    dangerLevel: 'medium',
  },
  {
    name: 'Veiled Apparition',
    status: 'active',
    location: 'Derelict Castle',
    dangerLevel: 'high',
  },
];

export const MainPage = () => {
  const { cnRoot, cnContainer } = getClasses()

  return (
    <div className={cnRoot}>
      <div className={cnContainer}>

        {ghosts.map(ghost => <GhostCard key={ghost.name} {...ghost} />)}
      </div>
    </div>
  )
}
