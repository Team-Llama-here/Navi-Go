from .Variable import MODEL

if MODEL == "C":
    from .Context.Context import getContextC as getContext
    from .SourDest.SourDest import getSourDestC as getSourDest
    from .Transit.Transit import askgpt as askgemini
    from .General.Response import getResponseC as getResponse
else:
    from .Context.Context import getContext
    from .SourDest.SourDest import getSourDest
    from .Transit.Transit import askgemini
    from .General.Response import getResponse
from .Context.getTransit import get_transit_directions
from .Context.link import generateLink
from db import create_complaint, get_db

# from Translate.Translate import translate_to_english, translate_to_native
import uuid


def GetResponse(query, lang="en", location=0, mode=0):
    cont = int(getContext(query).split(":")[1].strip())
    uui = str(uuid.uuid4())
    # flag = 0
    # if lang != 'en':
    #     flag = 1
    #     query = translate_to_english(query)
    if mode == 2:
        source, destination, departure = getSourDest(query).split(",")
        source = source.split(":")[1].strip()
        destination = destination.split(":")[1].strip()
        departure = departure.split(":")[1].strip()
        if source == "here":
            source = location
        # if departure!=None or departure!="None":
        #     transit_data = get_transit_directions(source, destination)
        # else:
        #     transit_data = get_transit_directions(source, destination, departure_time=departure)
        transit_data = get_transit_directions(source, destination)
        new = {"mode": "train"}
        transit_data.update(new)
        response = askgemini(str(transit_data))
        # if flag==1:
        #     return 0, {
        # "role": "bot",
        # "msg": translate_to_native(response, lang),
        # "id": uui,
        # "options": [],
        # "link": generateLink(source, destination)
        # }
        # else:
        return {
            "role": "bot",
            "msg": response,
            "id": uui,
            "options": [],
            "link": generateLink(source, destination),
        }
    elif mode == 1:
        source, destination, departure = getSourDest(query).split(",")
        source = source.split(":")[1].strip()
        destination = destination.split(":")[1].strip()
        departure = departure.split(":")[1].strip()
        if source == "here":
            source = location
        # if departure!=None or departure!="None":
        #     transit_data = get_transit_directions(source, destination)
        # else:
        #     transit_data = get_transit_directions(source, destination, departure_time=departure)
        transit_data = get_transit_directions(source, destination)
        new = {"mode": "bus"}
        transit_data.update(new)
        response = askgemini(str(transit_data))
        # if flag==1:
        #     return 0, {
        # "role": "bot",
        # "msg": translate_to_native(response,lang),
        # "id": uui,
        # "options": [],
        # "link": generateLink(source, destination)
        # }
        # else:
        return {
            "role": "bot",
            "msg": response,
            "id": uui,
            "options": [],
            "link": generateLink(source, destination),
        }
    else:
        if cont == 1:
            source, destination, departure = getSourDest(query).split(",")
            source = source.split(":")[1].strip()
            destination = destination.split(":")[1].strip()
            departure = departure.split(":")[1].strip()
            if source == "here":
                source = location
            # if   departure!=None or departure!="None":
            #     transit_data = get_transit_directions(source, destination)
            # else:
            #     transit_data = get_transit_directions(source, destination, departure_time=departure)
            transit_data = get_transit_directions(source, destination)
            # print(transit_data)
            nbus = len(transit_data["buses"])
            ntrain = len(transit_data["trains"])
            if nbus > 0 and ntrain > 0:
                # ask for response
                print("")
                # if flag==1:
                #     return 1, {
                #     "role": "bot",
                #     "msg": translate_to_native("Which mode of travel you prefer?",lang),
                #     "id": uui,
                #     "options": [
                #         {
                #         "text": "Bus",
                #         "resp": "let's go by bus",
                #         },{
                #         "text": "train",
                #         "resp": "let's go by train",
                #         }
                #     ],
                #     "link": generateLink(source, destination)
                #     }
                # else:
                return {
                    "role": "bot",
                    "msg": "Which mode of travel you prefer?",
                    "id": uui,
                    "options": [
                        {
                            "text": "Bus",
                            "resp": "let's go by bus",
                        },
                        {
                            "text": "train",
                            "resp": "let's go by train",
                        },
                    ],
                    "link": generateLink(source, destination),
                }

            elif nbus == 0:
                new = {"mode": "train"}
                transit_data.update(new)
                response = askgemini(str(transit_data))
                # if flag==1:
                #     return 0, {
                #     "role": "bot",
                #     "msg": translate_to_native(response,lang),
                #     "id": uui,
                #     "options": [],
                #     "link": generateLink(source, destination)
                #     }
                # else:
                return {
                    "role": "bot",
                    "msg": response,
                    "id": uui,
                    "options": [],
                    "link": generateLink(source, destination),
                }
            else:
                new = {"mode": "bus"}
                transit_data.update(new)
                response = askgemini(str(transit_data))
                # if flag==1:
                #     return 0, {
                #     "role": "bot",
                #     "msg": translate_to_native(response,lang),
                #     "id": uui,
                #     "options": [],
                #     "link": generateLink(source, destination)
                #     }
                # else:
                return {
                    "role": "bot",
                    "msg": response,
                    "id": uui,
                    "options": [],
                    "link": generateLink(source, destination),
                }
        elif cont == 2:
            create_complaint(get_db(), query)
            return "Complaint"
        else:
            response = getResponse(query)
            # if flag==1:
            #     return 0, {
            #         "role": "bot",
            #         "msg": translate_to_native(response,lang),
            #         "id": uui,
            #         "options": [],
            #         "link": ""
            #         }
            # else:
            return {
                "role": "bot",
                "msg": response,
                "id": uui,
                "options": [],
                "link": "",
            }

    # print(cont)


# print(GetResponse(input("Enter your query: ")))
