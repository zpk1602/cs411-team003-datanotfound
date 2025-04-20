const type = "StrikersByPlayer"

export const fetchTopStrikers  = async () => {
    console.log(`Loading ${type} Player Data`)
    const data = await (await fetch(`http://localhost:3001/${type}`)).json()
    const ret = Array.from(data, (item, index) => ({
      id: index + 1,
      name: item.player_tag,
      gameShots: item.Game_Shots,
      gameGoals: item.Game_Goals,
      matchShots: item.Match_Shots,
      matchGoals: item.Match_Goals,
    }));
    
    console.log('Data Loaded')
    return ret;
  };


