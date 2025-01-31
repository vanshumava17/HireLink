package com.hirelink.utility;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.hirelink.entity.Sequence;
import com.hirelink.exception.HireLinkException;

@Component
public class Utilities {

    private static MongoOperations mongoOperation;

    @Autowired
    public  void setMongoOperation(MongoOperations mongoOperation) {
        Utilities.mongoOperation = mongoOperation;
    }

    public static Long getNextSequence(String key) throws HireLinkException {

        Query query = new Query(Criteria.where("_id").is(key));
        Update update = new Update();
        update.inc("seq", 1);
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);

        Sequence sequence = null;
        sequence = mongoOperation.findAndModify(query, update, options, Sequence.class);

        if (sequence == null) {
            throw new HireLinkException("Unable to get sequence id for key: " + key);
        }

        return sequence.getSeq();
    }

    public static String generateOTP() {
        StringBuilder otp = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for(int i=0;i<6;i++) 
            otp.append(secureRandom.nextInt(10));
        return otp.toString();
    }
}
