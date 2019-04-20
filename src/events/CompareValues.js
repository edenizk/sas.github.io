function compareValues(key, order_by){
    return function(a, b){
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
        //property doesnt exist
        console.log('choose a key for ')
        return 0
      }
  
      const varA = (typeof a[key] === 'string')  
                ? a[key].toUpperCase() : a[key]
      const varB = (typeof b[key] === 'string')  
                ? b[key].toUpperCase() : b[key]
  
      let comparison = 0;
  
      if(varA > varB){
        comparison = 1
      }else if(varA < varB){
        comparison = -1
      }
  
      return(
        (order_by === 'desc') ? (comparison * -1) : comparison
      )
    }
  }

  export default compareValues