# MyFriends
React Native app that lets you add details about your friends like birthday dates, addresses, fun facts, and etc..
<div> The application will save these details offline, as it uses the AsyncStorage library. </div> 

<div>
  <img width="200" alt="Screenshot 2023-04-17 at 11 26 11 PM" src="https://user-images.githubusercontent.com/78581216/232679202-2fbf478c-d114-4526-a724-aac04f7a1441.png">
<img width="215" alt="Screenshot 2023-04-17 at 11 28 45 PM" src="https://user-images.githubusercontent.com/78581216/232679611-f8dbe103-fdb4-4707-b7cd-f32289396338.png">
<img width="200" alt="Screenshot 2023-04-17 at 11 49 34 PM" src="https://user-images.githubusercontent.com/78581216/232683054-d7597e3b-625e-4e71-aa08-2b18457f1a85.png">
<img width="200" alt="Screenshot 2023-04-17 at 11 50 56 PM" src="https://user-images.githubusercontent.com/78581216/232683232-4ae40d5e-a5a2-4375-8259-f2ad353e1d49.png">

</div>

## Why did I make this?
I thought this was a good introduction for learning React Native. The idea was,
I tend to forget details like phone numbers and addresses for my friends. So I wanted to build an application that stores this information for you.
I also wanted it to grab this information in a convenient way, so I also wanted to add a clipboard feature.
With an idea like this I thought it was small, but challenging enough for me to really learn the process of creating apps with react native.
I built the whole thing from scratch as I did not watch any tutorials.
I did read an article on Medium on how to make a basic todo list, but that was pretty much it.
## Features I made:
- Displaying friends in a ScrollView
- Adding friends gets added as an object in local storage. Each person is assigned an id so you can add/edit/delete it in the friends array
- Deleting friends will permanently delete the object in local storage
- Editing friends will alter the object in local storage
- Adding profile pictures
- Date Picker for birthday
- Clipboard feature, you can tap on an information and it will automatically copy it in your clip board :)

I also made the interface from scratch

## What I learned:
Despite such a small project, I surprisingly learnt a lot. Some of the things I learned were:
- State management
- Hooks such as useState, useEffect, useRef, etc..
- Styling with Stylesheets
- AsyncStorage
- Stack navigation
- The Expo framework

## Bugs
Since this was an introduction project I didn't test it as thoroughly as I should have so there are some undetected bugs. One of the ones I've caught is the date picker being 
a day ahead compared to the state representing the date. I don't know why this happens. As far as I know it's some quirky aspect about the Date object in JavaScript.
