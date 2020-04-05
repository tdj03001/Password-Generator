# Password-Generator


# Purpose

The purpose of this application is to generate a random password based on user inputs. The user will be prompted to choose how long the password will be, and if they want to include at least one of the following character types: special characters, numbers, upper case letters, lower case letters. 


# Screenshot

![screenshot](Assets/images/Password-Generator-screenshot.png)

# Live Site

https://tdj03001.github.io/UPenn-Week-3-Homework-JS-Password-Generator/


# Usage

Upon clicking the Generate Password button, user will be prompted to enter a number between 8 and 128. If user enters an invalid response, validation message will appear and user will be prompted to enter a valid response.  
Next there will be a series of 4 confirmations where the user will have to click OK for at least one of the character types to be included in their password. If they click Cancel for all 4, they will be alerted that at least 1 must be chosen and they will start the process over from the beginning.  
The password will be displayed on the screen, and the user can choose to copy the password to their clipboard by clicking the Copy to Clipboard button.


# Known Issues

1. The app currently does not return more than one character and it is always a special character.  
  a. Resolution is planned for a forthcoming release.
2. The app currently does not acknowledge the user's responses to the 4 confirmations when generating the password.  
  a. Resolution is planned for a forthcoming release.

