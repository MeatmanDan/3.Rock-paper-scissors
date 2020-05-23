class RockPaperScissors {
  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];

    return acceptedValues[Math.floor(Math.random() * 3)];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} user user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpu computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(user, cpu){
    if(user === cpu) return `tie`;
    if(
      (user === `rock` && cpu === `scissors`) || 
      (user === `scissors` && cpu === `paper`) ||
      (user === `paper` && cpu === `rock`)
    ) return `win`;
    else return `lose`;
  }

}