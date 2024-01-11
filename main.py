# import tkinter as tk

# def greet():
#     name = entry.get()
#     greeting = f"Hello, {name}!"
#     label.config(text=greeting)

# # Create the main window
# window = tk.Tk()
# window.title("Greeting App")

# # Create and pack widgets
# label = tk.Label(window, text="Enter your name:")
# label.pack(pady=10)

# entry = tk.Entry(window)
# entry.pack(pady=10)

# button = tk.Button(window, text="Greet", command=greet)
# button.pack(pady=10)

# # Run the Tkinter event loop
# window.mainloop()





# import turtle

# def draw_greeting():
#     # Set up the turtle screen
#     screen = turtle.Screen()
#     screen.bgcolor("lightblue")

#     # Create a turtle named 'greeting_turtle'
#     greeting_turtle = turtle.Turtle()
#     greeting_turtle.shape("turtle")
#     greeting_turtle.color("darkblue")
#     greeting_turtle.pensize(2)
#     greeting_turtle.speed(2)

#     # Move the turtle to the starting position
#     greeting_turtle.penup()
#     greeting_turtle.goto(-50, 0)
#     greeting_turtle.pendown()

#     # Write the greeting message
#     greeting_turtle.write("Hello, Python!", font=("Arial", 16, "bold"))

#     # Close the turtle graphics window on click
#     screen.exitonclick()

# # Call the function to draw the greeting
# draw_greeting()


from PIL import Image, ImageDraw, ImageFont

def create_birthday_greeting(output_path, name):
    # Create a blank image with a white background
    width, height = 600, 400
    image = Image.new("RGB", (width, height), "white")
    draw = ImageDraw.Draw(image)

    # Use a default font
    font = ImageFont.load_default()

    # Add a birthday message
    message = "Happy Birthday, " + name + "!"
    text_width, text_height = draw.textsize(message, font)
    text_position = ((width - text_width) // 2, (height - text_height) // 2)
    draw.text(text_position, message, font=font, fill="black")

    # Save the image
    image.save(output_path)

if __name__ == "__main__":
    # Replace "output.png" with the desired output file path
    output_path = "output.png"

    # Replace "John" with the name of the person you want to greet
    name = "John"

    create_birthday_greeting(output_path, name)

