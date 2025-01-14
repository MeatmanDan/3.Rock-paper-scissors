class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const r = Math.floor(Math.random() *4)
    return r;
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
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if(userSelection == cpuSelection) return tie; 
    if(userSelection == "rock" && cpuSelection == "sciscors" || userSelection=="paper" && cpuSelection =="rock" || userSelection=="scissors" && cpuSelection =="paper") return win;
    else 
    return lose
    

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    var cpuw = false; 
    var userw = false; 
    var tie = false; 
    var cpu = this.generateCPUResponse();
    var val = this.determineWinner(userSelection,cpu);
    if(val == win) this.score.user++ && userw ==true;
    if(val== tie) tie == true; 
    if(val == lose) this.score.cpu++ && cpuw == true;
    var str = ""; 
    if(userw) str= username + " won!"; 
    if(cpuw) str = username + " lost!"
    if(tie)str = "tie!"

    this.gameHistoryLog.push(username + " chose " +userSelection + " CPU Chose " + cpuSelection + " " +str);
    return; 


  }

}