function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
      break;
    case 1:
      return 'One';
      break;
    case 3:
      return 'three';
      break;
    case 4:
      return 'Four';
      break;
    case 5:
      return 'Five';
      break;
    case 6:
      return 'Six';
      break;
    case 7:
      return 'Seven';
      break;
    case 8:
      return 'Eigth';
      break;
    case 9:
      return 'Nine';
      break;
    default:
      return 'Wrong Number';
  }
}

console.log(switchItUp(4))
