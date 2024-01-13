function diasEnMes(mes) {
  
      switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          dias = 31;
          break;
        case 2:
          dias = 28;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          dias = 30;3
          break;
        default:
          return 0;
          break;
      }
    

  return dias;
}

module.exports = diasEnMes;
