/**
 * @param {number} money
  * @param {number} children
   * @return {number}
    */
    var distMoney = function(money, children) {
        if (money < children) return -1;
            money -= children;
                let eights = Math.min(Math.floor(money / 7), children);
                    money -= eights * 7;
                        if (eights === children && money > 0) return eights - 1;
                            if (eights === children - 1 && money === 3) return eights - 1;
                                return eights;
                                }