public class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Account.name, LastName, FirstName, MailingCity, 
                MailingState, MailingPostalCode, MailingCountry 
                FROM Contact
                WHERE MailingState != null];
    }
}