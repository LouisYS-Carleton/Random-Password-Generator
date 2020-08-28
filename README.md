# Random-Password-Generator

1. Plotted out JS pseudocode (Edit: erased at end to clean up code for myself, along with console.logs)

2. Created arrays for each of the different character types, along with one variable to store each of the different arrays.

3. Created global variables so all character types begin at "neutral" points. They are all declared "false" so that if the user chooses they would not like a character it is already done, but will then flip to "true" if "ok" is selected in the "confirm" box.

4. Created getCriteria function box to get the user's chosen password criteria. This mainly contains the code for the pop-ups presented to the user after "Generate Password" button is clicked.

5. Finally, I made a section to define the generatePassword function. This is where I wrote the code to apply what the user put into the "getCriteria" function to the password, as long as the values chosen/input by the user were valid. If they were valid, the function uses the chosen criteria to create the desired randomized password. If not, ie. if they chose no character types, then an alert saying "Sorry, please input valid password criteria!" will be displayed, followed by the "Secure Password" text changing to "Invalid Password Criteria, Try Again".

