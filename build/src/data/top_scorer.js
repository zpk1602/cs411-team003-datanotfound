const type = "TopScorer"

export const fetchTopScorer = async () => {
    console.log(`Loading ${type} Player Data`)
    const data = await (await fetch(`http://localhost:3001/${type}`)).json()
    const ret = Array.from(data, (item, index) => ({
      id: index + 1,
      name: item.player_name,
      goals: item.total_score,
    }));
    
    console.log('Data Loaded')
    return ret;
  };