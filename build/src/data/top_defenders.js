const type = "DefendersByPlayer"

export const fetchTopDefenders = async () => {
    console.log(`Loading ${type} Player Data`)
    const data = await (await fetch(`http://localhost:3001/${type}`)).json()
    const ret = Array.from(data, (item, index) => ({
      id: index + 1,
      name: item.player_tag,
      gameSaves: item.Game_Saves,
      matchSaves: item.Match_Saves
    }));
    
    console.log('Data Loaded')
    return ret;
  };


