### Navi-Go
<center>
  
![](https://github.com/Team-Llama-here/Navi-Go/blob/main/assests/app.jpeg){:height="200px"}


</center>

### Problem/Solution:

Navi-Go, developed by Team Llama, addresses urban mobility challenges by offering innovative solutions such as ticket booking, real-time traffic updates, and finding the shortest routes. The team identified language as a barrier and introduced Navi-Go with a conversational language model, enabling multilingual interactions. This facilitates easy access to features like live bus updates, real-time announcements, route exploration, and reporting issues. The system also promotes environmentally friendly practices, encouraging users to adopt sustainable habits for a greener urban mobility experience.
### Link to the Web Application, Demo, Presentation:

- You can access and try our application [click here.](navi-go-pragyan.web.app/)
- Watch the live video demo here.
- View the technical presentation of the application [click here.](https://drive.google.com/file/d/1Ux0_1Wc5C80YH_nJKh4lhq_m3Jg7NHKy/view?usp=drive_link)

### User Manual:

Upon opening our webpage, you will encounter the homepage featuring our in-house conversational transit assistance with multilingual capabilities. We have successfully implemented both English and Tamil, and users can switch between them using the top-left button.

The conversational agent can be activated by pressing the mic button on the screen. At the bottom, there are navigation bars to explore other functionalities of the application.

1. The leftmost icon is for navigating to the home section.
2. The second icon from the left provides live announcements from urban transport planners or the transport department.
3. The middle icon directs users to the chat interface with multilingual understanding in both voice and text-based interactions.
4. Users can report inconveniences and issues to the transport department through the conversational mode. The second icon from the right guides users to the interface for checking raised complaints, responses from officials, and awareness regarding practices.
5. The rightmost icon is for accessing user account and credential details.

### Capabilities of STELLA.AI, the In-House Assistant of NAVI-GO:

1. The assistant can provide real-time transit information, including trains, buses, and other modes of transport from the origin place to the destination. Try asking the assistant for transit details in both English and Tamil languages.
2. The assistant can assist you in real-time by providing ideas to navigate through heavy traffic areas. Try asking for alternative routes to escape from the traffic.
3. To raise issues or complaints with the transport department or urban traffic planners, ask the assistant to register a complaint. Navigate to the second button from the right side of the navigation bar and then select "Complaints."

### Real-Time Announcement by Urban Planners and the Transport Committee:

Having real-time updates on transport and urban mobility planners is made easy with real-time notifications by our system in multiple languages, keeping the community informed.

### System Architecture:
![](https://github.com/Team-Llama-here/Navi-Go/blob/main/assests/navigo_archi.jpeg)

### Technologies Being Used:

1. For natural language understanding in multiple languages and conversation, we used Gemini, the foundational model of Google, along with GPTs from OpenAI. [refer](https://platform.openai.com/api-keys)
2. To obtain real-time transit data, we used Google Transit API and the Navigation API. [refer](https://developers.google.com/maps/documentation/routes/transit-route)
3. Firebase Cloud Messaging and Fast APIs are used to send real-time notifications from the transport department or urban planners to all users. 
4. The front end is developed with React, and data, including complaints, is stored in PostgreSQL.
5. Translational modules from Google are used for multilingual translation.
