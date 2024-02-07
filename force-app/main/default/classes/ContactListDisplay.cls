public with sharing class ContactListDisplay {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts10(){
        try {
            return [
                SELECT AccountId,Id, FirstName, LastName
                FROM Contact
                WITH SECURITY_ENFORCED
                LIMIT 10
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}