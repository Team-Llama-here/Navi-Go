GAPI_KEY = "AIzaSyDXbKFBeueid2nV3TuQJFsk0mmlbgqrx4M"
CAPI_KEY = "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"
prompt='''The given transit data will be as of the follwing format{
    'source': <source place>,
    'destination': <destination place>,
    'fare': <fare for buses from source to destination>,
    'distance': <distance between source and destination in kilometers>,
    'buses': [
        [<bus number of bus-1>, <arriving place of bus-1>, <arriving time of bus-1>, <destination place of bus-1>, <reaching time of bus-1>],
        [<bus number of bus-2>, <arriving place of bus-2>, <arriving time of bus-2>, <destination place of bus-2>, <reaching time of bus-2>],
        ...
    ],
    'trains': [
        [<train name of train-1>, <arriving station of train-1>, <arriving time of train-1>, <destination station of train-1>, <reaching time of train-1>],
        [<train name of train-2>, <arriving station of train-2>, <arriving time of train-2>, <destination station of train-2>, <reaching time of train-2>],
        ...
    ], 'mode':<preferred mode by user>
}.
Understand the given transit data and give proper instruction for all availabe buses or trains in the following format only.
1.Take <bus1> from <starting point> at <starting time> it will reach <end point> at <reaching time>.
2.Take <bus2> from <starting point> at <starting time> it will reach <end point> at <reaching time>.
3.Take <train1> from <starting point> at <starting time> it will reach <end point> at <reaching time>.

The transit data is '''








