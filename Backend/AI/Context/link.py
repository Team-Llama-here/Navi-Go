def generateLink(origin, destination, travel_mode='transit'):

    origin = origin.replace(' ', '+')
    destination = destination.replace(' ', '+')

    url = f'https://www.google.com/maps/dir/?api=1&origin={origin}&destination={destination}&travelmode={travel_mode}'

    return url

# Example usage:
# origin_location = 'central'
# destination_location = 'sholinganalur'
# google_maps_link = generate_google_maps_link(origin_location, destination_location)
# print(google_maps_link)

