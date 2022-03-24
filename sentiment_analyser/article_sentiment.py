import pandas as pd
import json
from sentiment_functions import getPolarity
from sentiment_functions import getSubjectivity

# replace pandas library with json
try:
    # articles = pd.read_json('../data/articles.json')
    with open("../data/articles.json","r") as read_file:
        articles = json.load(read_file)
    
    for article in articles:
        article['polarity'] = getPolarity(article['articleText'])
        article['subjectivity'] = getSubjectivity(article['articleText'])
    
    with open("../data/articles.json","w") as write_file:
        json.dump(articles, write_file)
        
    print("Successfully analysed article polarity and subjectivity.")

except Exception as e:
    print(e)
    print("Above error occurred while analysing article polarity and subjectivity.")
