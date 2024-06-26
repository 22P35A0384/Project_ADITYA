######################
#Main
######################
from flask import Flask, render_template, request, redirect, url_for, jsonify, Response
import os
import requests

######################
#imports for web cam
#####################
import cv2
# import boto3
# import io
import tkinter as tk
from tkinter import ttk
# from PIL import Image, ImageTk
from PIL import ImageTk
import base64

######################
#imports for image recognition
######################
import boto3
import io
from PIL import Image

app = Flask(_name_)

# # OpenCV VideoCapture object
# cap = cv2.VideoCapture(0)

# # Global variables to store the captured image and data
# captured_image = None
# captured_data = {"Name": "Simhadri"}

# def generate_frames():
#     global captured_image, captured_data

#     while True:
#         # Read a frame from the webcam
#         success, frame = cap.read()
#         if not success:
#             break

#         # Apply your template processing here (e.g., using OpenCV functions)

#         # Display the captured image at the bottom of the frame
#         if captured_image is not None:
#             frame[480:, :] = captured_image

#         # Encode the frame to JPEG format
#         _, buffer = cv2.imencode('.jpg', frame)
#         frame_bytes = buffer.tobytes()

#         # Generate HTML for the captured data
#         data_html = f"<table><tr><th colspan=2>Student Details</th></tr>{''.join([f'<tr><td>{key}</td><td>{value}</td></tr>' for key, value in captured_data.items()])}</table>"

#         # Yield the frame and HTML in the response
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n\r\n'
#                b'Content-Type: text/html\r\n\r\n' + data_html.encode() + b'\r\n\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/IndexOld')
def IndexOld():
    return render_template('index_enterButton.html')

# @app.route('/video_feed')
# def video_feed():
#     return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('/capture_image')
# def capture_image():
#     global captured_image
#     # Capture an image from the webcam
#     _, captured_frame = cap.read()
#     captured_image = captured_frame[480:, :]
#     print(captured_image)
#     return render_template('index.html', image_data=captured_image, captured_data=captured_data)

# @app.route('/button_click', methods=['POST'])
# def button_click():
#     # Handle button click logic here
#     return "Button clicked!"





@app.route('/capture_image', methods=['POST'])
def capture_image():
    try:
        # Get the captured image data from the request
        data = request.json
        image_data_url = data.get('imageDataUrl', '')

        # Extract the base64-encoded image data
        _, encoded_data = image_data_url.split(',', 1)
        image_binary = base64.b64decode(encoded_data)

        # Specify the directory to save the captured images
        save_directory = 'captured_images'
        if not os.path.exists(save_directory):
            os.makedirs(save_directory)

        # Save the image file (you may want to generate a unique filename)
        image_filename = os.path.join(save_directory, 'captured_image.png')
        with open(image_filename, 'wb') as image_file:
            image_file.write(image_binary)

        print(image_filename)

        ########################
            ####################
                #AWS Rekognition
            ####################
        ########################

        rekognition = boto3.client('rekognition', region_name='us-east-1')
        dynamodb = boto3.client('dynamodb', region_name='us-east-1')

        image_path = image_filename

        # image = Image.open(image_path)

        try:
            image = Image.open(image_path)
            # If the code reaches here, the image was opened successfully
            print("Image opened successfully!")
            # You can now perform further operations on the 'image' object
        except Exception as e:
            # If an exception occurs, print an error message
            print(f"Error opening the image: {e}")


        # Check if the image has an alpha channel (transparency)
        # if image.mode == 'RGBA':
        #     print("Image is problem")
        #     # Create a new image with a white background
        #     rgb_image = Image.new('RGB', image.size, (255, 255, 255))
        #     # Paste the RGBA image onto the new RGB image, removing transparency
        #     rgb_image.paste(image, (0, 0), image)
        # else:
        #     print("Image is already in RGB mode, no need for conversion")
        #     # Image is already in RGB mode, no need for conversion
        #     rgb_image = image

        stream = io.BytesIO()
        # image.save(stream, format="JPEG")

        rgb_image = image.convert("RGB")


        try:
            # Save the image in JPEG format
            rgb_image.save(stream, format="JPEG")
            # image.save(stream, format="JPEG")
        except Exception as e:
            print(f"Error saving image: {e}")

        image_binary = stream.getvalue()
        
        print("TEsting coming here5")

        response = rekognition.search_faces_by_image(
                CollectionId='thubemployees',
                Image={'Bytes':image_binary}                                       
                )

        found = False


        for match in response['FaceMatches']:
            # print (match['Face']['FaceId'],match['Face']['Confidence'])
                
            face = dynamodb.get_item(
                TableName='facerecognition',  
                Key={'RekognitionId': {'S': match['Face']['FaceId']}}
                )
            
            if 'Item' in face:
                # print ("Found Person: ",face['Item']['FullName']['S'])
                #return "Found Person: " + face['Item']['FullName']['S']

                # Get found Details
                # response = requests.post(url="",data="")
            
                # Replace the URL below with the actual API endpoint you want to call
                api_url = 'https://dev.technicalhub.io/codemind/api/thub_app/anniversary_api.php'
                # Define parameters to pass to the API
                # print(face['Item']['FullName']['S'])

                params = {
                    'Action': "Details",
                    'Email': face['Item']['FullName']['S']
                }

                try:
                    # Make a GET request to the API
                    response = requests.post(api_url, json=params, verify=False)

                    # Check if the request was successful (status code 200)
                    if response.status_code == 200:
                        # Parse the JSON response
                        data = response.json()

                        # Do something with the data
                        # For example, return it as JSON in your Flask response
                        return data
                    else:
                        # If the request was not successful, return an error message
                        return jsonify({'error': f'API request failed with status code {response.status_code}'})

                except Exception as e:
                    # Handle exceptions such as network errors or invalid JSON
                    return jsonify({'error': f'An error occurred: {str(e)}'})

                found = True

        if not found:
            # print("Person cannot be recognized")
            data = {}
            return data
            
        return "Image captured successfully"
        
    except Exception as e:
        return f"Error capturing and saving image: {str(e)}", 500

if _name_ == '_main_':
    app.run(debug=True)