import { SellerBudgetHandler } from './seller-budget-handler'
import { ManagerBudgetHandler } from './manager-budget-handler'
import { DirectorBudgetHandler } from './director-budget-handler'
import { CeoBudgetHandler } from './ceo-budget-handler'
import { CustomerBudget } from './customer-budget'

const customerBudget = new CustomerBudget(100100)

const seller = new SellerBudgetHandler()
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CeoBudgetHandler())

seller.handle(customerBudget)
console.log(customerBudget)
