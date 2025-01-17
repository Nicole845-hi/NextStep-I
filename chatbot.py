#using natural language proccesing and neural networks in python
import random
import json
import pickle
import numpy as np
import nltk
from nltk.stem import WordNetLemmatizer # Import the WordNetLemmatizer class 
from keras._tf_keras.keras.models import load_model # Import the Sequential class from the tensorflow.keras.mode 
lemmatizer = WordNetLemmatizer() # Create an instance of the WordNetLemmatizer class 
intents = json.loads(open('intents_spanish.json', 'r', encoding='utf-8').read()) # Load the int

words = pickle.load(open('words.plk', 'rb')) # Load the words.pkl file 
classes = pickle.load(open('clases.plk', 'rb')) # Load the classes.pkl file 
model = load_model('chatbot_model.h5') # Load the chatbot_model.model file

def clean_up_sentence (sentence): # Create a function to clean up the user's input 
    sentence_words = nltk.word_tokenize (sentence) # Tokenize the user's input
    sentence_words = [lemmatizer.lemmatize (word.lower()) for word in sentence_words] # Lemmatize return sentence_words # 
    return sentence_words

def bag_of_words (sentence): # Create a function to create a bag of words from the user's input 
    sentence_words = clean_up_sentence(sentence) # Clean up the user's input
    bag = [0] * len(words) # Create a list of os with the length of the words list
    for w in sentence_words: # Loop through the words in the user's input
        for i, word in enumerate (words): # Loop through the words list
            if word == w: # If the word is in the words list
                bag[i] = 1 # Set the value of the word in the bag to 1
    return np.array(bag) # Return the bag of words

def predict_class(sentence):
    bow = bag_of_words (sentence) # Create a bag of words from the user's input
    res = model.predict(np.array([bow]))[0] # Predict the class of the user's input
    ERROR_THRESHOLD = 0.25 # Set the error threshold to 0.25. Umbral de error, 25% de error, no queremo 
    results = [[i, r] for i, r in enumerate (res) if r > ERROR_THRESHOLD] # Create a list of the results 
    results.sort(key=lambda x: x[1], reverse=True) # Sort the list of results by the probability of the 
    return_list = [] # Create an empty list
    for r in results:
        return_list.append({'intent' : classes[r[0]], 'probability': str(r[1])})
    return return_list


def get_response(intents_list, intents_json):
    tag = intents_list[0]['intent'] # Get the tag of the intent
    list_of_intents = intents_json['intents'] # Get the list of intents
    for i in list_of_intents: # Loop through the list of intents
        if i['tag'] == tag: # If the tag is equal to the tag of the intent
            result = random.choice (i['responses']) # Get a random response from the intent
            break # Break out of the loop
    return result # Return the response