import http from 'k6/http';
import { check, sleep } from 'k6';

// export let options ={
//     vus: 10,
//     duration: '10s',
//     iteration: 2,
// }

export default function(){
    // let res = http.post('');
    const payload = JSON.stringify({
        email:'new@new.com',
        password: 'new123',
    });

    const params = {
        headers : {
            'content-type': 'application/json',
        },
    };

    const res = hhtp.post('https://reqres.in/api/login', payload, params);
    check(res, {
        'Login status is 200': (r)=> r.status === 200,
        'Token recieved': (r)=> r.json('token') !== '',
    })

    sleep(1);
}