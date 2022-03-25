import json
from sentiment_functions import getPolarity
from sentiment_functions import getSubjectivity

try:
    with open("../data/referencers.json","r") as read_file:
        referencers = json.load(read_file)
    
    for referencer in referencers:
        for sentenceObj in referencer['extractedSentences']:
            sentenceObj['polarity'] = getPolarity(sentenceObj['sentenceText'])
            sentenceObj['subjectivity'] = getSubjectivity(sentenceObj['sentenceText'])
    
    with open("../data/referencers.json","w") as write_file:
        json.dump(referencers, write_file)
        
    print("Successfully analysed sentence polarity and subjectivity.")

except Exception as e:
    print(e)
    print("Above error occurred while analysing sentence polarity and subjectivity.")
