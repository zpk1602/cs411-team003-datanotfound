const type = "Players"

export const fetchPlayers = async () => {
    console.log(`Loading ${type} Player Data`)
    const data = await (await fetch(`http://localhost:3001/${type}`)).json()
    const ret = Array.from(data, (item, index) => ({
        id: index + 1,
        name: item.player_tag,
        real: item.player_name,
        country: item.player_country,
        slug: item.player_slug
    }));
    
    console.log('Data Loaded')
    return ret;
  };

