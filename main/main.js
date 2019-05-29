 const      lednum  =  [
                        ["._.","...","._.","._.","...","._.","._.","._.","._.","._."],
                        ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],
                        ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]
 ]

module.exports = function main(str) {
  const out = [[], [], []]
  
  for(let s of str){
    out[0].push(lednum[0][s])
    out[1].push(lednum[1][s])
    out[2].push(lednum[2][s])
      
  }
  return out.map(row => row.join(' ')+'\n').join('')
   
};
 


