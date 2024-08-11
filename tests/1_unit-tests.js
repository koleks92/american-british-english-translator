const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;


suite('Unit Tests', () => {
    suite('American to British', function() {
        test('Mangoes are my favorite fruit.', function() {
            assert.equal(translator.a2b('Mangoes are my favorite fruit.'), 'Mangoes are my favourite fruit.')
        });
        test('I ate yogurt for breakfast.', function() {
            assert.equal(translator.a2b('I ate yogurt for breakfast.'), 'I ate yoghurt for breakfast.')
        });
        test("We had a party at my friend's condo.", function() {
            assert.equal(translator.a2b("We had a party at my friend's condo."), "We had a party at my friend's flat.")
        });
        test("Can you toss this in the trashcan for me?", function() {
            assert.equal(translator.a2b("Can you toss this in the trashcan for me?"), "Can you toss this in the bin for me?")
        });
        test("The parking lot was full.", function() {
            assert.equal(translator.a2b("The parking lot was full."), "The car park was full.")
        });
        test("Like a high tech Rube Goldberg machine.", function() {
            assert.equal(translator.a2b("Like a high tech Rube Goldberg machine."), "Like a high tech Heath Robinson device.")
        });
        test("To play hooky means to skip class or work.", function() {
            assert.equal(translator.a2b("To play hooky means to skip class or work."), "To bunk off means to skip class or work.")
        });
        test("No Mr. Bond, I expect you to die.", function() {
            assert.equal(translator.a2b("No Mr. Bond, I expect you to die."), "No Mr Bond, I expect you to die.")
        });
        test("Dr. Grosh will see you now.", function() {
            assert.equal(translator.a2b("Dr. Grosh will see you now."), "Dr Grosh will see you now.")
        });
        test("Lunch is at 12:15 today.", function() {
            assert.equal(translator.a2b("Lunch is at 12:15 today."), "Lunch is at 12.15 today.")
        });
    })
    suite('British to American', function() {
        test('We watched the footie match for a while.', function() {
            assert.equal(translator.b2a('We watched the footie match for a while.'), 'We watched the soccer match for a while.')
        });
        test('Paracetamol takes up to an hour to work.', function() {
            assert.equal(translator.b2a('Paracetamol takes up to an hour to work.'), 'Tylenol takes up to an hour to work.')
        });
        test("First, caramelise the onions.", function() {
            assert.equal(translator.b2a("First, caramelise the onions."), "First, caramelize the onions.")
        });
        test("I spent the bank holiday at the funfair.", function() {
            assert.equal(translator.b2a("I spent the bank holiday at the funfair."), "I spent the public holiday at the carnival.")
        });
        test("I had a bicky then went to the chippy.", function() {
            assert.equal(translator.b2a("I had a bicky then went to the chippy."), "I had a cookie then went to the fish-and-fish-and-chip shop.")
        });
        test("I've just got bits and bobs in my bum bag.", function() {
            assert.equal(translator.b2a("I've just got bits and bobs in my bum bag."), "I've just got odds and ends in my fanny pack.")
        });
        test("The car boot sale at Boxted Airfield was called off.", function() {
            assert.equal(translator.b2a("The car boot sale at Boxted Airfield was called off."), "The swap meet at Boxted Airfield was called off.")
        });
        test("Have you met Mrs Kalyani?", function() {
            assert.equal(translator.b2a("Have you met Mrs Kalyani?"), "Have you met Mrs. Kalyani?")
        });
        test("Prof Joyner of King's College, London.", function() {
            assert.equal(translator.b2a("Prof Joyner of King's College, London."), "Prof. Joyner of King's College, London.")
        });
        test("Tea time is usually around 4 or 4.30.", function() {
            assert.equal(translator.b2a("Tea time is usually around 4 or 4.30."), "Tea time is usually around 4 or 4:30.")
        });
    })
});
