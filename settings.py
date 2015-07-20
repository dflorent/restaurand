DEBUG = False

try:
    from local_settings import *
except ImportError, e:
    print 'Unable to load local_settings.py:', e
