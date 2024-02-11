# This python file reformatted the entire CMU pronounciation dictionary (CMUPD) into a json File
# CMUPD is infile.txt in same directory

# Open the file in read mode
with open("infile.txt", "r") as file:
    with open("outfile.json", "w") as outfile:

        # Read each line in the file
        for line in file:
            new_words = []
            # Split the line into words
            words = line.split()
            key = words[0]

            # Process each word
            for i, word in enumerate(words):
                # Skip the first word
                if i != 0:
                    cleaned_word = "".join(char for char in word if not char.isdigit())

                    if cleaned_word in ["AW"]:
                        new_words.append("AA")
                        new_words.append("W")
                    elif cleaned_word in ["AY"]:
                        new_words.append("AA")
                        new_words.append("IH")
                    elif cleaned_word in ["EY"]:
                        new_words.append("E1")
                        new_words.append("IH")
                    elif cleaned_word in ["OY"]:
                        new_words.append("AO")
                        new_words.append("IH")
                    elif cleaned_word in ["OW"]:
                        new_words.append("AO")
                        new_words.append("W")
                    elif cleaned_word in ["AXR", "ER"]:
                        a, b = cleaned_word[:-1], cleaned_word[-1]
                        b += "R"  # RR
                        new_words.append(a)
                        new_words.append(b)
                    elif cleaned_word in ["HH"]:
                        new_words.append("H")
                    elif cleaned_word in ["EL", "EM", "EN"]:
                        new_words.append(cleaned_word[-1])
                    elif cleaned_word in ["NX"]:
                        new_words.append("N")
                    else:
                        new_words.append(cleaned_word)

            value = new_words

            line_data = {key: value}

            outfile.write(f'"{key}": {value},\n')
