import sqlite3
from datetime import time, datetime, timedelta

conn = sqlite3.connect('fresco.sqlite')
cur = conn.cursor()

def time_to_frames(timecode):
    segment = timecode.split(' ')
    hmsf = []
    fps = 25
    hours = minutes = seconds = 60

    for i in range(len(segment)):
        segment[i] = segment[i].split(':')
        hmsf.append(int(segment[i][0])*minutes*seconds*fps + int(segment[i][1])*seconds*fps + int(segment[i][2])*fps + int(segment[i][3]))

    return hmsf


def transfer():

    clips = cur.execute('SELECT DISTINCT name FROM timecode').fetchall()

    cur.execute('CREATE TABLE IF NOT EXISTS clips (id INTEGER PRIMARY KEY, name TEXT, usage INTEGER, start TEXT, startedl TEXT, end TXT, endedl TEXT);')

    for clip in clips:
        start_comm = '''SELECT MIN(start), edl FROM timecode WHERE name='%s';''' % clip[0]
        end_comm = '''SELECT MAX(end), edl FROM timecode WHERE name='%s';''' % clip[0]
        start = cur.execute(start_comm).fetchone()
        end = cur.execute(end_comm).fetchone()
        insert = '''INSERT INTO clips (name, start, startedl, end, endedl) VALUES ('%s', '%s', '%s', '%s', '%s');''' % (clip[0], start[0], start[1], end[0], end[1])
        print(insert)
        cur.execute(insert)
        conn.commit()


clips = cur.execute('''--sql
                    SELECT *  FROM clips;
                    ''').fetchall()

counter = []

class Timecode:
    def __init__(self, timecode, framerate=25):
        self.timecode = timecode
        self.framerate = framerate

    def to_time(self):
        return datetime.strptime(f'{self.timecode[:-3]}{str( int(self.timecode[-2:]) / self.framerate)[1:]}', "%H:%M:%S.%f")

    def to_timecode(self):
        # if ( item >= 10): 
        #     return str(item)
        # return 
        return 0


def tcode_to_time(code):
    framerate = 25
    return datetime.strptime(f'{code[:-3]}{str( int(code[-2:]) / framerate)[1:]}', "%H:%M:%S.%f")

def to_timecode():
    return null

def time_to_timecode(item):
    framerate = 25
    if ( item >= 10): 
        return str(item)
    return 
    return 0

counter = 1
for i in clips[:3]:
    id, name, start, startedl, end, endedl = i

    duration = Timecode(end).to_time()  - Timecode(start).to_time()

    if counter < 1:
        print( dir(duration))
        print( type(duration))
        counter += 1

    print( name, ':', duration.total_seconds() )


conn.close()