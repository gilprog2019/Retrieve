public class InvokeAccountAction 
{
  @InvocableMethod(callout=true label='Get Account Name')    
  public static List<String> getAccountNames(List<ID> ids) {
    List<String> accountNames = new List<String>();
    List<Account> accounts = [SELECT Name FROM Account WHERE Id in :ids];
    for (Account account : accounts) {
      accountNames.add(account.Name);
    }
    return accountNames;
  } 
}