const type = "PlayerRegion"

export const fetchPlayers = async () => {
    console.log(`Loading ${type} Player Data`)
    const data = await (await fetch(`http://localhost:3001/${type}`)).json()
    const ret = Array.from(data, (item, index) => ({
        name: item.player_tag,
        real: item.player_name,
        country: item.player_country,
        team_region: item.team_region
    }));
    
    console.log('Data Loaded')
    return ret;
  };

