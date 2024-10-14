# HackPSU - Cook It Up!

**Cook It Up** is a Snapchat Spectacles Lens built in Lens Studio for the Snap AR challenge at HackPSU Fall 2024.

The project won **2nd place** out of 12 teams!

## Demo

<img src='demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Inspiration
The idea for **Cook It Up** came from those moments of fridge confusion—when you're staring at a random assortment of leftovers, unsure what to make. Having previously used **Snap AI** for meal prepping and calorie tracking, we wanted to take things further. The goal was to create a fun, interactive experience that takes the guesswork out of cooking by suggesting easy recipes based on whatever ingredients you have. It's all about making cooking spontaneous, simple, and a bit more exciting!

## What it does
With **Cook It Up**, users are presented with three choices. If they choose to input their ingredients, they can do so using their voice, and watch as the recipe options dynamically change. Once a dish is selected, users can view the full recipe and start cooking right away. It’s a hands-free, intuitive way to turn leftovers into a delicious meal!

## How we built it
- We used the **Snap voice ML module** to create the voice-powered ingredient input system.
- The **Chat-GPT API** handles the generation of suitable recipes based on those ingredients.
- To top it all off, we used **Lens Studio's Gen-AI suite** to design the friendly mascot that guides users through the experience.

## Challenges we ran into
- Setting up **Lens Studio** and integrating the **voice ML module** was trickier than expected.
- We faced **data privacy concerns** while connecting the voice ML module to the Chat-GPT API.
- The voice ML module worked perfectly on a laptop, but gave us trouble when integrated into the spectacles itself.

## Accomplishments that we're proud of
- The idea itself! It's a fresh way to tackle cooking with leftovers.
- We created a **polished end product** that feels both functional and fun.
- We took on **Lens Studio** for the first time and learned a lot along the way.

## What we learned
- Gained valuable experience with **Lens Studio** and its capabilities.
- Delved into using **Gen AI tools**.
- Picked up some **TypeScript** along the way.

## What's next for Cook It Up
The next steps are exciting! We're planning to:
- Add **object detection** so users can visually input ingredients.
- Build a feedback system that tracks which recipes users enjoy and tailors future suggestions based on their preferences.

With these upgrades, **Cook It Up** will be even more personalized and user-friendly!`
