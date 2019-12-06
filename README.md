# UPenn-Week-3-Homework-JS-Password-Generator

Password Generator

Purpose

The purpose of this application is to generate a random password based on user inputs. The user will be prompted to choose how long the password will be, and if they want to include at least one of the following character types: special characters, numbers, upper case letters, lower case letters. 


Screenshot

![screenshot](Assets/images/Password-Generator-screenshot.png)

Link to the webapp: https://tdj03001.github.io/UPenn-Week-3-Homework-JS-Password-Generator/


Usage

Upon clicking the Generate Password button, user will be prompted to enter a number between 8 and 128. If user enters an invalid response, validation message will appear and user will be prompted to enter a valid response.  
Next there will be a series of 4 confirmations where the user will have to click OK for at least one of the character types to be included in their password. If they click Cancel for all 4, they will be alerted that at least 1 must be chosen and they will start the process over from the beginning.  
The password will be displayed on the screen, and the user can choose to copy the password to their clipboard by clicking the Copy to Clipboard button.


Known Issues

1. The app currently does not return more than one character and it is always a special character.  
  a. Resolution is planned for a forthcoming release.
2. The app currently does not acknowledge the user's responses to the 4 confirmations when generating the password.  
  a. Resolution is planned for a forthcoming release.



Sources:
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_return2   (I used this as a reference to figure out how to get something to show up in the <textarea> of my page.)

https://www.w3schools.com/js/js_comparisons.asp    (I used this to find the "not equal to" operator !==)

https://www.kirupa.com/html5/picking_random_item_from_array.htm    (Used this page for help with random value selection from arrays.)

https://www.w3schools.com/howto/howto_js_copy_clipboard.asp    (Showed me how to copy password to clipboard )