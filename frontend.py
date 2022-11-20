import socket
import os
import struct
import time


def socket_client():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect(('127.0.0.1', 50000))

    while 1:
        filepath = 'dog.jpg'
        if os.path.isfile(filepath):
            basename = os.path.basename(filepath)
            fhead = struct.pack('128sl', basename.encode(),
                                os.stat(filepath).st_size)
            s.send(fhead)
            print('client filepath: {0}'.format(filepath))

            fp = open(filepath, 'rb')
            while 1:
                data = fp.read(1024)
                if not data:
                    print('{0} file send over...'.format(filepath))
                    break
                s.send(data)
            time.sleep(1)
            result = s.recv(1024)
            print('The class of the image is ', result.decode())
        s.close()
        break


if __name__ == '__main__':
    socket_client()
