const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},

]
function superbowlWin(records){
    const winningRecord = records.find(record => record.result === "W");
    if(winningRecord) {
        return winningRecord.year;
    } else{ 
        return undefined;
    }
}
