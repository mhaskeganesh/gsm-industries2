public class FirstJob implements queueable{
    private void execute(System.QueueableContext context){
        System.debug('Inside firstJob');
        Id jobId = System.enqueueJob(new Second());
        System.debug('child job id - '+ jobId);
       
    }
}
