from checkio import api
from checkio.referees.io import CheckiOReferee
from checkio.referees.cover_codes import unwrap_args, js_unwrap_args
from checkio.signals import ON_CONNECT


from tests import TESTS

api.add_listener(
    ON_CONNECT,
    CheckiOReferee(
        tests=TESTS,
        function_name={
            "python": "checkio",
            "js": "numberRadix",
        },
        cover_code={
            'python-27': unwrap_args,
            'python-3': unwrap_args,
            'js-node': js_unwrap_args,
        },
    ).on_ready)
