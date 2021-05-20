function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You encountered a monster";
      break;

    case "back":
      whatHappens = "You returned home";
      break;

    case "right":
      whatHappens = "You befriended a troll";
      break;

    case "left":
      whatHappens = "You have to jump over a lava";
      break;

    default:
      whatHappens = "You need to enter a valid direction";
  }
  return whatHappens;
}
