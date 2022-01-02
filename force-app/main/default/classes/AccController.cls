public class AccController {

    @AuraEnabled
    public static list<Account> searchAcc(String key){
        String key2 = '%'+key+'%';
        System.debug(key);
        list<Account> ls = [ select id,name from Account where name like :key2 limit 10];
        System.debug(ls);
        return ls;
    }
}
// Adding this comment as a part of testing github and vs code please igore this comment in future dated-02-01-2022