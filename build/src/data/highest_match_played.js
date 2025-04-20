const type = "MatchesPlayed"

export const fetchMatchesPlayed = async () => {
    console.log(`Loading ${type} Player Data`)
    const data = await (await fetch(`http://localhost:3001/${type}`)).json()
    const ret = Array.from(data, (item, index) => ({
      id: index + 1,
      name: item.player_tag,
      matches: item.matches_played,
    }));
    
    console.log('Data Loaded')
    return ret;
  };


