public class InvocaleCtrl {
     @InvocableMethod(label='Get Account' description='Returns the list of Account')
     public static List<Account> getAccountInfo(List<ID> ids) {
          List<Account> acc = [SELECT Id, Name FROM Account WHERE Id IN : ids LIMIT 1];
          return acc;
     }
}