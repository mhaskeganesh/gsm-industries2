trigger AccTrig on Account (after insert) {
    
    list<contact> cons = new list<contact>();
    for(Account acc : Trigger.new){
        cons.add(new Contact(LastName=acc.Name+' contact',AccountId=acc.Id));
    }
    
    insert cons;
}