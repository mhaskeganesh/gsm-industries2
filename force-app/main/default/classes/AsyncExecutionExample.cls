public class AsyncExecutionExample {
    public void execute(System.QueueableContext context){
        System.debug('Inside execute method of queueable class....creating an account');
        Account acc = new Account(Name = 'Account from Queuable job');
        insert acc;
    }
}
