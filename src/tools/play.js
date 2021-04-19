const lance_des = () => {
  return Math.floor(Math.random() * 6) + 1;
}

export const lanceYams = () => {

  let tabs = [];

  for (let i = 0; i < 5; i++) tabs[i] = lance_des ();

  return tabs
}
