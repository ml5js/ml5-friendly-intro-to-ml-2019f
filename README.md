# A Friendly Introduction to Machine Learning with ml5.js
> Prepared for Golan Levin's [Interactivity and Computation](http://cmuems.com/2019/60212/) at [CMU](studioforcreativeinquiry.org) by [Joey Lee](https://jk-lee.com/work/) <br/>
> Forked from [The intro to ML with ml5.js](https://github.com/ml5js/ml5-friendly-intro-to-ml) originally prepared for ITP Camp by [Yining Shi](http://1023.io/) & [Joey Lee](https://jk-lee.com/work/)
> 
> keywords: machine learning, ml5.js, p5.js, friendly, introduction, workshop <br/>
> Support generously provided by: [The Frank-Ratchye STUDIO for Creative Inquiry at Carnegie Mellon University](studioforcreativeinquiry.org) and NYU's [Interactive Telecommunications Program](https://tisch.nyu.edu/itp).


## TLDR

* This is an introductory workshop to machine learning with ml5.js
* Context/Audience: prepared for Golan Levin's [Interactivity and Computation](http://cmuems.com/2019/60212/) at CMU. Students in this course are are creative tech folks or creative tech adjacent and are considered "intromediates" -- "*students develop the skills and confidence to produce interactive artworks, discuss their work in relation to current and historic praxes of digital art, and engage new technologies critically*." -- but we hope this workshop can be used with audiences of all shapes and types.
* General overview of machine learning concepts and terms with emphasis on learning through making.
* We use ml5.js, a javascript library to do machine learning for the web. 

## About

Welcome to this friendly introduction to machine learning with ml5.js. We're happy you're here.

## Code of Conduct

ml5.js is about machine learning and people. A major part of the ml5.js project is about creating broader engagement with machine learning and its effects on you, me, and the people and environment. As a user of ml5.js you are agreeing to abide by the ml5.js [code of conduct](https://github.com/ml5js/ml5-library/blob/development/CODE_OF_CONDUCT.md). It's easy and fun to be nice and respectful to those around you. Let's have a wonderful workshop together. If you're looking for more details on what constitutes being "not nice" please see [Mozilla's Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) which are applicable to the space that ml5.js wants to create. 

If you have any questions or need to report any issues please contact: info@ml5js.org


## Overview:
- [Agenda](#agenda)
- [Key Questions and Takeaways](#key-questions)
- [Introduction to machine learning](#introduction-to-machine-learning)
- [Introduction to ml5.js](#introduction-to-ml5js)
- [Coding Session](#coding-session)

## Agenda
>  ~3 hours

+ Hello! (5 mins)
+ Intro to Machine Learning (30 mins)
+ Intro to ml5.js (15 mins)
+ 10 Min Break
+ Coding Session Part 1 (~30 mins)
+ Coding Session Part 2 (~45 mins)
+ Project Shareouts (20 mins)
+ Q&A, Closing notes (10 mins)

## Key Questions

> This is an introductory workshop to machine learning. We are focused on helping you to not only *learn through making* but also start to *reflect through making*. The following questions are here to help focus the **learning** and **reflecting**. 

+ "Machine learning is programming with `__________` rather than `____________`." - Kyle McDonald
+ Why are data central to machine learning? 
+ What do we mean by "good" data vs. "bad" data? Why does this matter for machine learning?
+ What are the implications of all the advancements and increasing availability in machine learning tools and capabilities?
+ What is the role of art and design in machine learning today?


## Slides
+ [Link to slides](https://docs.google.com/presentation/d/1C5V6YOs4hgWFeKKdpGwNjeRLuYOCwipLlSzKNOzsUnQ/edit?usp=sharing): Slide presentation with introductions, overview of terms, project highlights and more.

***
## Introduction to Machine Learning
***

### The AI/ML universe

> AI/ML isn't just about advancements in technology, it is about a broader universe of things that are coming together (or diverging). These include changes (or lackthereof) in governance, cultural and social interactions with, awareness of, and attitudes, and feelings towards these new technologies, the development of new tools and communities around and against AI/ML, expansion of AI/ML education, and use of AI/ML in art and design or other domains outside "traditional AI/ML" spaces (e.g. engineering and computer science). 
>
> We increasingly interact with machine learning every day, whether it is through the way we access content through media providers such as Netflix, Twitter, and Instagram, or how we get from A to B on transit and vehicles. These increasingly algorithmically and data driven interactions do not come from the ether, but rather are the result of a complex and chaotic assemblage of social and technical forces.
>
> It is worth thinking about how the following factors affect or are affected by changes in AI/ML.

+ Research
+ Policies
+ Environment
+ Tools
+ Communities
+ Education
+ Art/Design


### Terms

> Collected from [Yining's Week 1 of Machine Learning for the Web](https://docs.google.com/presentation/d/1s0iT382Pl1DMGKb5xhk7_V3DlW1QQHfHs4snNoS_sIU/edit#slide=id.g40fd84b173_0_613)

- **Artificial Intelligence**:
  - AI is the science of making things smart:
  - Human Intelligence Exhibited by Machines
  - A broad term for getting computers to perform human tasks
  - **General AI**: fabulous machines that have all our senses (maybe even more), all our reason, and think just like we do.
  - Most of AI today is **Narrow AI** systems that can only do one (or a few) defined things as well or better than humans.
- **Machine Learning**:
  - One of the Approaches to Achieve Artificial Intelligence
  - A field of computer science that uses statistical techniques to give computer systems the ability to "learn" with data, without being explicitly programmed.
  - LOTS OF DATA
  - **Types of machine learning learning styles**:
    - **Supervised Learning**: 
      - Training data is labeled
    - **Unsupervised Learning**: 
      - The machine learn from an unlabelled data set.
      - Unsupervised learning can be grouped into clustering and dimensionality reduction.
    - **Reinforcement Learning**:
      - The machine learn by trial-and-error through reward or punishment.
  - **Types of machine learning outputs**:
    - **Regression**: Predict continuous values (price of a stock)
    - **Classification**: Predict a class/label (cat or dog?)
    - **Clustering**: Groupings based on potential relationships in the data - Most similar other examples (Amazon related products recommendation)
    - **Sequence Prediction**: Predict the next value/number/word/sentence in a sequence - e.g. the next chord in a melody
  - **Types of machine learning use cases**:
    - Object Recognition
    - Speech and Sound Detection
    - Natural Language Processing
    - Prediction
    - Translation
- **Deep Learning**:
  - A technique for implementing Machine Learning
  - Deep learning - Uses multi-layered artificial neural networks to deliver state-of-the-art accuracy.
  - Can automatically learn representations/features from data such as images, video or text.
 
### The Machine Learning Process:

> The process of machine learning is messy. Like most data related projects, 80% of your time or more will be spent cleaning and preparing data for use. The rest of the time will be the actual "making" of your project. The machine learning process might be broadly (over)simplified into a handful of steps which includes: Data collection, data preparation, Training a machine learning model, and product/service integration.

* **Data collection**
  * E.g. an artist writes a script to automatically download all images of cats, dogs, and badgers from the internet. 
* **Data preparation**
  * E.g. the artist uses a crowd tasking service to 1. confirm that the image is either a cat, dog or badger, 2. Tag the image with the animal type, 3. Crop the image of the animal to a square aspect ratio. The artist then resizes all the images to 64x64px
* **Training a machine learning model**
  * E.g. the artist: 1. Uses a popular machine learning framework called Tensorflow in python to create a neural network. To create a neural network the artist, writes code that specifies image processing and data crunching methods that aim to pull out unique features for each animal type in the given images. The artist then 2. Iteratively refines and tests the model to achieve the highest accuracy.
* **Product/service integration...and awesome art projects**
  * E.g. the artist opensources this new pre-trained dog/cat/badger model. This comes just in time since the ASPCA in NYC has been in great need of a method to differentiate between the animals in their shelters. The artist is hired to create a web application that uses this model to label their shelter animals “cat”, or “dog” or “badger”. 

***
## Introduction to ml5.js
***

### ml5 Resources

<!-- TODO -->
+ [ml5.js **website**](https://ml5js.org/): 
  + The main ml5.js website
+ [ml5 **documentation**](https://learn.ml5js.org/docs/#/)
  * the documentation page for ml5
+ [ml5.js **organization**](https://github.com/ml5js): 
  + The ml5.js github organization. Here you can see all the repositories that make up the ml5.js project.
+ [ml5.js **library**](https://github.com/ml5js/ml5-library):
  + The main library for ml5.js. This is where all the ✨happens!
+ [ml5.js **examples**](https://github.com/ml5js/ml5-examples):
  + The examples that correspond to all of the functions that are available in the ml5.js library. Emphasis is given to p5.js examples.
  + [Index of all the ml5 examples](https://ml5js.github.io/ml5-examples/public/)
+ [ml5.js examples on **p5 web editor**](https://editor.p5js.org/ml5/sketches)
  + The examples can be found as well in the p5 web editor. You can run the sketches directly and tweak the examples as you'd like. Note, some of the examples currently do not work in the editor.  
+ [ml5.js Medium blog page](https://medium.com/@ml5js) 
  + ml5's Medium blog page.


### ml5 in 3 steps

![ml5 in 3 steps](assets/ml5-in-3-steps.png)

***
## Coding Session
***

### Coding Session Part 1: Code-a-long Session

During this code-a-long session, we will walk through several features of ml5.js. Specifically we will walk through the following features: We will start with a blank [ml5 boilerplate on the p5 web editor](https://editor.p5js.org/joeyklee/sketches/o93UflRahJ) for these examples.

* Pretrained models:
  * Example: image classifier -- classifying an image
    * [demo](https://editor.p5js.org/ml5/sketches/ImageClassification_Video)
  * Example: PoseNet -- detecting and estimating features of a human pose
    * [demo](https://editor.p5js.org/ml5/sketches/PoseNet_part_selection)
  * Example: FaceApi -- detecting and estimating features of a human face
    * [demo](https://editor.p5js.org/joeyklee/sketches/wPhdku-Ji)
  * Example: Sentiment -- estimating the sentiment (0: negative, 1: positive) of text content
    * [demo](https://editor.p5js.org/ml5/sketches/Sentiment_Interactive)
* Training your own model:
  * Example: Neural Network - using existing data to train a classifier from a JSON file
    * [demo](https://editor.p5js.org/ml5/sketches/NeuralNetwork_color_classifier)
  * Example: Neural Network - using existing data to train a regression from a CSV file
    * [demo](https://editor.p5js.org/ml5/sketches/NeuralNetwork_co2net)
  * Example: Neural Network - training & interacting with a simple classifier with data produced in real-time
    * [demo](https://editor.p5js.org/ml5/sketches/NeuralNetwork_xy_classifier)

### Coding Session Part 2: Build an interactive ML application

In this short 45 min session, select a pre-trained model (e.g. PoseNet) or build your own custom neural network to make a *simple* interactive web application you can share with your classmates. Team up in groups of 2 or more. 

→ Use this [ml5 boilerplate on the p5 web editor](https://editor.p5js.org/joeyklee/sketches/o93UflRahJ) to get started. OR feel free use your favorite text editor and development environment.

* **ml5 documentation**:
  * [ml5 documentation](https://learn.ml5js.org/docs/#/)
* **ml5 examples**
  * [ml5 examples in the p5 web editor](https://editor.p5js.org/ml5/sketches)
  * [Github Repository with code](https://github.com/ml5js/ml5-examples)
  * [Index of all the ml5 examples](https://ml5js.github.io/ml5-examples/public/)
**Some ideas to spark your creativity:**
  * [ml5 community page](https://ml5js.org/community)
  * [Unicorn racing game](https://editor.p5js.org/yining/sketches/TSDkyI-Sy)



***
***
***

***
## References
***


### Online Learning Materials, Courses, and Workshops
+ [Yining Shi](http://1023.io/)'s ["Machine learning for the web" course](https://github.com/yining1023/machine-learning-for-the-web) at NYU's ITP.
+ [Machine Learning Workshop by @AndreasRef](https://andreasref.github.io/ml/)
+ [Coding Train Video Series](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw):
  + [A Beginner's Guide to Machine Learning with ml5.js](https://www.youtube.com/watch?v=jmznx0Q1fP0&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y)
  + [Neural Networks and Machine Learning](https://www.youtube.com/user/shiffman/playlists?view=50&sort=dd&shelf_id=16)
+ [Two Minute Papers](https://www.youtube.com/channel/UCbfYPyITQ-7l4upoX8nvctg)
+ [Udemy - Machine learning with Javascript](https://www.udemy.com/machine-learning-with-javascript/)
+ [Hands-On Machine Learning with Scikit-Learn and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems](https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1491962291)
+ [3 Blue 1 Brown - Neural Networks](https://www.3blue1brown.com/neural-networks)

### Presentation References (see slides)
* [Facial Recognition Tech Is Growing Stronger, Thanks to Your Face, New York Times](https://www.nytimes.com/2019/07/13/technology/databases-faces-facial-recognition-technology.html)
* [Eye Conductor, Andreas Refsgaard](https://andreasrefsgaard.dk/project/eye-conductor/ )
* [Training a single AI model can emit as much carbon as five cars in their lifetime, MIT Tech Review](https://www.technologyreview.com/s/613630/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/)
* [Deep Learning and Carbon Emissions, Lukas Biewald](https://towardsdatascience.com/deep-learning-and-carbon-emissions-79723d5bc86e)
* [One Month, 500,000 Face Scans: How China Is Using A.I. to Profile a Minority, New York Times](https://www.nytimes.com/2019/04/14/technology/china-surveillance-artificial-intelligence-racial-profiling.html?module=inline)
* [Red Feed, Blue Feed, Wall Street Journal](https://graphics.wsj.com/blue-feed-red-feed/#/immigration)
* [OpenAI's GP-T2 text generation algorithm](https://www.technologyreview.com/s/612960/an-ai-tool-auto-generates-fake-news-bogus-tweets-and-plenty-of-gibberish/)
* [Yining Shi's Machine Learning for the Web course at NYU's ITP](https://github.com/yining1023/machine-learning-for-the-web)
* [Courtney Morgan, Processing Fellow](https://www.chalkbeat.org/posts/ny/2019/02/04/computer-science-can-change-how-students-who-struggle-in-math-see-themselves-ive-watched-it-happen/)
* [re:ImageNet Roulette, Gaurdian](https://www.theguardian.com/technology/2019/sep/17/imagenet-roulette-asian-racist-slur-selfie)
* [Excavating AI, Crawford & Paglen](https://www.excavating.ai/)
* [ImageNet Roulette, Crawford & Paglen](http://image-net.org/update-sep-17-2019)
* [San Francisco bans the use of facial recognition tech, WIRED](https://www.wired.com/story/san-francisco-bans-use-facial-recognition-tech/)
+ [AI Winter](https://en.wikipedia.org/wiki/AI_winter)
+ [Book of Shaders](https://thebookofshaders.com/) - referred to for explaining CPU vs. GPU
+ [Red Burns, Founder of ITP](https://en.wikipedia.org/wiki/Red_Burns)
+ [P5.js](https://p5js.org/)

### Project References
+ Various curated ML projects  
  + [ML projects and inspiration](https://github.com/yining1023/machine-learning-for-the-web/wiki/References---Inspiration---Links)
  + [ml5.js community section](https://ml5js.org/community)
+ [Dan Shiffman's EyeO Talk 2019](https://github.com/CodingTrain/Eyeo-Festival-2019)
+ [Experiments with Google](https://experiments.withgoogle.com/)
+ [Food Chain Game](https://wp.nyu.edu/lillianritchie/2019/05/13/nature-of-code-final-food-chain-game/) by [Lillian Ritchie](https://wp.nyu.edu/lillianritchie/)

***
## Tools
***

#### Friendlier ML tools
+ [ml5.js](https://ml5js.org/)
+ [RunwayMl](https://runwayml.com/) - Machine learning for creators. "Bring the power of artificial intelligence to your creative projects with an intuitive and simple visual interface. Start exploring new ways of creating today."
+ [Google's teachable machine](https://teachablemachine.withgoogle.com/) - do transfer learning in the browser with google's teachable machine.

#### ML APIs for Python and javascript (advanced)
+ [Tensorflow](https://www.tensorflow.org/overview/) for python 
+ [Tensorflowjs](https://www.tensorflow.org/js/) - TensorFlow.js is a library for developing and training ML models in JavaScript, and deploying in browser or on Node.js 
+ [Keras](https://keras.io/) - Keras: The Python Deep Learning library

#### Cloud computing (advanced)
+ [Google co-lab](https://colab.research.google.com/) - 
+ [Spell.run](https://spell.run/) - "The most flexible and powerful end-to-end platform for ML and deep learning engineering." 
+ [Paperspace](https://www.paperspace.com/) - "The first cloud built for the future. Powering next-generation applications and cloud ML/AI pipelines."

***
***
***

## Additional Acknowledgements

+ [Openmoji](https://openmoji.org/) - "Open-source emojis for designers, developers and everyone else!"
