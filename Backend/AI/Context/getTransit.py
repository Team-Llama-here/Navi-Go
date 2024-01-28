'''
what vehicles are available from those routes?
return accordingly the asked vehicle details.
'''
import googlemaps
from datetime import datetime
import json
from .Variables import TAPI_KEY

def get_transit_directions(origin, destination, mode="transit", departure_time=None):
    gmaps = googlemaps.Client(key=TAPI_KEY)

    # Set the departure time (optional, defaults to now)
    departure_time = departure_time or datetime.now()

    # Request directions via public transit
    try:
        directions_result = gmaps.directions(
            origin,
            destination,
            mode=mode,
            departure_time=departure_time
        )
        fare=None
        try:
            fare=directions_result[0]['fare']['value']
        except:
            fare=None
        buses=[]
        trains=[]
        if(len(directions_result)>0):
            distance=directions_result[0]['legs'][0]['distance']['text']
            for step in directions_result[0]['legs'][0]['steps']:
                if step['travel_mode'] == 'TRANSIT':
                    transit_details = step['transit_details']
                    if(transit_details['line']['vehicle']['type']=="BUS"):
                        
                        cache=[]
                        cache.append(transit_details['line']['short_name'])
                        cache.append(transit_details['departure_stop']['name'])
                        cache.append(transit_details['departure_time']['text'].replace('\u202f',' '))
                        cache.append(transit_details['arrival_stop']['name'])
                        cache.append(transit_details['arrival_time']['text'].replace('\u202f',' '))
                        buses.append(cache)
                    traindet=transit_details['line']['vehicle']['type']=="HEAVY_RAIL"
                    if(traindet):
                        cache=[]
                        cache.append(transit_details['line']['name'])
                        cache.append(transit_details['departure_stop']['name'])
                        cache.append(transit_details['departure_time']['text'].replace('\u202f',' '))
                        cache.append(transit_details['arrival_stop']['name'])
                        cache.append(transit_details['arrival_time']['text'].replace('\u202f',' '))
                        trains.append(cache)

            return {"source":origin, "destination":destination, "fare":fare,"distance":distance,"buses":buses,"trains":trains}
        return
    except:
        return None

# Replace 'YOUR_GOOGLE_API_KEY' with your actual Google API key
# api_key = 'AIzaSyC0QHdh0hJktODiBlAVbWOXYGW3hp1wvWo'

# origin = 'kilampakkam'
# destination = 'sholinganalur'

# Call the function to get transit directions
# print(get_transit_directions(api_key, origin, destination))
