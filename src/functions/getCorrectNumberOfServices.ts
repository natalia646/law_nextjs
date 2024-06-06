export default function getCorrectNumber({ id }:  {id: number} ) {

  const correctNumber = Number(id) + 1;

  if (String(correctNumber).length === 1) {
    return "0" + correctNumber;
  }
  return correctNumber;
}
