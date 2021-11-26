trigger AccountTrig on Account (before insert, after insert, after update) {
    if(Trigger.isAfter && Trigger.isInsert){
        AccountTrigHandler.updateShippingAddress(Trigger.new);
    }

    if(Trigger.isAfter && Trigger.isUpdate && AccountUtility.accountTrigExecuted == false){
        AccountTrigHandler.updateShippingAddress(Trigger.new, Trigger.oldMap);
    }

    if(Trigger.isBefore && Trigger.isInsert){
        AccountTrigHandler.createClientContact(Trigger.new);
    }
}